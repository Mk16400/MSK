"""Pull the newest Barrel & Bullion edition (and optional layout) from the public Google Drive feed folder."""
import json, os, re, subprocess, sys, tempfile, urllib.request

FOLDER = "10w28jgrtszTfV_oEylXo5C077hiouXXs"
STATE = ".feed-state.json"
UA = {"User-Agent": "Mozilla/5.0 (BarrelBullionBot)"}

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read().decode("utf-8")

def listing():
    html = get(f"https://drive.google.com/embeddedfolderview?id={FOLDER}#list")
    items = re.findall(r'id="entry-([\w-]{20,})".*?class="flip-entry-title">([^<]+)<', html, re.S)
    return [(i, t.strip()) for i, t in items]

def latest(items, pattern):
    hits = [(re.match(pattern, t).group(1), i, t) for i, t in items if re.match(pattern, t)]
    return max(hits) if hits else None

def download(fid):
    return get(f"https://drive.google.com/uc?export=download&id={fid}")

def js_ok(text):
    if "const EDITION" not in text: return False
    with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False, encoding="utf-8") as f:
        f.write(text); p = f.name
    return subprocess.run(["node", "--check", p]).returncode == 0

def main():
    # Drive feed is switched off: editions are now pushed from Mughees's computer.
    if not os.path.exists("FEED_ENABLED"):
        print("Drive feed disabled; nothing to do."); return
    state = json.load(open(STATE)) if os.path.exists(STATE) else {}
    items = listing()
    print(f"feed files seen: {len(items)}")
    changed = False
    ed = latest(items, r"^bb-edition-(\d{8}-\d{4})\.js$")
    if ed and ed[1] != state.get("edition"):
        text = download(ed[1])
        if js_ok(text):
            open("edition.js", "w", encoding="utf-8").write(text if text.endswith("\n") else text + "\n")
            state["edition"] = ed[1]; state["edition_title"] = ed[2]; changed = True
            print("applied", ed[2])
        else:
            print("REJECTED invalid edition", ed[2]); sys.exit(1)
    tp = latest(items, r"^bb-template-(\d{8}-\d{4})\.html$")
    if tp and tp[1] != state.get("template"):
        text = download(tp[1])
        if '<script src="edition.js"></script>' in text and "Barrel" in text:
            open("index.html", "w", encoding="utf-8").write(text)
            state["template"] = tp[1]; state["template_title"] = tp[2]; changed = True
            print("applied", tp[2])
        else:
            print("REJECTED invalid template", tp[2]); sys.exit(1)
    if changed:
        json.dump(state, open(STATE, "w"), indent=2)
    else:
        print("no new files")

if __name__ == "__main__":
    main()
