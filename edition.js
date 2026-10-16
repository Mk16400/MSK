/* ===== EDITION DATA — each edition replaces this block ===== */
const EDITION = {
  name:"Morning Edition",
  date:"Friday, 16 October 2026",
  pressTime:"08:00 PKT",
  next:"Next: Midday Edition, 12:00 PKT",
  todayKey:"Fri",
  kicker:"PPI erupts 6.3% · 1.3% MoM doubles forecast · Hike odds >55% · Brent $105 · Gold $4,151 · BTC crashed $80k",
  headline:"Double <em>whammy</em> — PPI erupts 6.3% as inflation siege lifts October hike odds past 55%",
  dek:"September PPI blew past expectations at 6.3% YoY (+1.3% MoM vs +0.5% consensus), the biggest monthly gain since March 2022, delivering the inflation double-whammy feared since Tuesday's hot CPI. October FOMC hike odds have surged past 55% as traders fully price in tighter policy. Bitcoin crashed below $80,000 on the PPI release before recovering to $81,212 overnight. Brent holds above $105, set for a weekly gain as the geopolitical premium absorbs the macro headwind. Gold retreats to $4,151 as the double data whammy removes any dovish Fed cover. Ten-year yields whipsawed again, settling at 5.08%. Today's $1.25B Deribit BTC options expiry caps a volatile week.",
  verdict:[
    ["Oil","Brent holds $105 despite double inflation data — geopolitical premium from Hormuz absorbs macro headwinds, set for weekly gain","up","Geopolitical floor"],
    ["Gas","TTF pulls back to €85.6, HH at $3.20 — winter storage deficit persists but short-term repricing on macro anxiety","flat","Consolidation"],
    ["Gold","Slides to $4,151 as double CPI/PPI whammy lifts yields — no dovish Fed cover remains, $4,100 floor under threat","down","Data headwind"],
    ["Silver","At $57.18, down 12% on the month — industrial drag deepens as rate-hike expectations compound","down","Industrial drag"],
    ["Dollar","DXY firm near 102 as double inflation data confirms higher-for-longer — PPI cemented the case for October hike","up","Double data"],
    ["BTC / ETH","BTC crashed below $80k on PPI, recovered to $81.2k — ETH at $2,373, Deribit expiry today adds risk","down","PPI crash"]
  ],
  assets:[
    {id:"brent",nm:"Brent crude",px:105.35,dp:2,u:"USD/bbl · ICE Dec",pre:"$",d:-0.54,m:+0.51,y:+71.89,note:"Holds above $105 despite double inflation data — geopolitical premium from Hormuz absorbs macro headwinds, set for weekly gain per Bloomberg",tag:"oil"},
    {id:"wti",nm:"WTI crude",px:97.20,dp:2,u:"USD/bbl · NYMEX Nov",pre:"$",d:-0.78,m:-4.57,y:+70.17,note:"Near $97 — spread to Brent widens to $8.15, reflecting US demand-destruction fears from hot PPI while supply risks persist",tag:"oil"},
    {id:"hh",nm:"Henry Hub",px:3.20,dp:2,u:"USD/MMBtu · NYMEX Nov",pre:"$",d:+0.18,m:+10.82,y:+9.05,note:"Steady at $3.20 — EIA storage report showed below-normal injection, winter demand thesis intact despite macro noise",tag:"gas"},
    {id:"ttf",nm:"TTF gas",px:85.59,dp:2,u:"EUR/MWh · ICE Nov",pre:"€",d:-0.98,m:+12.09,y:+169.01,note:"Pulls back from €87 to €85.6 — short-term repricing but structural scarcity unchanged, EU storage at 73% vs 80% target",tag:"gas"},
    {id:"gold",nm:"Gold",px:4151,dp:0,u:"USD/oz · spot",pre:"$",d:-0.48,m:-4.39,y:-2.33,note:"Slides to $4,151 as double CPI/PPI data removes dovish Fed cover — yields firm at 5.08%, October hike odds >55%",tag:"metals"},
    {id:"silver",nm:"Silver",px:57.18,dp:2,u:"USD/oz · spot",pre:"$",d:-0.30,m:-12.21,y:+10.19,note:"At $57.18, down 12% on the month — industrial drag compounds as rate-hike expectations intensify post-PPI",tag:"metals"},
    {id:"btc",nm:"Bitcoin",px:81212,dp:0,u:"USD · spot",pre:"$",d:-0.41,m:null,y:null,note:"Crashed below $80k on PPI release, recovered to $81.2k by Asia open — $1.25B Deribit expiry today, funding rates deeply negative",tag:"crypto"},
    {id:"eth",nm:"Ethereum",px:2373,dp:0,u:"USD · spot",pre:"$",d:-1.84,m:null,y:null,note:"Drops to $2,373 — ETF outflows continue past 11 days, PPI sell-off extended the decline, $247M Deribit expiry today",tag:"crypto"}
  ],
  extraTape:[
    ["US 10Y","5.08%","−3bp"],
    ["US 30Y","5.41%","−5bp"],
    ["DXY","102.03","+0.04%"],
    ["EUR/USD","1.1212","−0.07%"],
    ["USD/JPY","158.07","+0.24%"],
    ["Fed funds","3.50–3.75%","hike ~58%"]
  ],
  chain:[
    ["PPI erupts 6.3%","September PPI at 6.3% YoY, +1.3% MoM — more than double the +0.5% consensus, biggest monthly gain since March 2022","PPI +1.3%"],
    ["Double whammy confirmed","Hot PPI on top of hot CPI (3.7% headline, 2.6% core) — both producer and consumer prices running far above target","CPI + PPI"],
    ["October hike odds surge","Markets now price >55% chance of 25bp hike at Oct 27–28 FOMC — some traders see it as fully priced in through year-end","Hike >55%"],
    ["BTC crashes below $80k","Bitcoin plunges from $83k through $80k on the PPI release as risk assets sell off hard — recovers to $81.2k by Asia open","BTC <$80k"],
    ["Gold slides to $4,151","Double data removes any dovish Fed cover — yields firm at 5.08%, gold retreats from $4,138 with no bounce this time","Gold −0.5%"],
    ["Oil holds on geopolitics","Brent absorbs the macro headwind at $105 — Hormuz premium, Middle East tensions and supply constraints override rate fears","Brent $105"]
  ],
  stories:[
    {tag:"rates",tags:["rates","ppi","inflation","fed","fomc"],h:"PPI Erupts 6.3% — Inflation Double-Whammy Seals the Case for October Hike",impact:5,
     happened:"<p>September PPI released Thursday at 17:30 PKT (8:30 AM ET) came in far above expectations on every measure. Headline PPI surged 6.3% year-on-year, up from 5.6% in August and the highest annual rate since December 2022. Month-on-month, producer prices rose 1.3% — more than double the +0.5% consensus and the largest monthly gain since March 2022. Core PPI (excluding food and energy) rose 0.7% month-on-month, up sharply from +0.2% in August. Core annual PPI hit 5.0%, up from 4.6%.</p><p>The BLS said goods prices advanced 2.6% and services rose 0.8% in September, with fuel costs driving the bulk of the goods increase. China's September PPI at 5.0% (above 4.5% expected) had already confirmed a global producer-price shock from $100+ oil. Retail sales also beat at +0.8% MoM (vs +0.3% expected), though the control group missed at +0.1%.</p>",
     why:"<p>This is the double whammy the market feared. Hot CPI on Tuesday (3.7% headline, 2.6% core) showed consumers are paying more. Hot PPI on Thursday confirms producers are paying more too — and passing it on. The 1.3% monthly PPI spike is not just energy: core PPI at +0.7% shows broad-based cost pressure working through the supply chain. The fact that retail sales beat headline expectations (even if the control group missed) means the consumer is still spending despite the price pressure — that is inflationary, not disinflationary. The Fed's case for standing pat has evaporated.</p>",
     days:"<p>The inflation data week is over. Markets now enter the pre-FOMC positioning phase with October hike odds above 55%. There is no major US data release today — the focus shifts to Deribit options expiry (crypto) and IMF-World Bank meetings in Bangkok. Fed speakers will be closely watched for any pushback against the hike narrative. If none comes, the hike becomes the base case by Monday.</p>",
     months:"<p>The FOMC on 27–28 October is now a live meeting leaning toward a hike. September dot plots showed nine of nineteen officials expecting at least one more hike in 2026. Goldman Sachs projects a 25bp increase in October, Bank of America forecasts hikes in both October and December. The median year-end fed funds forecast among officials is 4.1%, implying at least one more 25bp increase from 3.50–3.75%. If the Fed hikes, the terminal rate debate shifts to whether December is also in play.</p>",
     src:[6,7,8,14,15,22]},
    {tag:"oil",tags:["oil","brent","wti","hormuz","geopolitics"],h:"Oil Holds $105, Set for Weekly Gain — Geopolitical Floor Absorbs PPI Shock",impact:4,
     happened:"<p>Brent crude holds at $105.35 this morning (−0.54%), remarkably resilient after two days of hot inflation data that should have triggered aggressive selling on demand-destruction fears. WTI is at $97.20 (−0.78%). Bloomberg's daily oil roundup notes oil is set for a weekly gain with focus on the Middle East and IEA release. The Brent-WTI spread has widened to $8.15 from last week's $10.46.</p><p>The geopolitical premium continues to dominate. Saudi Arabia maintains East-West pipeline routing to bypass Hormuz. Houthi attacks on infrastructure persist. Bloomberg reported on the 'resilient Middle East oil trade learning to live with war.' Despite hike odds above 55%, Brent has barely budged from its $104–$106 range this week.</p>",
     why:"<p>Oil's resilience is the week's most telling signal. Two inflation data points that would normally crush crude on demand-destruction fears have barely dented the price. This confirms the geopolitical supply premium is structural, not speculative. Goldman's estimated $20+ risk premium from Hormuz disruptions is holding firm. The Brent-WTI spread widening reflects US-specific demand concerns (PPI and rate fears) while global supply remains tight. Oil above $100 is itself inflationary — creating the feedback loop: high oil → hot CPI/PPI → Fed hikes → stronger dollar → but supply constraints keep oil elevated anyway.</p>",
     days:"<p>The IEA's monthly oil market report is the next supply-side catalyst. Any revision to global demand forecasts in light of the inflation data matters for OPEC+ policy. Hormuz tanker flow data and weekend geopolitics are the wildcard — a Houthi escalation or Iranian naval activity could spike Brent toward $108–$110.</p>",
     months:"<p>OPEC+ meets 1 November with global demand growth at just 400k bpd. If the Fed hikes and the dollar strengthens, OPEC faces a choice: defend $100 with deeper cuts (bullish medium-term) or accept lower demand-growth forecasts. The stagflation risk is oil's key medium-term theme: prices high enough to keep CPI elevated, but monetary tightening slowing the economy.</p>",
     src:[0,1,10,24]},
    {tag:"metals",tags:["metals","gold","silver","yields","fed"],h:"Gold Retreats to $4,151 — Double Data Whammy Kills Dovish Cover",impact:4,
     happened:"<p>Gold slid to $4,151 (−0.48%), extending its post-CPI weakness as the hot PPI data eliminated any remaining hope for a dovish Fed pivot. Bloomberg reported 'Gold Holds Gains With Haven Demand and Lower Yields in Focus' after Thursday's session, but the morning tape shows renewed pressure as Asia processes the full weight of the double inflation data. Silver fell to $57.18 (−0.30%), now down 12.2% on the month — the gold-silver ratio continues widening on industrial headwinds.</p><p>The ten-year yield settled at 5.08% (−3bp from Wednesday's post-CPI close of 5.11%) but remains elevated. The initial PPI reaction spiked yields before a partial reversal as the bond market debated whether the Fed should respond to supply-driven inflation with tighter policy.</p>",
     why:"<p>Gold's problem is simple: the data trail no longer supports the 'Fed can hold' thesis. Tuesday's CPI showed core at 2.6% moving in the wrong direction. Thursday's PPI confirmed it's not just energy — core PPI at +0.7% MoM is broad-based. With October hike odds above 55%, real yields are likely to rise further if the Fed follows through, and gold cannot rally into rising real yields. Bloomberg noted gold is 'steady as Fed official's remarks temper rate-hike bets' — but those remarks came before the PPI data. The next Fed speaker who defends holding will move gold more than any data point.</p>",
     days:"<p>No major US data today. Gold trades on Fed speaker commentary and positioning flows ahead of the weekend. $4,100 is the key support — a break below sends gold toward $4,050 and would signal the market has fully priced in the October hike. Silver's 12% monthly decline suggests no industrial demand cushion.</p>",
     months:"<p>The FOMC on 27–28 October defines gold's Q4 trajectory. A hike with hawkish language (signalling December is also live) could push gold below $4,000. A hike with neutral language ('data dependent, no pre-commitment') keeps gold in the $4,050–$4,200 range. The least likely outcome — a hold — would send gold sharply higher toward $4,300. Central-bank purchases at 720 tonnes forecast for 2026 and record ETF holdings at 4,256 tonnes provide a structural floor.</p>",
     src:[2,3,9,11,16,23]},
    {tag:"crypto",tags:["crypto","btc","eth","deribit","ppi"],h:"Bitcoin Crashes Below $80k on PPI — Recovers to $81k Ahead of Deribit Expiry",impact:4,
     happened:"<p>Bitcoin plunged below $80,000 for the first time in weeks within hours of the hot PPI release, falling from approximately $83,000 to a session low near $79,200. The move triggered significant liquidations across crypto derivatives. BTC has since recovered to $81,212 (−0.41% from the US close) as Asia opens, but the damage to sentiment is severe. Ethereum dropped to $2,373 (−1.84%), extending its decline as ETF outflows continue past their eleventh consecutive day.</p><p>Today's $1.25 billion Deribit BTC options expiry ($247 million ETH) is the session's key event. With BTC funding rates deeply negative and max-pain levels likely well above spot, the expiry could amplify volatility in either direction. The post-PPI crash took BTC below key technical support.</p>",
     why:"<p>The PPI crash confirmed what the CPI sell-off started: crypto cannot decouple from macro in a rising-rate environment. The $80k breakdown was a clear risk-off capitulation — traders dumped risk assets as October hike odds surged past 55%. The recovery to $81.2k is tentative and driven by short covering, not fresh buying. ETH's inability to bounce — it's at a multi-week low of $2,373 with persistent ETF outflows — signals deeper structural weakness. Negative funding rates across the BTC complex create short-squeeze potential, but the macro backdrop gives shorts confidence to hold.</p>",
     days:"<p>The $1.25B Deribit BTC options expiry today is the immediate catalyst. Max-pain levels will pull price in either direction. If BTC stays below $82k through expiry, it confirms bearish positioning. A recovery above $83k would signal the post-PPI crash was a flush, not a trend change. Weekend flows after expiry will reveal whether institutional positioning is adding or reducing risk.</p>",
     months:"<p>The macro backdrop is the most hostile for crypto since the September hike: 5%+ yields, a firm dollar, and October hike odds above 55%. The FOMC on 27–28 October determines whether BTC retests $75k (hike + hawkish) or recovers above $85k (hold + dovish). ETH's ETF outflow streak past 11 days suggests institutional capitulation — a reversal in flows would be the first sign of recovery.</p>",
     src:[19,20,14,25]},
    {tag:"gas",tags:["gas","ttf","hh","lng","hormuz","winter"],h:"TTF Pulls Back to €85.6 but Winter Deficit Remains Structural",impact:3,
     happened:"<p>TTF natural gas pulled back to €85.59/MWh (−0.98%), retreating from Wednesday's €87+ level but remaining up 169% year-on-year. Henry Hub is steady at $3.20 (+0.18%). The pullback reflects some macro-driven repricing — even gas cannot entirely ignore a PPI print that doubles consensus — but the structural winter deficit keeps a firm floor under prices. Bloomberg continued its coverage of Qatar's efforts to reinvent LNG trade around Hormuz to maintain global clout.</p><p>ACER's warning of a 26 bcm LNG shortfall remains the structural backdrop. EU storage sits at 73% versus the lowered 80% mandatory target. The TTF-HH spread remains historically extreme at €85.6 vs $3.20 — Europe continues to bid LNG away from Asian buyers at enormous premiums.</p>",
     why:"<p>Gas is the one commodity where the double inflation data barely registers. The storage deficit is physical — heating season is approaching, EU storage is short, and Hormuz disruptions have structurally reduced available LNG supply. Qatar's force majeure extensions and rerouting efforts show the scale of the problem. Even if the Fed hikes twice more, it doesn't add gas molecules to European storage. The pullback from €87 to €85.6 is noise; the structural thesis is unchanged.</p>",
     days:"<p>Weather forecasts for Northern Europe are the near-term TTF driver. An early cold snap accelerates the €90 move. Hormuz shipping data and any updates from Qatar's rerouting program matter for supply. Henry Hub trades on the latest EIA storage injection data — below-normal builds support the tightening thesis.</p>",
     months:"<p>If Hormuz disruptions persist through winter, TTF challenges €90–100 by November. The storage deficit is too wide to close before heating season begins. JERA's CEO said Qatar supply is unlikely to recover soon. Central and Eastern European countries without LNG terminal access face the greatest supply risk. Morgan Stanley sees further upside.</p>",
     src:[4,5,13,24]},
    {tag:"rates",tags:["rates","dollar","dxy","forex","yields","fomc"],h:"Dollar Firms at 102 as Double Data Makes October Hike the Base Case",impact:4,
     happened:"<p>The DXY dollar index firms at 102.03 (+0.04%), holding near its post-CPI highs as the double inflation data cements the higher-for-longer narrative. EUR/USD is at 1.1212 (−0.07%), USD/JPY has pushed to 158.07 (+0.24%), approaching the BoJ intervention zone near 160. The ten-year yield settled at 5.08% (−3bp) and the thirty-year at 5.41% (−5bp) — yields dipped modestly as bond markets debated whether supply-driven inflation should trigger tighter policy.</p><p>October FOMC hike odds have surged past 55% per futures markets. Goldman Sachs projects a 25bp hike, Bank of America expects hikes at both October and December meetings. The median official year-end rate forecast is 4.1%, implying at least one more 25bp increase from 3.50–3.75%.</p>",
     why:"<p>The dollar's firmness is the confirmation trade. Both CPI and PPI coming in hot validates the higher-for-longer thesis. The DXY holding above 102 despite modest yield declines suggests currency markets are pricing the October hike as the base case, not just a possibility. USD/JPY at 158 is approaching the BoJ intervention zone — if the Fed hikes and the BoJ holds at their near-simultaneous meetings (FOMC Oct 27–28, BoJ Oct 29–30), USD/JPY could push through 160. The yield dip is a bond-market debate, not a dollar-market debate: the dollar has moved past the question of whether the Fed hikes and is now pricing how much further it goes.</p>",
     days:"<p>No major US data today. Fed speaker commentary is the dollar's catalyst — any pushback against the hike narrative pulls DXY back toward 101.5. USD/JPY above 158 puts BoJ intervention risk on the table. Weekend positioning ahead of the FOMC in 11 days matters.</p>",
     months:"<p>The FOMC on 27–28 October and the BoJ meeting on 29–30 October are the twin FX events. A Fed hike plus BoJ hold sends USD/JPY through 160 and likely triggers intervention. The DXY's May 2025 high becomes the ceiling only if the Fed holds. If it hikes, DXY targets 103–104. EUR/USD risk is to the downside toward 1.10 if the rate differential widens further.</p>",
     src:[12,16,17,18]}
  ],
  calendar:[
    {k:"Fri",d:"16 Oct",ev:[
      {t:"Evening",n:"Deribit options expiry",c:"$1.25B BTC · $247M ETH",i:"h",x:"Massive notional expiry after BTC's crash below $80k. Negative funding rates and max-pain levels above spot create binary risk. Post-expiry weekend flows reveal institutional positioning."},
      {t:"Ongoing",n:"IMF-World Bank meetings",c:"Bangkok, through 18 Oct",i:"m",x:"Global financial officials discuss the inflation-commodity shock. Watch for coordinated statements on energy security and emerging-market policy. Any G7 commentary on Hormuz disruption matters for oil."}]},
    {k:"Mon",d:"19 Oct",ev:[
      {t:"All day",n:"Pre-FOMC positioning begins",c:"FOMC in 8 days · hike odds >55%",i:"h",x:"The week after hot CPI and PPI is when FOMC positioning solidifies. If no Fed speaker pushes back, the October hike becomes the consensus base case. Bank earnings continue to provide the corporate health check."}]},
    {k:"Tue",d:"20 Oct",ev:[
      {t:"17:30",n:"Housing starts + building permits",c:"September housing data",i:"m",x:"Housing under 5%+ mortgage rates and $100+ oil. A sharp slowdown could ease hike pressure — resilience argues for higher-for-longer. Key for real-economy signal after the inflation data shock."}]},
    {k:"Wed",d:"21 Oct",ev:[
      {t:"All day",n:"Fed Beige Book",c:"Regional economic conditions",i:"h",x:"Anecdotal evidence from Fed districts on energy cost pass-through, hiring, consumer sentiment. The Beige Book shapes FOMC thinking more than most traders realize — look for language on inflation expectations and business pricing power."}]},
    {k:"Thu",d:"22 Oct",ev:[
      {t:"17:30",n:"Existing home sales + jobless claims",c:"September home sales, weekly claims",i:"m",x:"Home sales under record mortgage rates test housing resilience. Jobless claims show labor-market health — any uptick could temper hike urgency. Both feed into the FOMC's assessment."}]}
  ],
  later:[["27–28 Oct","FOMC meeting · hike odds now >55% after double inflation data — October hike is the base case"],["29–30 Oct","Bank of Japan meeting · USD/JPY at 158, approaching 160 intervention zone"],["1 Nov","OPEC+ meeting · December production targets with demand growth at just 400k bpd"],["3 Nov","US midterm elections · energy policy, inflation and Iran sanctions on the ballot"],["Winter","EU gas storage 73% vs 80% target · ACER warns of 26 bcm LNG shortfall"]],
  scenarios:[
    {id:"fedpush",nm:"Fed officials push back on hike",sub:"Speakers before the FOMC argue data is supply-driven, hike odds retreat to 40%, yields drop",
     m:{Oil:"up",Gas:"up",Gold:"up2",Silver:"up",Dollar:"dn",Yields:"dn",BTC:"up2",ETH:"up"},
     why:"If Fed speakers argue the CPI/PPI spike is primarily supply-driven (oil, Hormuz) and not demand-driven, the case for a hike weakens. Yields retreat below 5.00%, dollar falls toward 101, gold surges above $4,200. BTC reclaims $84k as risk appetite returns. Oil rises as the demand-destruction narrative fades. This is the least likely scenario given the data, but Waller's prior pushback shows it's possible."},
    {id:"digest",nm:"Markets digest + FOMC drift toward hike",sub:"No Fed pushback, hike odds consolidate near 55–60%, positioning builds gradually",
     m:{Oil:"fl",Gas:"up",Gold:"dn",Silver:"dn",Dollar:"up",Yields:"fl",BTC:"fl",ETH:"dn"},
     why:"The base case. Markets have priced the double whammy. The ten-year holds 5.05–5.12%, DXY stays near 102. Oil range-bound $104–$107 on geopolitics vs macro. TTF continues toward €88–90 on winter deficit. Gold drifts toward $4,100 as the hike consensus builds. Crypto stays range-bound with BTC $80k–$83k, ETH leaking lower. The FOMC on Oct 27 becomes the resolution event."},
    {id:"escalate",nm:"Geopolitical escalation + oil spike",sub:"Hormuz incident or Houthi strike disrupts flows, oil spikes above $108, inflation panic deepens",
     m:{Oil:"up2",Gas:"up2",Gold:"up",Silver:"fl",Dollar:"up",Yields:"up2",BTC:"dn2",ETH:"dn2"},
     why:"An oil spike from a Hormuz incident would deepen the inflation panic. Brent above $108 means the next CPI print is also likely hot. Yields spike past 5.20% as the market prices in not just an October hike but December too. Gold rises on haven demand despite higher yields — the safe-haven bid overcomes the rate headwind. Crypto sells off on the stagflation trade. Dollar surges toward 103+ as the US is a relative energy winner. This scenario pushes the terminal rate debate toward 4.25–4.50%."}
  ],
  levels:[
    ["Brent (Dec)","$103 · $105.35 · $108","Post-PPI support; morning spot; geopolitical escalation trigger."],
    ["WTI (Nov)","$95 · $97.20 · $100","Support; morning spot; triple-digit psychological resistance."],
    ["Gold","$4,100 · $4,151 · $4,200","Key support floor; morning spot; resistance since early October."],
    ["Silver","$55 · $57.18 · $59","Support; morning spot; pre-CPI level."],
    ["US 10Y","5.00% · 5.08% · 5.28%","Support; morning spot; CPI-spike high from Tuesday."],
    ["US 30Y","5.35% · 5.41% · 5.55%","Support; morning spot; resistance."],
    ["DXY","101.5 · 102.03 · 103.5","Support; morning spot; CPI-spike high target."],
    ["EUR/USD","1.110 · 1.1212 · 1.130","Support; morning spot; resistance."],
    ["USD/JPY","155 · 158.07 · 160","Support; morning spot; BoJ intervention zone."],
    ["Bitcoin","$79k · $81.2k · $84k","PPI-crash low; morning spot; pre-PPI level."]
  ],
  wire:[
    {d:"15 Oct",tag:"Oil",h:"Oil Set for Weekly Gain With Focus on Middle East, IEA Release",url:"https://www.bloomberg.com/news/articles/2026-10-15/latest-oil-market-news-and-analysis-for-oct-16",why:"Brent heads for a weekly gain despite double inflation data — geopolitical premium from Hormuz and Middle East strikes overrides macro headwinds."},
    {d:"15 Oct",tag:"Gold",h:"Gold Holds Gains With Haven Demand and Lower Yields in Focus",url:"https://www.bloomberg.com/news/articles/2026-10-15/gold-holds-gains-with-haven-demand-and-lower-yields-in-focus",why:"Gold found support after PPI-driven volatility as lower yields partially offset rate-hike fears — morning tape at $4,151 shows renewed pressure."},
    {d:"14 Oct",tag:"Rates",h:"Treasuries Slump as Hot Inflation Lifts Fed Rate-Hike Bets",url:"https://www.bloomberg.com/news/articles/2026-10-14/us-treasuries-slump-as-hot-inflation-lifts-fed-rate-hike-bets",why:"CPI day sparked the inflation alarm — two-year yield surged 12bp, ten-year rose 7bp, October FOMC hike odds doubled. PPI then confirmed the pattern."},
    {d:"14 Oct",tag:"Dollar",h:"Dollar Advances to Highest Since May 2025 on Fed Hike Views",url:"https://www.bloomberg.com/news/articles/2026-10-14/dollar-advances-to-highest-since-may-2025-on-fed-hike-views",why:"DXY hit its highest since May 2025 on CPI day — the double data whammy has kept it elevated near 102 with October hike now the base case."},
    {d:"14 Oct",tag:"Gold",h:"Gold Steady as Fed Official's Remarks Temper Rate-Hike Bets",url:"https://www.bloomberg.com/news/articles/2026-10-14/gold-steady-as-fed-official-s-remarks-temper-rate-hike-bets",why:"Waller's pushback gave gold a brief reprieve between CPI and PPI — but the hot PPI has since removed the dovish cover he provided."},
    {d:"14 Oct",tag:"Gas",h:"Qatar Reinvents LNG Trade to Restore Clout as Iran War Drags",url:"https://www.bloomberg.com/news/articles/2026-10-14/qatar-reinvents-lng-trade-to-restore-global-clout-even-as-iran-war-drags",why:"Qatar rerouting LNG around Hormuz — structural disruption maintains the TTF premium above €85, EU storage deficit unresolvable before winter."}
  ],
  sources:[
    ["Trading Economics · Brent crude","https://tradingeconomics.com/commodity/brent-crude-oil"],
    ["Trading Economics · WTI crude","https://tradingeconomics.com/commodity/crude-oil"],
    ["Trading Economics · Gold","https://tradingeconomics.com/commodity/gold"],
    ["Trading Economics · Silver","https://tradingeconomics.com/commodity/silver"],
    ["Trading Economics · EU natural gas","https://tradingeconomics.com/commodity/eu-natural-gas"],
    ["Trading Economics · US natural gas","https://tradingeconomics.com/commodity/natural-gas"],
    ["BLS · Producer Price Index September 2026","https://www.bls.gov/news.release/ppi.nr0.htm"],
    ["Babypips · US PPI and Retail Sales September 2026","https://www.babypips.com/news/headline-us-ppi-retail-sales-september-2026-gasoline-prices-fed-outlook-2026-10-15"],
    ["TT News · Wholesale inflation rises 6.3%","https://www.ttnews.com/articles/ppi-inflation-september-2026"],
    ["Bloomberg · Gold holds gains with haven demand","https://www.bloomberg.com/news/articles/2026-10-15/gold-holds-gains-with-haven-demand-and-lower-yields-in-focus"],
    ["Bloomberg · Latest oil market news Oct 16","https://www.bloomberg.com/news/articles/2026-10-15/latest-oil-market-news-and-analysis-for-oct-16"],
    ["Bloomberg · Treasuries slump on hot CPI","https://www.bloomberg.com/news/articles/2026-10-14/us-treasuries-slump-as-hot-inflation-lifts-fed-rate-hike-bets"],
    ["Bloomberg · Dollar advances to May 2025 high","https://www.bloomberg.com/news/articles/2026-10-14/dollar-advances-to-highest-since-may-2025-on-fed-hike-views"],
    ["Bloomberg · Qatar reinvents LNG trade","https://www.bloomberg.com/news/articles/2026-10-14/qatar-reinvents-lng-trade-to-restore-global-clout-even-as-iran-war-drags"],
    ["CryptoBriefing · Traders fully price in Fed hike","https://cryptobriefing.com/fed-rate-hike-october-ppi-data/"],
    ["CryptoBriefing · Fed expected to hike in October","https://cryptobriefing.com/fed-expected-hike-interest-rates-october/"],
    ["Trading Economics · US 10Y yield","https://tradingeconomics.com/united-states/government-bond-yield"],
    ["Trading Economics · US 30Y yield","https://tradingeconomics.com/united-states/30-year-bond-yield"],
    ["Trading Economics · US dollar index","https://tradingeconomics.com/united-states/currency"],
    ["Trading Economics · Bitcoin","https://tradingeconomics.com/commodity/bitcoin"],
    ["Trading Economics · Ethereum","https://tradingeconomics.com/commodity/ethereum"],
    ["Trading Economics · US inflation CPI","https://tradingeconomics.com/united-states/inflation-cpi"],
    ["CNN · Wholesale inflation surged in September","https://www.cnn.com/2026/10/15/economy/us-retail-sales-wholesale-inflation-ppi-september"],
    ["Bloomberg · Gold steady as Fed tempers hike bets","https://www.bloomberg.com/news/articles/2026-10-14/gold-steady-as-fed-official-s-remarks-temper-rate-hike-bets"],
    ["Fortune · Oil drops as hot CPI fans demand fears","https://fortune.com/article/price-of-oil-10-14-2026/"],
    ["KuCoin · BTC drops below $80k on PPI","https://www.kucoin.com/blog/bd-us-ppi-data-beats-expectations-bitcoin-drops-below-80k-solana-falls-4-percent-on-rate-cut-repricing"]
  ]
};
/* morning build 2026-10-16 08:00 PKT (Asia/Karachi) · press time 08:00 PKT */
/* ===== END EDITION DATA ===== */
