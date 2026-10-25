/* ===== EDITION DATA — each edition replaces this block ===== */
const EDITION = {
  name:"Morning Edition",
  date:"Sunday, 25 October 2026",
  pressTime:"08:00 PKT",
  next:"Next: Monday Morning Edition, ~08:00 PKT",
  todayKey:"Sun",

  kicker:"Houthis target Yanbu + East-West pipeline in 7 coordinated strikes · Saudi intercepts missiles over Yanbu, Mecca · Iran: US ships 'not allowed' in Gulf · US ambassador hints Iran strike 'this weekend' · Riyadh airport closed Saturday · BTC drifts to $80,800 · FOMC week: October hold ~92%, December hike ~84% · SPR release authorized at 42-year low · Brent $116.72 faces explosive Monday gap",

  headline:"Houthis Target <em>Yanbu</em> and East-West Pipeline — Saudi Arabia's Last <em>Hormuz Bypass</em> Under Fire Ahead of <em>FOMC</em>",

  dek:"Saturday saw the most provocative Houthi escalation since the war began — seven coordinated attacks targeting Saudi airports, refineries, and critically, Aramco's facilities at Yanbu and the East-West pipeline, Saudi Arabia's sole bypass of the Strait of Hormuz. Saudi air defenses intercepted two ballistic missiles aimed at Yanbu and Taif, and emergency alerts were issued for Mecca, Jeddah, Yanbu and Taif. Houthi spokesman Yahya Saree warned airlines that Riyadh's King Khalid Airport is a 'military target.' Iran's armed forces chief declared US ships are 'not allowed' in the Persian Gulf, while the US ambassador to Turkey said American strikes on Iran could come as early as this weekend. Oil markets cannot react until Monday, creating significant gap risk with Brent at $116.72. The US authorized an emergency SPR release of 400,000 barrels — but the reserve is at its lowest since 1982. Bitcoin drifted lower to ~$80,800 as weekend risk-off persisted. The FOMC meets Tuesday-Wednesday with October hold priced at ~92% but December hike odds at ~84%. Iran threatened to attack oil facilities, undersea cables, data centers and AI infrastructure across the Gulf if the US and Israel launch a new offensive.",

  verdict:[
    ["Oil","Brent $116.72, six-month high. Saturday: Houthis targeted Yanbu + East-West pipeline + 4 Saudi airports + Rabigh refinery. Saudi intercepted missiles at Yanbu and Taif. Monday gap risk extreme.","up","$116.72"],
    ["Gas","TTF €93.86 (+4.2%), three-year high. EU storage deficit ahead of winter. Yanbu targeting threatens Red Sea LNG flows. HH flat at $2.78. Transatlantic divergence extreme.","up","€93.86"],
    ["Gold","$3,994, seventh consecutive decline, below $4,000 since July. Rate expectations still dominating but Yanbu escalation could trigger haven reversal. RSI oversold at 28.","down","$3,994"],
    ["Silver","$53.88, down ~16% on the month. Industrial demand hit by growth fears. RSI near oversold at 30. Needs gold catalyst to recover.","down","$53.88"],
    ["Dollar","DXY 101.75. Oil-driven inflation supporting dollar. EUR/USD 1.1202. USD/JPY 156.87. FOMC this week anchors range.","flat","DXY 101.75"],
    ["BTC / ETH","BTC ~$80,800, drifting lower over weekend. ETH ~$2,345. Thursday's $636M ETF outflow still weighing. $80K support under siege — seventh test imminent.","down","$80,800"]
  ],

  assets:[
    {id:"brent",nm:"Brent crude",px:116.72,dp:2,u:"USD /bbl · ICE Dec",pre:"$",d:+3.14,m:+9.49,y:+79.02,note:"Friday settle $116.72 (+3.14%), six-month high. Saturday: Houthis launched 7 attacks targeting Yanbu, East-West pipeline, Rabigh refinery, 4 airports. Saudi intercepted missiles over Yanbu. Monday gap risk extreme — markets can't react until open.",tag:"oil"},
    {id:"wti",nm:"WTI crude",px:103.27,dp:2,u:"USD /bbl · NYMEX Dec",pre:"$",d:+3.82,m:+9.15,y:+67.92,note:"Friday close above $103, first since mid-2024. Brent-WTI spread ~$13.50 on Gulf risk premium. SPR release of 400K bbl authorized at 42-year low.",tag:"oil"},
    {id:"hh",nm:"Henry Hub",px:2.78,dp:2,u:"USD /MMBtu · NYMEX Nov",pre:"$",d:null,m:null,y:null,note:"Flat despite $117 oil and Gulf escalation. US production at 104 Bcf/d caps upside. Extreme divergence with European TTF at €93.86 continues.",tag:"gas"},
    {id:"ttf",nm:"TTF gas",px:93.86,dp:2,u:"EUR /MWh · ICE Nov",pre:"€",d:+4.23,m:+25.24,y:+193.15,note:"Three-year high. EU storage well below five-year average. Qatar-Cheniere 28-year LNG deal confirms structural Hormuz shift. Yanbu targeting adds Red Sea LNG route risk. €100 is next target.",tag:"gas"},
    {id:"gold",nm:"Gold",px:3994,dp:0,u:"USD /oz · spot",pre:"$",d:-0.77,m:-6.57,y:-2.87,note:"Seventh consecutive decline, below $4,000 since July. December hike ~84% crushing zero-yield assets. RSI oversold at 28. Yanbu escalation could trigger haven reversal if pipeline is damaged.",tag:"metals"},
    {id:"silver",nm:"Silver",px:53.88,dp:2,u:"USD /oz · spot",pre:"$",d:-1.30,m:-15.58,y:+10.88,note:"Down ~16% on the month. Dual headwind: industrial demand hit by growth fears, precious metal bid crushed by rate expectations. RSI near oversold at 30. Needs gold catalyst.",tag:"metals"},
    {id:"btc",nm:"Bitcoin",px:80822,dp:0,u:"USD · spot",pre:"$",d:-0.83,m:null,y:null,note:"Drifted to $80,822 over weekend. Thursday's $636M ETF outflow still weighing. $80K support tested for seventh time. Crypto pricing in geopolitical risk ahead of equity markets.",tag:"crypto"},
    {id:"eth",nm:"Ethereum",px:2345,dp:0,u:"USD · spot",pre:"$",d:-1.88,m:null,y:null,note:"Fell to $2,345 over weekend. ETH/BTC ratio at cycle lows. October ETF outflows exceed $1.08B. Iran threatened attacks on data centers and AI infrastructure — potential tech sector risk.",tag:"crypto"}
  ],

  extraTape:[
    ["US 10Y","5.00%","+4 bp"],
    ["US 30Y","5.32%","+3 bp"],
    ["DXY","101.75","+0.14%"],
    ["EUR / USD","1.1202","−0.12%"],
    ["USD / JPY","156.87","+0.06%"],
    ["Fed funds","3.75 – 4.00%","hold ≈ 92%"],
    ["Dec hike","~84%","from ~78%"],
    ["S&P 500","7,623.68","−0.52%"],
    ["Dow","52,215","−1.23%"],
    ["Nasdaq","25,955","−0.21%"],
    ["VIX","19.45","+2.21%"]
  ],

  chain:[
    ["Houthis target Yanbu + East-West pipeline","Seven coordinated Saturday attacks on Aramco's Yanbu facilities, the East-West pipeline, Rabigh refinery, and four Saudi airports. Yanbu is Saudi Arabia's sole Hormuz bypass export terminal.","7 attacks"],
    ["Saudi intercepts missiles over Yanbu, Taif","Coalition destroyed two ballistic missiles aimed at Yanbu and Taif. Emergency alerts issued for Mecca, Jeddah, Yanbu, Taif. Riyadh airport closed. Flights resume Sunday.","2 intercepts"],
    ["Iran bars US ships from Gulf","Armed forces chief Abdollahi: US military 'not allowed in the Gulf under any circumstances.' US ambassador to Turkey hints strikes on Iran could come this weekend.","No entry"],
    ["US authorizes SPR release at 42-year low","Emergency release of 400,000 barrels authorized. Strategic Petroleum Reserve at lowest level since 1982. Germany also tendering reserve sales. Supply Band-Aid, not a cure.","400K bbl"],
    ["Brent at $116.72 faces Monday gap risk","Oil markets closed over the weekend — cannot price Saturday's Yanbu attack. Traders hold unhedged weekend positions. $120+ Monday gap is the tail risk.","Gap risk"],
    ["BTC drifts to $80,800 as risk-off persists","Crypto markets — open 24/7 — priced in escalation ahead of equities. BTC down ~0.8% over weekend. $80K support tested for seventh time in three weeks.","$80,822"]
  ],

  stories:[
    {
      tag:"oil", tags:["oil","brent","yanbu","houthi","saudi","aramco","pipeline","hormuz"],
      h:"Houthis Target Yanbu and East-West Pipeline in Biggest Saudi Attack Wave Since War Began",
      impact:5,
      happened:"Yemen's Houthis launched seven coordinated missile and drone attacks across Saudi Arabia on Saturday — the broadest single-day assault since the Iran war began in February. Houthi military spokesman Yahya Saree listed the targets on Al Masirah television: Aramco facilities at Yanbu, the East-West oil pipeline, the Rabigh oil refinery, King Khalid Airport in Riyadh, King Fahd Airport in Dammam, Najran airport, and Khamis Mushait airbase. The Saudi-led coalition confirmed intercepting two ballistic missiles aimed at Yanbu and Taif. Emergency alerts were issued for Mecca, Jeddah, Yanbu and Taif before Saudi authorities said the danger had passed. Riyadh's King Khalid Airport was closed Saturday, with limited flights resuming Sunday. Saree warned airlines that King Khalid Airport is a 'military target' and repeated warnings against operating there.",
      why:"This attack is qualitatively different from anything before. For the first time, the Houthis explicitly targeted Yanbu — the Red Sea export terminal at the end of the East-West pipeline, which is Saudi Arabia's only route to bypass the Strait of Hormuz. The East-West pipeline itself was also named as a target. At 7 million barrels per day, this pipeline carries roughly half of Saudi Arabia's total production capacity to a port outside the Gulf. If Yanbu or the pipeline is damaged, Saudi Arabia has no alternative route to market that avoids both Hormuz and Houthi-threatened waters. The Saudi intercept of missiles over Yanbu confirms the threat reached the terminal's vicinity. The breadth of the attack — four airports, refineries, pipelines simultaneously — suggests coordination designed to overwhelm air defenses.",
      days:"Monday's oil open carries enormous gap risk. Brent closed Friday at $116.72, but these attacks occurred after markets closed. If any damage to Yanbu or the East-West pipeline is confirmed over Sunday, Brent could gap above $120 on Monday's open. Even without confirmed damage, the demonstrated ability to target the pipeline bypass will force a structural repricing of Saudi supply risk. Saudi air defense capacity is now being tested across multiple fronts simultaneously — airports, holy cities, oil infrastructure — raising questions about whether intercept rates can be sustained.",
      months:"The Yanbu targeting represents a strategic inflection point. Until now, the market assumed Saudi Arabia had a reliable Hormuz bypass through the East-West pipeline and Yanbu. That assumption is shattered. OPEC+ meets November 1 with no spare capacity and the world's primary swing producer's export infrastructure under direct threat. US midterms November 3, with reported post-election strikes on Iran, would deepen the escalation. The Houthi pattern is progressive: each attack wave is broader and bolder. A successful hit on Yanbu would be the most consequential energy infrastructure attack since the 2019 Abqaiq strikes.",
      src:[0,1,2,3,4,5,6]
    },
    {
      tag:"oil", tags:["oil","iran","hormuz","diplomacy","strikes","military"],
      h:"Iran Bars US Ships from Gulf — US Ambassador Hints at Iran Strike 'This Weekend'",
      impact:5,
      happened:"Iran's armed forces chief of staff Ali Abdollahi declared Saturday that US military ships would not be allowed in the Persian Gulf 'under any circumstances and at any time' — the most absolute territorial claim since the war began. Hours earlier, US Ambassador to Turkey Tom Barrack said a US strike on Iran could come as early as this weekend, though Trump has maintained any major action would wait until after the November 3 midterms. Iran's ambassador to Pakistan said Tehran remains open to talks under the June Pakistan-brokered interim deal, but accused Trump of rejecting an offer to reopen the Strait of Hormuz in exchange for lifting the US naval blockade of Iranian ports. Iran also threatened to attack oil facilities, undersea cables, data centers, and AI infrastructure across the Gulf if the US and Israel launch a new offensive. The US State Department updated travel advisories for 14 Middle Eastern countries.",
      why:"The diplomatic space is collapsing from both sides. Iran's absolute declaration that US ships are 'not allowed' in the Gulf is not enforceable against two carrier groups, but it signals Tehran has abandoned any pretense of accommodating US military presence — a precondition for de-escalation. The US ambassador's hint about weekend strikes, even if walked back by Trump's midterm timeline, creates genuine uncertainty about the next 48 hours. Iran's threat to target data centers and AI infrastructure is a new dimension — it widens the conflict's economic blast radius beyond energy into the tech sector. The 14-country travel advisory update and the order for US diplomats to leave Saudi Arabia suggest Washington is preparing for a wider conflict.",
      days:"The next 48 hours are the highest-risk window since the war began. If the US ambassador's weekend strike hint proves accurate, oil gaps to $125+. Even if Trump holds to the post-midterm timeline, the rhetorical escalation from both sides makes an accidental clash more likely. Iran's Gulf 'no-entry' stance could lead to a confrontation with US naval patrols. Any incident involving a US warship and Iranian forces would be categorically different from the proxy war fought through Houthis and tanker strikes.",
      days:"If no US strike materializes this weekend, markets get a brief reprieve but the post-midterm window (November 4 onward) becomes the focal point. Iran's threat to data centers and AI infrastructure adds a new risk factor for tech stocks already under pressure from the AI capex sell-off. The diplomatic track through Pakistan appears exhausted — both sides now blame each other for rejecting the Hormuz-for-blockade swap.",
      months:"November 3 midterms are the trigger. Multiple reports indicate US-Israel planning for Iran strikes within days of the vote. If strikes materialize, this becomes a full-scale regional war rather than the current proxy conflict. Iran's threat to hit AI infrastructure and data centers would trigger simultaneous energy and tech crises. The diplomatic track is functionally dead unless a new intermediary emerges. Oil above $130 and global recession become realistic scenarios in a direct US-Iran confrontation.",
      src:[7,8,9,10]
    },
    {
      tag:"oil", tags:["oil","spr","supply","reserves","policy"],
      h:"US Authorizes Emergency SPR Release at Lowest Level Since 1982 — Supply Band-Aid, Not a Cure",
      impact:4,
      happened:"The US authorized an emergency release of up to 400,000 barrels from the Strategic Petroleum Reserve, which is at its lowest level since 1982 after heavy drawdowns in 2022. Germany also began tendering sales from its strategic reserves. The Baker Hughes oil and gas rig count held steady at 603 for a second consecutive week, signaling no domestic production response to $117 oil. Separately, the first Russian diesel cargo bound for the US under a recent export deal is heading to New York — a sign of how scrambled global trade flows have become.",
      why:"The SPR release is symbolically important but practically insignificant at this scale. 400,000 barrels is less than 5 minutes of global oil consumption. The real signal is desperation — the US is tapping a reserve at 42-year lows to manage prices, which tells the market that Washington has no better options. The flat rig count at 603 shows that US producers are not chasing $117 oil with new drilling — capital discipline, long lead times, and investor pressure against growth spending mean the supply response will be slow even at record prices. Russian diesel heading to New York illustrates the geopolitical paradox: the US is simultaneously trying to contain Russia and Iran while needing their energy exports.",
      days:"The SPR release announcement is bearish at the margin but too small to move prices meaningfully against a $116+ backdrop. Monday's open will be dominated by the Yanbu attack news rather than the SPR. Watch for a larger authorized release — if Washington escalates to millions of barrels per day, that would be market-moving. The flat rig count confirms the supply response will not come from US shale in any relevant timeframe.",
      months:"The SPR at 42-year lows limits future policy options. If oil reaches $130+ on a Yanbu hit or US-Iran strikes, the SPR is too depleted for a meaningful strategic release. This makes the OPEC+ meeting November 1 even more critical — the cartel is the only source of spare capacity, but even OPEC+ spare capacity is estimated at less than 2 mb/d, and political willingness to deploy it is uncertain. The US is running out of supply-side tools to manage the energy crisis.",
      src:[8,11,12,13]
    },
    {
      tag:"metals", tags:["metals","gold","silver","rates","fomc","inflation"],
      h:"Gold Below $4,000 Heading Into FOMC Week — Seventh Decline Meets Yanbu Escalation",
      impact:4,
      happened:"Gold entered the weekend at $3,994, its seventh consecutive decline and still below the $4,000 level broken on Friday for the first time since July. Silver held at $53.88, down roughly 16% on the month. The RSI on gold sits at 28 — deeply oversold — while silver's RSI is near 30. Bridgewater cut its gold position according to Bloomberg, suggesting institutional conviction is weakening. The FOMC meets Tuesday-Wednesday with December hike odds at approximately 84%, the highest since the rate cycle turned hawkish in June.",
      why:"Gold faces a rare collision of forces this week. The rate headwind remains dominant — December hike at 84% and yields at 5.00% crush the opportunity cost argument for zero-yield gold. But Saturday's Yanbu escalation introduces a potential circuit-breaker. If the East-West pipeline is damaged and Brent gaps above $120, the haven panic could finally overwhelm rate expectations — the 2019 Abqaiq attack sent gold up 1% overnight. The FOMC statement Wednesday will determine whether 'broadening price pressures' locks in December, pushing gold toward $3,950, or whether any dovish softening allows the oversold bounce gold's RSI is screaming for.",
      days:"The first test is Monday's oil open. If Brent gaps higher on the Yanbu news, gold could rally on haven demand even before the FOMC. If oil opens flat (no confirmed damage), gold stays under pressure into Wednesday. The FOMC statement is the week's defining catalyst: hawkish language cements December and pushes gold toward $3,950; any hint of pause or concern about overtightening triggers a violent short-covering rally given the extreme RSI. Central bank buying often accelerates below round numbers — watch for sovereign purchases.",
      months:"December FOMC is the make-or-break event. A hike to 4.00-4.25% with hawkish guidance pushes gold toward $3,900 and silver toward $50. The wild card is Iran: direct US-Israel strikes after midterms would generate a safe-haven panic that overwhelms rate headwinds. Bridgewater's gold cut suggests institutional positioning is lighter, which paradoxically sets up a sharper rally if sentiment reverses. Central bank buying (720 tonnes forecast for 2026) provides a structural floor.",
      src:[14,15,16,17]
    },
    {
      tag:"rates", tags:["rates","fomc","fed","yields","inflation","warsh"],
      h:"FOMC Week: October Hold Expected at 3.75-4.00% — December Hike at ~84% as Oil Rewrites the Playbook",
      impact:4,
      happened:"The FOMC meets Tuesday-Wednesday for its first meeting since Brent crossed $115 and Aramco evacuated Dhahran. Markets price an October hold at 3.75-4.00% with ~92% probability, following the September 16 hike from 3.50-3.75%. December hike odds sit at approximately 84%, the highest since the rate cycle turned hawkish. The September projections showed 16 of 18 policymakers expecting at least one more hike by year-end. The 10-year yield sits at 5.00%, DXY at 101.75, and UMich consumer sentiment at a near-record-low 48.0 with inflation expectations at 3.5%. Chair Kevin Warsh faces the first press conference since oil-driven stagflation became the dominant narrative.",
      why:"The Fed faces a textbook stagflation dilemma. Inflation is being driven by supply — Hormuz disruption, Saudi attacks, pipeline shutdowns — not by excess demand. Rate hikes cannot fix supply-driven inflation, but the Fed must respond because expectations are rising (UMich 3.5%) and risk de-anchoring. Warsh's press conference will be parsed for whether the Fed sees this as a transitory supply shock (dovish — implies patience) or a structural regime change requiring tighter policy (hawkish — cements December). The statement language matters most: 'broadening price pressures,' 'energy cost pass-through,' or 'persistent supply-side inflation' all point to December.",
      days:"The statement drops Wednesday at 23:00 PKT. Key phrases to watch: any reference to energy costs, supply disruption, or broadening inflation signals December. Any mention of two-sided risks, data dependency, or supply-vs-demand distinction creates room for a December pause. GDP advance Thursday and core PCE Friday bookend the week's macro data — strong growth with accelerating inflation cements the hike; weak growth opens a stagflation debate. If yields break above 5.10% on a hawkish statement, mortgage rates hit new highs.",
      months:"If December hike lands at 4.00-4.25%, the 10Y could reach 5.20-5.30%. The rate cycle's peak depends on oil: if Iran strikes push Brent to $130, the inflation impulse requires further tightening into 2027. But if the supply shock proves temporary — a ceasefire, Hormuz reopening — the Fed may have over-tightened into a recession. The three July dissenters (Hammack, Kashkari, Logan) favored a hike at that meeting — any further dissent signals faster tightening ahead.",
      src:[18,19,20]
    },
    {
      tag:"gas", tags:["gas","ttf","henryhub","lng","hormuz","winter","yanbu"],
      h:"TTF at €93.86 — Three-Year High — Yanbu Targeting Adds Red Sea LNG Route Risk",
      impact:4,
      happened:"European TTF gas closed at €93.86 per megawatt-hour on Friday, up 4.23% on the day and the highest level since late 2022 — a 193% increase over the past year. EU gas storage sits well below the five-year average heading into the heating season. The QatarEnergy-Cheniere 28-year LNG deal signed this week confirmed producers see the Hormuz disruption as a multi-decade structural shift. Henry Hub remained flat near $2.78, maintaining the extreme transatlantic divergence. Saturday's Houthi targeting of Yanbu adds a new dimension: Yanbu sits on the Red Sea, and LNG tankers using the East-West pipeline bypass also transit through Houthi-threatened waters near the Bab el-Mandeb strait.",
      why:"The Yanbu targeting creates a second-order risk for European gas. Qatar has been rerouting some LNG through longer routes to avoid Hormuz, but Yanbu and the Red Sea corridor near the Bab el-Mandeb strait are also under Houthi threat. If both Hormuz and the Red Sea route face disruption, LNG flows to Europe face the worst chokepoint scenario since the crisis began. The €93.86 level was resistance in early 2023 — if it becomes support, €100 is the next target. Asian LNG prices at 2022 highs mean Europe must compete with premium-paying Asian buyers for limited cargoes. Henry Hub's $2.78 reflects a fundamentally different market: abundant US shale gas supply and mild domestic weather forecasts.",
      days:"If TTF holds above €90 into Monday, the €100 psychological target comes into play. Any confirmed disruption to Red Sea shipping from the Yanbu attacks accelerates the move. Late October and November weather forecasts are the key driver — colder-than-normal readings would push TTF toward €100 even without new supply disruptions. Henry Hub remains weather-dependent with $2.50 floor.",
      months:"European gas faces its most challenging winter since 2022. TTF above €100 is consensus for a cold winter. The storage deficit, Hormuz disruption, Qatar force majeure through December, and now Yanbu/Red Sea risk create compounding vulnerabilities. If Hormuz stays disrupted and winter arrives cold, €110-120 is possible. The structural shift is confirmed by the 28-year Qatar-Cheniere deal — the market expects years of elevated prices.",
      src:[21,22,23,24]
    },
    {
      tag:"crypto", tags:["crypto","btc","eth","etf","outflows","weekend"],
      h:"Bitcoin Drifts to $80,800 Over Weekend — Seventh Test of $80K Support as Iran Threatens Data Centers",
      impact:3,
      happened:"Bitcoin drifted lower to approximately $80,822 over the weekend, down 0.8% from Friday's ~$81,500 close, as risk-off sentiment persisted in the only major market open 24/7. Ethereum fell to $2,345, down roughly 1.9% from Friday's $2,390. Thursday's $636 million Bitcoin ETF outflow — the largest since June — continued to weigh on sentiment. October's cumulative BTC ETF flows remain net negative at approximately $174.5 million in outflows. The $80,000 support level is being tested for the seventh time in three weeks, with each bounce weaker than the last. Iran's threat to attack data centers and AI infrastructure across the Gulf adds a new risk dimension for the crypto and tech complex.",
      why:"Crypto markets are functioning as the real-time geopolitical risk barometer this weekend because equity and commodity markets are closed. The steady drift lower, rather than a sharp sell-off, suggests institutional crypto desks are not panic-selling but are systematically reducing exposure ahead of Monday's uncertain open. Iran's threat to target data centers and AI infrastructure is a new wildcard — while Gulf data centers are not primary crypto mining or exchange infrastructure, the threat signals willingness to escalate the economic war beyond energy. The ETH/BTC ratio at cycle lows reflects Ethereum's particular vulnerability to tech-sector risk.",
      days:"Monday's ETF flow data will be the first test of whether the outflow trend continues. If BTC breaks below $80,000 — which the seventh test makes increasingly likely — the next support is $78,422 (lower Keltner boundary) and then $76,000. A Brent gap above $120 on Monday's open would trigger correlated selling in crypto. Conversely, if the Yanbu news proves less damaging than feared, crypto could rally first given its weekend availability.",
      months:"Bitcoin remains trapped between $76K and $86K until the rate cycle peaks. December FOMC is decisive — a hike is bearish near-term but could mark the cycle top if it triggers a recession signal. Iran escalation is the downside tail risk: direct US strikes trigger extreme risk-off below $76K. The Iran data center threat adds a new layer: any actual attack on Gulf tech infrastructure would have unpredictable cascading effects on crypto exchange operations and stablecoin reserves held in the region.",
      src:[25,26,27,28]
    }
  ],

  calendar:[
    {k:"Sun",d:"25 Oct",ev:[
      {t:"All day",n:"Weekend — markets closed",c:"Riyadh airport resumes limited flights · digest Saturday Houthi attacks",i:"h",x:"Oil, equity, and bond markets are closed. Crypto trades 24/7 and is pricing in Saturday's Houthi escalation. Riyadh airport resumes limited domestic and Saudi-carrier international flights. Any confirmed damage to Yanbu or East-West pipeline infrastructure over Sunday will dominate Monday's open. US ambassador's hint about 'this weekend' strikes keeps the risk of a US action alive through Sunday night."}
    ]},
    {k:"Mon",d:"26 Oct",ev:[
      {t:"09:00",n:"Asia open — first reaction to Yanbu attacks",c:"Oil, equities digest Saturday Houthi escalation",i:"h",x:"The first opportunity for oil and equity markets to price Saturday's seven coordinated Houthi attacks on Yanbu, the East-West pipeline, Rabigh refinery, and four Saudi airports. Brent gap risk is elevated — $120+ if any infrastructure damage is confirmed. Airline stocks face further pressure with Riyadh airport disrupted."},
      {t:"19:00",n:"New home sales",c:"September data · last housing print before FOMC",i:"m",x:"Final housing data before the FOMC. Record mortgage rates with 10Y at 5.00% crushing demand. A sharp drop provides evidence of real economic damage from high rates, easing the December hike case slightly."}
    ]},
    {k:"Tue",d:"27 Oct",ev:[
      {t:"All day",n:"FOMC meeting begins",c:"Two-day meeting · October hold priced at ~92%",i:"h",x:"October meeting widely expected to be a hold at 3.75-4.00%. December at ~84% is the live meeting. Statement language on oil supply disruption, Saudi attacks, $117 Brent, and 'broadening price pressures' will be parsed for December signals. First FOMC since Aramco evacuated Dhahran and Houthis targeted Yanbu."},
      {t:"19:00",n:"Consumer confidence",c:"Conference Board October · post-AI sell-off + $117 oil",i:"m",x:"Consumer confidence reading capturing the full impact of $117 oil and the AI equity sell-off. UMich already collapsed to 48.0 — if Conference Board confirms, the consumer downturn narrative strengthens."}
    ]},
    {k:"Wed",d:"28 Oct",ev:[
      {t:"23:00",n:"FOMC decision + Warsh presser",c:"Rate decision + press conference · first since $117 oil + Yanbu attacks",i:"h",x:"Expected hold at 3.75-4.00%. The statement is the signal: any reference to broadening price pressures, persistent supply-side inflation, or energy cost pass-through points to December. Chair Warsh faces $117 oil, 48.0 sentiment, 3.5% inflation expectations, 5.00% yields, and Saturday's Yanbu escalation. The market wants to hear whether the Fed sees stagflation or transitory supply shock."}
    ]},
    {k:"Thu",d:"29 Oct",ev:[
      {t:"17:30",n:"GDP advance Q3 + weekly claims",c:"First Q3 growth estimate · strong labor market",i:"h",x:"Advance GDP estimate reveals whether the economy grew through the Hormuz crisis. A strong number cements the December hike case — growth plus inflation equals textbook tightening conditions. Weak growth opens a stagflation debate that could freeze the Fed."},
      {t:"All day",n:"Bank of Japan meeting begins",c:"USD/JPY 156.87 · yen stable",i:"m",x:"Two-day BoJ meeting. USD/JPY 156.87 — yen holding steady after Thursday's brief risk-off strength. Any surprise rate move weakens the dollar and could provide gold relief."}
    ]}
  ],

  later:[
    ["27–28 Oct","FOMC meeting · October hold expected — December hike ~84%, first meeting since Yanbu attacks"],
    ["29–30 Oct","Bank of Japan meeting · USD/JPY 156.87 · Core PCE Friday"],
    ["30 Oct","Core PCE price index · September · first full month of $100+ oil"],
    ["1 Nov","OPEC+ meeting · oil at $117, no spare capacity, Yanbu under threat"],
    ["3 Nov","US midterm elections · reports of planned US-Israel Iran strikes after the vote"],
    ["16–17 Dec","December FOMC · ~84% hike odds to 4.00–4.25%"]
  ],

  scenarios:[
    {id:"yanbu",nm:"Yanbu Breach",sub:"Confirmed damage to East-West pipeline or Yanbu terminal — Saudi's Hormuz bypass cut — Brent $125-135",
     m:{Oil:"up2",Gas:"up2",Gold:"up",Silver:"fl",Dollar:"up",Yields:"up",BTC:"dn2",ETH:"dn2"},
     why:"Saturday's Houthi attacks hit their target — confirmed damage to Yanbu or the East-West pipeline. Saudi Arabia loses its only Hormuz bypass route, meaning all 7 mb/d that was flowing through the pipeline must find alternative routing through contested Gulf waters or be shut in. Brent gaps to $125 on Monday's open, potentially $135 within days. TTF breaks €100 immediately. Gold's safe-haven bid finally overwhelms rate expectations — rallies above $4,100. US authorizes massive SPR release but reserve is at 42-year lows. December hike becomes 100% certain on inflation panic. Dollar surges on petrodollar demand. BTC crashes below $76K. This scenario moved from tail risk to elevated probability after Saturday's demonstrated targeting of the pipeline terminus."},
    {id:"base",nm:"Tense FOMC Hold",sub:"Saudi defenses hold, oil $114-118, FOMC signals December, gold tests $3,950, controlled escalation",
     m:{Oil:"fl",Gas:"up",Gold:"dn",Silver:"dn",Dollar:"fl",Yields:"fl",BTC:"dn",ETH:"dn"},
     why:"The base case. Saturday's attacks are intercepted, no confirmed infrastructure damage. Brent gaps modestly higher Monday to $118-119 on the demonstrated threat, then consolidates $114-118. FOMC holds Wednesday and signals December with hawkish statement language — 'broadening price pressures' and 'energy cost pass-through.' December hike odds firm at 84-88%. Gold drifts toward $3,950 as the $4,000 break triggers technical selling. BTC consolidates $78K-$82K. TTF edges toward €95-100 as winter approaches. Stagflation narrative dominates the week: GDP Thursday reveals whether growth held up, core PCE Friday shows whether oil is passing through to broader inflation. Markets stay tense but functioning."},
    {id:"diplo",nm:"Diplomatic Surprise",sub:"Iran Hormuz deal gains traction, attacks pause, oil to $112, gold bounces to $4,050, risk reprieve",
     m:{Oil:"dn",Gas:"fl",Gold:"up",Silver:"up",Dollar:"dn",Yields:"dn",BTC:"up",ETH:"up"},
     why:"Iran's stated openness to talks — the Hormuz-for-blockade swap — gains traction through Pakistan mediation, despite Trump's public rejection. A quiet Sunday with no new attacks allows the geopolitical premium to deflate. Brent pulls back to $112, releasing pressure on inflation expectations. Gold bounces above $4,050 on oversold RSI at 28 and reduced rate-hike urgency — December odds ease to 75%. BTC rallies to $84K on risk-on. Dollar weakens. This scenario requires a credible diplomatic signal from Washington, which the ambassador's 'weekend strike' hint and Iran's 'no US ships' declaration have made less likely. Probability low but non-zero — diplomatic breakthroughs often come at moments of maximum tension."}
  ],

  levels:[
    ["Brent (Dec)","$113 · $116.72 · $125","Support; Friday settle; Yanbu-breach target."],
    ["WTI (Dec)","$100 · $103.27 · $112","Psychological floor; Friday settle; escalation resistance."],
    ["Gold","$3,950 · $3,994 · $4,050","Next support; current; oversold bounce target."],
    ["Silver","$52 · $53.88 · $56","Next support; current; recovery target."],
    ["Henry Hub","$2.50 · $2.78 · $3.05","Mild-winter floor; current; cold-weather ceiling."],
    ["TTF","€90 · €93.86 · €100","Support; current; cold-winter / disruption target."],
    ["US 10Y","4.85% · 5.00% · 5.15%","Lower bound; current; hawkish FOMC target."],
    ["DXY","101 · 101.75 · 103","Support; current; resistance."],
    ["BTC","$76K · $80.8K · $86K","Correction low; current; breakout target."]
  ],

  wire:[
    {d:"23 Oct",tag:"Gold",h:"Gold Falls to July Low as Inflation Concerns Weigh Before Fed",url:"https://www.bloomberg.com/news/articles/2026-10-23/gold-holds-near-three-month-low-as-ai-jitters-fuel-volatility",why:"Gold's seventh straight decline brought it below $4,000 for the first time in three months as December hike expectations overwhelm the haven bid."},
    {d:"23 Oct",tag:"Gold",h:"Bridgewater China Cut Gold and Is 'Optimistic' on Local Stocks",url:"https://bloomberg.com/news/articles/2026-10-23/bridgewater-china-cut-gold-and-is-optimistic-on-local-stocks",why:"The world's largest hedge fund trimming gold suggests institutional conviction in the metal is weakening as rate expectations shift."},
    {d:"23 Oct",tag:"Oil",h:"Physical Oil Prices Drop in Mideast as Flows Via Hormuz Hold Up",url:"https://www.bloomberg.com/news/articles/2026-10-23/physical-oil-prices-drop-in-mideast-as-flows-via-hormuz-hold-up",why:"A market paradox: physical crude in the Gulf is cheaper even as Brent surges, because producers discount to keep cargoes moving through contested waters."},
    {d:"22 Oct",tag:"Gas",h:"QatarEnergy Signs US LNG Deal With Cheniere Through 2054 as War Hits Supply",url:"https://www.bloomberg.com/news/articles/2026-10-22/qatar-agrees-to-buy-us-lng-to-2054-as-war-disrupts-own-supply",why:"A 28-year LNG deal confirms major producers see the Hormuz disruption as a multi-decade structural shift in global energy flows."},
    {d:"22 Oct",tag:"Rates",h:"Stocks Fall as Oil Rally Keeps a Lid on Treasuries: Markets Wrap",url:"https://www.bloomberg.com/news/articles/2026-10-22/stock-market-today-dow-s-p-live-updates",why:"Thursday's dual shock — the AI sell-off meeting the oil surge — created a rare simultaneous crash across equities, gold, and crypto."},
    {d:"20 Oct",tag:"Gas",h:"Asian LNG Prices Jump to Highest Since 2022 on Tanker Strikes",url:"https://www.bloomberg.com/news/articles/2026-10-20/asian-lng-prices-jump-to-highest-since-2022-on-tanker-strikes",why:"Asian LNG at 2022 highs as tanker strikes tighten supply — Europe must compete with premium-paying Asian buyers for dwindling cargoes."}
  ],

  sources:[
    ["Eastern Herald · Houthis claim attacks Riyadh Aramco Yanbu","https://easternherald.com/2026/10/24/houthis-claim-attacks-riyadh-airport-aramco-yanbu/"],
    ["Tribune India · Houthis targeted airports refineries Saudi","https://www.tribuneindia.com/news/ballistic-missiles/houthis-targeted-airports-refineries-across-saudi-arabia-military-spokesperson-yahya-saree-warns-airlines-against-resuming-operations"],
    ["CNBC · Saudi coalition intercepted Houthi missiles","https://www.cnbc.com/amp/2026/10/24/saudi-led-coalition-says-it-intercepted-houthi-ballistic-missiles-.html"],
    ["Al Bawaba · Saudi missiles toward Mecca Medina","https://www.albawaba.net/news/saudi-arabia-reports-missiles-toward-1639742"],
    ["NewsCord · Houthis strike Saudi airports oil facilities","https://newscord.org/article/houthis-strike-saudi-airports-and-oil-facilities-saudi-intercepts-missiles-over-mecca-and-medina-Story_20261024_WestAsiaeb8f994d_f4d266cbab17"],
    ["HouseOfSaud · Houthi oil facilities airports retaliation","https://houseofsaud.com/houthi-oil-facilities-airports-retaliation/"],
    ["Rigzone · Brent tops $116 Middle East risks","https://www.rigzone.com/news/wire/brent_tops_116_as_middle_east_risks_grow-23-oct-2026-184925-article/"],
    ["CBS News · Iran war live updates Hormuz","https://www.cbsnews.com/live-updates/iran-war-trump-us-oil-gas-prices-strait-of-hormuz-midterms/"],
    ["ThisDayLive · Crude oil surges above $117","https://www.thisdaylive.com/2026/10/25/crude-oil-price-surges-above-117-over-fears-of-fresh-us-strikes-on-iran/"],
    ["PBS · Iran 7 tankers Strait of Hormuz","https://www.pbs.org/newshour/amp/world/iran-says-7-oil-tankers-damaged-in-strait-of-hormuz-and-other-middle-east-news"],
    ["The News PK · Oil surges $116.72 Mideast","https://www.thenews.pk/story/1444847-oil-surges-to-11672-as-mideast-supply-risks-overshadow-broader-market-losses"],
    ["Business Recorder · Oil hits $116 ME conflict","https://www.brecorder.com/news/40445717/oil-hits-usd116-mark-as-me-conflict-rages-on"],
    ["Yahoo Finance · Oil prices ME tensions","https://uk.finance.yahoo.com/news/oil-prices-rise-m-east-012208893.html"],
    ["Sprag Energy · Oil market Saudi attack fears","https://www.spragueenergy.com/oil-market-surges-above-100-on-saudi-energy-attack-fears/"],
    ["Trading Economics · Gold price","https://tradingeconomics.com/commodity/gold"],
    ["Kitco · Gold silver spot prices","https://www.kitco.com/price/precious-metals"],
    ["GoldSilver · Gold price outlook October 2026","https://goldsilver.com/industry-news/article/gold-price-outlook-october-2026/"],
    ["Bloomberg · Bridgewater cuts gold","https://bloomberg.com/news/articles/2026-10-23/bridgewater-china-cut-gold-and-is-optimistic-on-local-stocks"],
    ["OctagonAI · FOMC October rate decision","https://www.octagonai.co/markets/economics/fed/fed-decision-in-october/"],
    ["CryptoBriefing · Fed rate hike probability 90%","https://cryptobriefing.com/fed-rate-hike-probability-bmo-2026/"],
    ["KuCoin · Fed holds rates hike expectations","https://www.kucoin.com/blog/fed-holds-rates-hike-expectations-2026"],
    ["Trading Economics · EU natural gas TTF","https://tradingeconomics.com/commodity/eu-natural-gas"],
    ["Global LNG Hub · Gas prices weekly","https://globallnghub.com/natural-gas-prices-weekly-update-jkm-ttf-and-henry-hub-13-october-2026/"],
    ["Bloomberg · QatarEnergy LNG Cheniere 2054","https://www.bloomberg.com/news/articles/2026-10-22/qatar-agrees-to-buy-us-lng-to-2054-as-war-disrupts-own-supply"],
    ["Bloomberg · Asian LNG highest since 2022","https://www.bloomberg.com/news/articles/2026-10-20/asian-lng-prices-jump-to-highest-since-2022-on-tanker-strikes"],
    ["Blockchain.com · Bitcoin Ethereum prices","https://www.blockchain.com/explorer/prices"],
    ["CoinDesk · Ethereum price","https://www.coindesk.com/price/ethereum"],
    ["Coinpaper · Bitcoin ETFs bleed $636M","https://coinpaper.com/37763/bitcoin-et-fs-bleed-636-million-ethereum-funds-lose-another-111-million"],
    ["CryptoTicker · Crypto ETF outflows October","https://cryptoticker.io/en/crypto-etf-outflows-october-2026-bitcoin-ethereum/"],
    ["Trading Economics · Brent crude oil","https://tradingeconomics.com/commodity/brent-crude-oil"],
    ["Trading Economics · US 10Y yield","https://tradingeconomics.com/united-states/government-bond-yield"],
    ["Trading Economics · Dollar index DXY","https://tradingeconomics.com/united-states/currency"],
    ["Bloomberg · Gold July low inflation Fed","https://www.bloomberg.com/news/articles/2026-10-23/gold-holds-near-three-month-low-as-ai-jitters-fuel-volatility"],
    ["Bloomberg · Physical oil Mideast Hormuz","https://www.bloomberg.com/news/articles/2026-10-23/physical-oil-prices-drop-in-mideast-as-flows-via-hormuz-hold-up"],
    ["Bloomberg · Stocks fall oil Treasuries","https://www.bloomberg.com/news/articles/2026-10-22/stock-market-today-dow-s-p-live-updates"]
  ]
};
/* ===== END EDITION DATA ===== */
