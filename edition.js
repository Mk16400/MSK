/* ===== EDITION DATA — each edition replaces this block ===== */
const EDITION = {
  name:"Midday Edition",
  date:"12 October 2026",
  pressTime:"12:00 PKT",
  next:"Evening edition ~20:00 PKT",
  todayKey:"Mon",
  kicker:"Asia reversal · London open",
  headline:"Oil <em>reverses hard</em> as Asia prices in ceasefire and Russian diesel",
  dek:"Brent falls 2% from Globex highs to $103.30 as traders unwind the weekend risk premium. TTF climbs despite ceasefire — winter premium dominates. Bond market dark for Columbus Day; dollar firms to 102.42, capping gold below $4,200.",
  verdict:[
    ["Oil","Ceasefire + Russian diesel supply take the heat out of the Globex gap higher","down","Fading the gap"],
    ["Gas","TTF rises 2% even as ceasefire headlines roll — winter stockpiling trumps diplomacy","up","Winter premium"],
    ["Gold","Dollar firmness at 102.42 caps metals; gold trades heavy below $4,200","flat","Rate-capped"],
    ["Silver","Holds above $60 but momentum has stalled; industrial demand unclear","flat","Range-bound"],
    ["Dollar","DXY +0.2% with bond market closed — real repricing waits for CPI Wednesday","up","CPI watch"],
    ["Crypto","BTC holds $83k; ETH outperforms at +2% — low conviction, thin volume","flat","Waiting"]
  ],
  assets:[
    {id:"brent",nm:"Brent crude",px:103.30,dp:2,u:"USD/bbl · ICE Dec",pre:"$",d:-1.36,m:-1.31,y:+67.12,note:"Reversed from $105.48 Globex open as ceasefire + Russian diesel priced in",tag:"oil"},
    {id:"wti",nm:"WTI crude",px:90.20,dp:2,u:"USD/bbl · NYMEX Nov",pre:"$",d:-1.80,m:null,y:null,note:"Fell harder than Brent — US grades more sensitive to supply easing",tag:"oil"},
    {id:"hh",nm:"Henry Hub",px:3.12,dp:2,u:"USD/MMBtu · NYMEX Nov",pre:"$",d:-3.08,m:+7.76,y:+0.09,note:"Softer in sympathy with oil; domestic supply ample",tag:"gas"},
    {id:"ttf",nm:"TTF gas",px:83.20,dp:2,u:"EUR/MWh · ICE Nov",pre:"€",d:+2.16,m:+0.76,y:+164.32,note:"Defies ceasefire — winter premium and Hormuz LNG disruption dominate",tag:"gas"},
    {id:"gold",nm:"Gold",px:4177,dp:0,u:"USD/oz · spot",pre:"$",d:-0.39,m:-2.83,y:+1.62,note:"Pulled back as dollar firmed; rate anxiety caps at these levels",tag:"metals"},
    {id:"silver",nm:"Silver",px:60.75,dp:2,u:"USD/oz · spot",pre:"$",d:-0.08,m:-3.92,y:+16.01,note:"Holding above $60 but momentum fading; watching industrial demand",tag:"metals"},
    {id:"btc",nm:"Bitcoin",px:83420,dp:0,u:"USD · spot",pre:"$",d:-0.48,m:null,y:null,note:"Flat below $84k; crypto waits for CPI to set direction",tag:"crypto"},
    {id:"eth",nm:"Ethereum",px:2550,dp:0,u:"USD · spot",pre:"$",d:+1.96,m:null,y:null,note:"Outperforms BTC on lighter liquidations; ETH/BTC ratio recovering",tag:"crypto"}
  ],
  extraTape:[
    ["US 10Y","5.24%","bond mkt closed"],
    ["US 30Y","5.60%","bond mkt closed"],
    ["DXY","102.42","+0.21%"],
    ["EUR/USD","1.1176","−0.18%"],
    ["USD/JPY","158.62","+0.32%"]
  ],
  chain:[
    ["Weekend attacks","Saudi airport missile and two tanker hits stoke supply fears — oil gaps higher to $105.48 on Globex Sunday open","Globex +3.1%"],
    ["Ceasefire headlines","Trump announces Russia-Ukraine energy ceasefire; Kyiv partly confirms — traders reassess the risk premium","Risk recalc"],
    ["Russian diesel arrives","300k tonnes of Russian diesel reaches northwest Europe — physical supply easing","Supply +300kt"],
    ["Oil reverses","Brent falls ~2% from $105.48 to $103.30 as both sources of supply anxiety fade at once","Brent −2%"],
    ["Dollar firms","DXY climbs to 102.42 with bond market dark for Columbus Day — thin liquidity amplifies","DXY 102.42"],
    ["Gold capped","Stronger dollar and falling oil cap gold below $4,200; silver flat above $60","Au < $4,200"]
  ],
  stories:[
    {tag:"oil",tags:["oil","brent","wti","ceasefire"],h:"Brent Reverses 2% From Globex Highs as Ceasefire Priced In",impact:5,
     happened:"<p>Oil gapped sharply higher on Globex Sunday evening — Brent touched $105.48, up 3.1% — after weekend missile strikes hit a Saudi airport and two tankers were attacked near Hormuz. But by mid-morning in Asia the rally was fading, and by the London open Brent had given back all of it and more, settling around $103.30, down 1.4% on the day.</p><p>The catalyst: Trump announced a Russia-Ukraine ‘energy ceasefire’ late Saturday, which Kyiv partly confirmed. Simultaneously, a 300,000-tonne Russian diesel cargo arrived in northwest Europe, easing the physical supply tightness that had supported prices.</p>",
     why:"<p>This is a textbook buy-the-rumor, sell-the-news reversal. Weekend attacks lifted oil overnight, but two supply-positive developments — the energy ceasefire and Russian diesel arrival — gave traders a reason to take profits. The speed of the reversal (2% in a few hours) reflects how much risk premium was baked into the Globex open.</p><p>BMI Research says Brent stays above $100 for months regardless — the Hormuz disruption remains the structural floor under prices.</p>",
     days:"<p>The ceasefire is the swing factor. Confirmed and verified → Brent could test $101–$100 support. Denied or violated → snap back above $105. Watch Wednesday’s EIA for Gulf shut-in data and distillate stocks.</p>",
     months:"<p>OPEC+ meets 1 November to set December production targets. If the ceasefire holds and Gulf output restarts fully, the risk premium unwinds further — but OPEC+ can offset by tightening quotas. The $100 floor looks durable into year-end.</p>",
     src:[0,1,12,13,14]},
    {tag:"gas",tags:["gas","ttf","hh","europe","winter"],h:"TTF Climbs Despite Ceasefire — Winter Premium Wins",impact:4,
     happened:"<p>European gas (TTF) rose 2.2% to €83.20/MWh even as energy ceasefire headlines rolled across screens. Henry Hub fell 3.1% to $3.12 in sympathy with weaker oil. The transatlantic divergence highlights two different supply stories.</p>",
     why:"<p>European gas is trading on winter stockpiling anxiety, not the oil cycle. Hormuz disruptions have diverted LNG cargoes away from Europe all autumn, and storage is below normal for this time of year. A Russia-Ukraine energy ceasefire — even if confirmed — addresses pipeline risk, not the LNG shortfall from Hormuz attacks.</p><p>Henry Hub, by contrast, faces ample domestic supply and is pulled lower by the oil reversal.</p>",
     days:"<p>Thursday’s EIA natural gas storage report is the next tell. Another below-normal build supports HH firmness; a surplus print would ease the winter premium. TTF will trade on Hormuz tanker flow data and any further ceasefire details.</p>",
     months:"<p>Bloomberg Intelligence sees European gas up 20–25% into winter. If Hormuz disruptions persist, TTF could challenge €90+ by November. A full ceasefire plus resumed Russian pipeline flows would cap it — but neither seems imminent.</p>",
     src:[4,5,13]},
    {tag:"metals",tags:["metals","gold","silver","dollar"],h:"Gold Eases Below $4,200 as Dollar Firms on Thin Liquidity",impact:4,
     happened:"<p>Gold pulled back 0.4% to $4,177/oz as the dollar firmed to 102.42 on the DXY. Silver was essentially flat at $60.75, holding the $60 floor. The precious metals complex is caught between haven demand (geopolitical risk) and rate pressure (5.24% ten-year yield, strong dollar).</p>",
     why:"<p>With the bond market closed for Columbus Day, there is no yield repricing to drive gold. The dollar’s 0.2% gain reflects position-squaring ahead of Wednesday’s CPI — the week’s decisive data point. Gold is trapped: the ceasefire removes some haven bid, but high rates keep the dollar strong, capping any rally.</p>",
     days:"<p>Wednesday’s CPI is the pivot for metals. A soft print (core below 2.5%) sends yields down and gold back toward $4,212–$4,240 resistance. A hot print pushes the ten-year toward 5.35% and gold back toward $4,150 support.</p>",
     months:"<p>Gold has been range-bound between $4,100 and $4,300 since late September, squeezed between geopolitical haven demand and 24-year-high yields. The FOMC meeting on 27–28 October is the next catalyst — a hold at 3.75–4.00% would be bullish; any hawkish surprise would test the $4,100 floor.</p>",
     src:[2,3,7,16]},
    {tag:"rates",tags:["rates","dollar","yields","fed","cpi"],h:"Bond Market Dark for Columbus Day; Dollar Firms Ahead of CPI",impact:4,
     happened:"<p>The US bond market is closed for Columbus Day — no Treasury trading today. The ten-year yield closed Friday at 5.24% and the 30-year at 5.60%, both near 24-year highs. The dollar index (DXY) edged up 0.2% to 102.42 in thin holiday trading. EUR/USD slipped to 1.1176; USD/JPY rose to 158.62.</p>",
     why:"<p>With bond traders sidelined, weekend news — the energy ceasefire, Hormuz attacks, oil’s reversal — cannot be priced into the yield curve until Tuesday. The dollar’s small gain reflects equity-market positioning ahead of Wednesday’s CPI, not a fundamental repricing. Japan and Canada are also closed (Health and Sports Day, Thanksgiving), thinning liquidity further.</p>",
     days:"<p>Tuesday is the catch-up session: all weekend risk hits the bond market at once. Watch the ten-year for direction. Wednesday’s CPI (headline ~3.7%, core ~2.5% expected) is the week’s pivot — it determines whether the Fed hikes again or holds at 3.75–4.00%. Thursday brings PPI and retail sales.</p>",
     months:"<p>Fed Chair Warsh’s comments this week will shape expectations for the 27–28 October FOMC meeting. Markets currently favor a hold, but a hot CPI could revive hike odds. The ten-year has been above 5% since September — the question is whether it breaks higher or mean-reverts.</p>",
     src:[6,7,8,9,11,19]},
    {tag:"crypto",tags:["crypto","btc","eth","deribit"],h:"Bitcoin Holds $83k Range; ETH Outperforms at +2%",impact:3,
     happened:"<p>Bitcoin is essentially flat at $83,420, holding the $83k–$84k range it has traded since late last week. Ethereum outperforms at $2,550, up 2%, with the ETH/BTC ratio recovering. Trading volumes are thin ahead of Wednesday’s CPI.</p>",
     why:"<p>Crypto is in a wait-and-see mode. The energy ceasefire is marginally positive (less inflation pressure), but the ten-year at 5.24% and DXY at 102.42 are headwinds. BTC has failed to reclaim $85k resistance, suggesting the downtrend from September’s highs remains intact. ETH’s outperformance reflects lighter liquidations and rotation from BTC.</p>",
     days:"<p>CPI on Wednesday is the binary event for crypto this week. A soft print would ease rate fears and give BTC a shot at $85k–$86k resistance. Friday’s $1.25B Deribit options expiry adds a volatility catalyst into the weekend.</p>",
     months:"<p>The macro backdrop remains challenging: 5%+ yields and a strong dollar are historically negative for crypto. The FOMC meeting on 27–28 October is the next potential catalyst. A hold with dovish language would be the most crypto-friendly outcome.</p>",
     src:[10,22]},
    {tag:"oil",tags:["oil","europe","equities","ceasefire"],h:"European Stocks Rally as Oil Pullback Eases Inflation Fears",impact:4,
     happened:"<p>European equities and bonds rallied as oil’s reversal from Globex highs eased inflation concerns. The FTSE 100 and European benchmark indices opened higher, with energy-sensitive sectors leading. Copper also gained on easing rate-hike expectations and news of a Chilean mine avalanche disrupting supply.</p>",
     why:"<p>Lower oil means lower input costs for European industry, which has been squeezed by energy prices all year. The ceasefire headlines add a geopolitical risk discount. European bonds rallied because softer oil reduces the case for further ECB tightening — a double benefit for the region.</p>",
     days:"<p>European markets will take their cue from US CPI on Wednesday. A soft number extends the rally; a hot print reverses it as rate-hike fears return. Watch for OPEC’s monthly report this week for the supply outlook.</p>",
     months:"<p>If the energy ceasefire holds and oil drifts toward $100, European equities have significant room to re-rate. The ECB is closer to pausing than the Fed, and lower energy costs are the fastest route to easier financial conditions in Europe.</p>",
     src:[15,17,18]}
  ],
  calendar:[
    {k:"Mon",d:"12 Oct",ev:[
      {t:"All day",n:"Columbus Day (US)",c:"Bond market closed; stocks + oil open",i:"h",x:"Thin Treasury liquidity. Bond traders cannot reprice weekend news until Tuesday. Watch equities and oil for direction."},
      {t:"All day",n:"Japan Health and Sports Day",c:"Tokyo exchange closed",i:"m",x:"Japan and Canada (Thanksgiving) both closed; thins Asian and commodity liquidity further."}]},
    {k:"Tue",d:"13 Oct",ev:[
      {t:"All day",n:"Bond market reopens",c:"Weekend news priced in one session",i:"h",x:"All the weekend risk — tanker attacks, ceasefire, oil’s gap and reversal — hits the bond market at once. Watch the ten-year yield."},
      {t:"This wk",n:"OPEC monthly report",c:"Demand/supply outlook",i:"m",x:"OPEC’s read on global balances amid overlapping Hormuz disruptions and the Gulf hurricane."}]},
    {k:"Wed",d:"14 Oct",ev:[
      {t:"17:30",n:"US CPI (September)",c:"Headline ~3.7%, core ~2.5% expected",i:"h",x:"The week’s pivot. A hot print sends the ten-year back toward 5.35% and pressures metals; a soft one lets them extend."},
      {t:"20:00",n:"EIA weekly oil report",c:"Crude, gasoline, distillates",i:"h",x:"May be shifted by the holiday. Gulf shut-ins and diesel stocks the key tells."}]},
    {k:"Thu",d:"15 Oct",ev:[
      {t:"17:30",n:"US PPI + retail sales",c:"Producer prices, consumer spending",i:"h",x:"PPI completes the inflation picture; retail sales show if the consumer is holding up under high rates."},
      {t:"19:30",n:"EIA natural gas storage",c:"Weekly injection",i:"m",x:"Another below-normal build supports HH firmness; surplus would ease the winter premium."}]},
    {k:"Fri",d:"16 Oct",ev:[
      {t:"Evening",n:"Deribit options expiry",c:"$1.25B BTC · $247M ETH",i:"m",x:"Large notional expiry adds a volatility catalyst for crypto into the weekend."},
      {t:"Ongoing",n:"IMF-World Bank meetings",c:"Bangkok, through 18 Oct",i:"m",x:"Global financial officials discuss growth, rates and the commodity shock; watch for any emerging-market policy signals."}]}
  ],
  later:[["27–28 Oct","FOMC meeting · hold at 3.75–4.00% favored, hike by year-end seen"],["29–30 Oct","Bank of Japan meeting"],["1 Nov","OPEC+ meeting · December production targets"],["3 Nov","US midterm elections · Trump’s Iran strike pause expires"],["Winter","European gas seen +20–25% per Bloomberg Intelligence"]],
  scenarios:[
    {id:"deal",nm:"Ceasefire + soft CPI",sub:"Energy ceasefire confirmed, Gulf output restarts quickly, CPI comes in soft, Fed holds in October",
     m:{Oil:"dn2",Gas:"dn",Gold:"up2",Silver:"up",Dollar:"dn",Yields:"dn",BTC:"up",ETH:"up"},
     why:"If the energy ceasefire is verified and Gulf output restarts fast, both sources of oil supply anxiety fade at once. A soft CPI on Wednesday seals the case for a Fed hold, pulls yields down from 24-year highs and weakens the dollar — the best setup for gold and crypto. Oil drops through $100 as the risk premium unwinds."},
    {id:"stall",nm:"Stalemate",sub:"Base case: ceasefire unconfirmed, Gulf restarts gradually, CPI near expectations, tit-for-tat Hormuz attacks continue",
     m:{Oil:"fl",Gas:"up",Gold:"fl",Silver:"dn",Dollar:"fl",Yields:"fl",BTC:"fl",ETH:"fl"},
     why:"The ceasefire fizzles or stalls in verification. Gulf production comes back gradually, offsetting fresh attacks. CPI near expectations keeps the ten-year near 5.2–5.3% and the dollar firm. Brent chops in a $101–$105 range. Gold trades heavy; silver gives some back. EU gas keeps firming on Hormuz constraints."},
    {id:"esc",nm:"Ceasefire fails + hot CPI",sub:"Ceasefire denied, fresh Hormuz attacks, CPI runs hot, hike odds spike",
     m:{Oil:"up2",Gas:"up2",Gold:"up",Silver:"dn",Dollar:"up",Yields:"up",BTC:"dn2",ETH:"dn2"},
     why:"If the ceasefire is denied and attacks intensify, oil snaps back above $105 and retests the highs. A hot CPI on top sends yields toward 5.35% and cements expectations for another Fed hike. The dollar surges; gold gains on haven demand but silver and crypto fall with risk assets."}
  ],
  levels:[
    ["Brent (Dec)","$101 · $103.3 · $105.5","Support; midday spot; Globex open resistance."],
    ["WTI","$88 · $90.2 · $92.8","Support; midday spot; morning high resistance."],
    ["Gold","$4,150 · $4,177 · $4,212","Support; midday spot; resistance before the record."],
    ["Silver","$59 · $60.75 · $62","Support; midday spot; $60 floor holding."],
    ["US 10Y","5.15% · 5.24% · 5.35%","Support; Fri close (mkt closed today); 24-year high."],
    ["US 30Y","5.50% · 5.60% · 5.75%","Support; Fri close (mkt closed today); resistance."],
    ["DXY","101.5 · 102.42 · 103","Support; midday spot; resistance."],
    ["EUR/USD","1.112 · 1.1176 · 1.125","Support; midday spot; resistance."],
    ["USD/JPY","157 · 158.62 · 160","Support; midday spot; Tokyo intervention zone."],
    ["Bitcoin","$80k · $83.4k · $86k","Support; midday spot; next resistance."]
  ],
  wire:[
    {d:"12 Oct",tag:"Macro",h:"European Stocks and Bonds Rise as Oil Eases After Energy Ceasefire",url:"https://www.bloomberg.com/news/live-blog/2026-10-12/ftse-100-live-european-stocks-and-bonds-rise-as-oil-eases",why:"European risk assets rally as oil’s reversal takes heat off inflation — the first real beneficiary of the ceasefire headlines."},
    {d:"12 Oct",tag:"Gold",h:"Gold Edges Up as Traders Weigh Russia-Ukraine ‘Energy Ceasefire’",url:"https://www.bloomberg.com/news/articles/2026-10-12/gold-edges-up-as-traders-weigh-russia-ukraine-energy-ceasefire",why:"Gold caught between competing forces: ceasefire eases inflation fears (bearish), but geopolitical uncertainty keeps the haven bid alive."},
    {d:"12 Oct",tag:"Metals",h:"Copper Gains on Easing Rate-Hike Bets and Chile Mine Avalanche",url:"https://www.bloomberg.com/news/articles/2026-10-12/copper-gains-on-easing-rate-hike-bets-and-chile-mine-avalanche",why:"Copper benefits from a supply disruption in Chile and easing expectations for further rate hikes — a double tailwind."},
    {d:"12 Oct",tag:"Oil",h:"Latest Oil Market News and Analysis for Oct. 12",url:"https://www.bloomberg.com/news/articles/2026-10-11/latest-oil-market-news-and-analysis-for-oct-12",why:"Bloomberg’s rolling oil blog captures the full arc: weekend attacks, the Globex gap, and the Asia-session reversal as ceasefire is priced in."},
    {d:"11 Oct",tag:"Rates",h:"US Bond Traders Await CPI, Warsh For Insight on Fed’s Rate Path",url:"https://www.bloomberg.com/news/articles/2026-10-11/us-bond-traders-await-cpi-warsh-for-insight-on-fed-s-rate-path",why:"Wednesday’s CPI and Fed Chair Warsh’s remarks will settle whether the Fed hikes again or holds at 3.75–4.00%."},
    {d:"8 Oct",tag:"Oil",h:"Saudis in Talks to Formalize Hormuz Shuttles in Fight for Market",url:"https://www.bloomberg.com/news/articles/2026-10-08/saudis-in-talks-to-formalize-hormuz-shuttles-in-fight-for-market",why:"Saudi Arabia building workarounds for Hormuz — a sign the conflict is being priced as a long-term structural feature of the oil market."}
  ],
  sources:[
    ["Trading Economics · Brent crude","https://tradingeconomics.com/commodity/brent-crude-oil"],
    ["Trading Economics · WTI crude","https://tradingeconomics.com/commodity/crude-oil"],
    ["Trading Economics · Gold","https://tradingeconomics.com/commodity/gold"],
    ["Trading Economics · Silver","https://tradingeconomics.com/commodity/silver"],
    ["Trading Economics · EU natural gas","https://tradingeconomics.com/commodity/eu-natural-gas"],
    ["Trading Economics · US natural gas","https://tradingeconomics.com/commodity/natural-gas"],
    ["Trading Economics · US 10Y yield","https://tradingeconomics.com/united-states/government-bond-yield"],
    ["Trading Economics · US dollar index","https://tradingeconomics.com/united-states/currency"],
    ["Trading Economics · EUR/USD","https://tradingeconomics.com/euro-area/currency"],
    ["Trading Economics · USD/JPY","https://tradingeconomics.com/japan/currency"],
    ["Trading Economics · Crypto","https://tradingeconomics.com/crypto"],
    ["Trading Economics · US 30Y yield","https://tradingeconomics.com/united-states/30-year-bond-yield"],
    ["HDFC Sky · Brent crude oil price today","https://www.hdfcsky.com/blog/crude-oil-price-today"],
    ["Axios · Trump says Russia and Ukraine agreed to energy ceasefire","https://www.axios.com/2026/10/11/trump-russia-ukraine-energy-ceasefire-zelensky"],
    ["Convextrade · Oil prices today","https://convextrade.com/crude-oil-price-today/"],
    ["Bloomberg · European stocks and bonds rise as oil eases","https://www.bloomberg.com/news/live-blog/2026-10-12/ftse-100-live-european-stocks-and-bonds-rise-as-oil-eases"],
    ["Bloomberg · Gold edges up as traders weigh energy ceasefire","https://www.bloomberg.com/news/articles/2026-10-12/gold-edges-up-as-traders-weigh-russia-ukraine-energy-ceasefire"],
    ["Bloomberg · Copper gains on easing rate-hike bets","https://www.bloomberg.com/news/articles/2026-10-12/copper-gains-on-easing-rate-hike-bets-and-chile-mine-avalanche"],
    ["Bloomberg · Latest oil market news for Oct. 12","https://www.bloomberg.com/news/articles/2026-10-11/latest-oil-market-news-and-analysis-for-oct-12"],
    ["Bloomberg · US bond traders await CPI, Warsh","https://www.bloomberg.com/news/articles/2026-10-11/us-bond-traders-await-cpi-warsh-for-insight-on-fed-s-rate-path"],
    ["Bloomberg · Saudis in talks to formalize Hormuz shuttles","https://www.bloomberg.com/news/articles/2026-10-08/saudis-in-talks-to-formalize-hormuz-shuttles-in-fight-for-market"],
    ["Kiplinger · Economic calendar","https://www.kiplinger.com/economic-forecasts/calendar"],
    ["CryptoTicker · Bitcoin and crypto prices today","https://cryptoticker.io/en/crypto-price-today-bitcoin-altcoins-upcoming-events"]
  ]
};
/* midday build 2026-10-12 12:00 PKT (Asia/Karachi) · press time 12:00 PKT */
/* ===== END EDITION DATA ===== */
