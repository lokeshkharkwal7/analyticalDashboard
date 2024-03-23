import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilterSector,
  addFilterTopics,
  addFilterEndyear,
  addFilterRegion,
  addFilterPestle,
  addFilterSource,
  addFilterCountry,
} from "./redux/slicers/filterSlicer";

function Sidebar() {
  const topics = [
    "gas",
    "oil",
    "consumption",
    "market",
    "gdp",
    "war",
    "production",
    "export",
    "battery",
    "biofuel",
    "policy",
    "economy",
    "strategy",
    "robot",
    "growth",
    "economic",
    "energy",
    "food",
    "administration",
    "unemployment",
    "trade",
    "demand",
    "economic growth",
    "industry",
    "capital",
    "worker",
    "tension",
    "terrorism",
    "transport",
    "peak oil",
    "vehicle",
    "tourist",
    "artificial intelligence",
    "climate",
    "power",
    "crisis",
    "ice",
    "population",
    "politics",
    "business",
    "work",
    "coal",
    "gamification",
    "finance",
    "interest rate",
    "risk",
    "inflation",
    "asylum",
    "resource",
    "plastic",
    "electricity",
    "bank",
    "gasoline",
    "car",
    "money",
    "technology",
    "aquaculture",
    "city",
    "investment",
    "revenue",
    "emission",
    "climate change",
    "infrastructure",
    "government",
    "security",
    "software",
    "building",
    "transportation",
    "wealth",
    "clothing",
    "shortage",
    "debt",
    "agriculture",
    "tax",
    "carbon",
    "brexit",
    "workforce",
    "change",
    "automaker",
    "nuclear",
    "3D",
    "water",
    "data",
    "fossil fuel",
    "election",
    "greenhouse gas",
    "information",
    "shale gas",
    "factory",
    "farm",
    "communication",
    "storm",
    "consumer",
    "material",
    "Washington",
    "pollution",
    "fracking",
  ];

  const sectors = [
    "Energy",
    "Environment",
    "Government",
    "Aerospace & defence",
    "Manufacturing",
    "Retail",
    "Financial services",
    "Support services",
    "Information Technology",
    "Healthcare",
    "Food & agriculture",
    "Automotive",
    "Tourism & hospitality",
    "Construction",
    "Security",
    "Transport",
    "Water",
    "Media & entertainment",
  ];
  const countries = [
    "United States of America",
    "Mexico",
    "Nigeria",
    "Lebanon",
    "Russia",
    "Saudi Arabia",
    "Angola",
    "Egypt",
    "South Africa",
    "India",
    "Ukraine",
    "Azerbaijan",
    "China",
    "Colombia",
    "Niger",
    "Libya",
    "Brazil",
    "Mali",
    "Indonesia",
    "Iraq",
    "Iran",
    "South Sudan",
    "Venezuela",
    "Burkina Faso",
    "Germany",
    "United Kingdom",
    "Kuwait",
    "Canada",
    "Argentina",
    "Japan",
    "Austria",
    "Spain",
    "Estonia",
    "Hungary",
    "Australia",
    "Morocco",
    "Greece",
    "Qatar",
    "Oman",
    "Liberia",
    "Denmark",
    "Malaysia",
    "Jordan",
    "Syria",
    "Ethiopia",
    "Norway",
    "Ghana",
    "Kazakhstan",
    "Pakistan",
    "Gabon",
    "United Arab Emirates",
    "Algeria",
    "Turkey",
    "Cyprus",
    "Belize",
    "Poland",
  ];

  const regions = [
    "Northern America",
    "Central America",
    "World",
    "Western Africa",
    "Western Asia",
    "Eastern Europe",
    "Central Africa",
    "Northern Africa",
    "Southern Africa",
    "Southern Asia",
    "Central Asia",
    "Eastern Asia",
    "South America",
    "South-Eastern Asia",
    "Eastern Africa",
    "Europe",
    "Western Europe",
    "Northern Europe",
    "Southern Europe",
    "Oceania",
    "Africa",
    "Asia",
    "world",
  ];

  const pestles = [
    "Industries",
    "Environmental",
    "Economic",
    "Political",
    "Technological",
    "Organization",
    "Healthcare",
    "Social",
    "Lifestyles",
  ];

  const endyears = [
    2027, 2018, 2025, 2040, 2200, 2019, 2020, 2022, 2017, 2024, 2021, 2026,
    2030, 2046, 2126, 2050, 2041, 2035, 2016, 2055, 2028, 2036, 2060, 2034,
    2051,
  ];

  const sources = [
    "EIA",
    "sustainablebrands.com",
    "SBWire",
    "CleanTechnica",
    "TRAC News",
    "Vanguard News",
    "Avi Melamed",
    "WSJ",
    "Abq",
    "Reuters",
    "Star Tribune",
    "EV Obsession",
    "creamermedia",
    "Resilience",
    "TheNews.NG",
    "FashionNetwork.com",
    "Bloomberg Business",
    "Yes Bank",
    "EGYPS",
    "marketrealist",
    "PDQFX news",
    "therobotreport",
    "nextbigfuture",
    "World Bank",
    "Zero Hedge",
    "Rigzone",
    "International Business Times",
    "DOE EIA 2013 Energy Conference",
    "AllAfrica",
    "Energy.gov Website",
    "AMERICAN COUNCIL ON SCIENCE AND HEALTH",
    "The Jakarta Post",
    "Wharton",
    "African Arguments",
    "Business Insider",
    "Convenience Store Decisions",
    "The Next Web",
    "Cii Radio",
    "Global Money Trends",
    "Guardian Sustainable Business",
    "OklahomaMinerals.com",
    "4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE",
    "FX Empire",
    "Nexus Conference",
    "Fews Net",
    "Sputnik News",
    "platts",
    "CBO",
    "The Chirographer",
    "THE LEAGUE OF WOMEN VOTERS® OF THE FAIRFAX AREA",
    "Yahoo Finance Canada",
    "Gii Research",
    "South Sudan News Agency",
    "Climate Change News",
    "the star online",
    "khorreports-palmoil",
    "Canadian Biomass",
    "Informed Choice Chartered Financial Planners in Cranleigh",
    "Guarini Center",
    "OMFIF",
    "South World",
    "World Energy News",
    "Slinking Toward Retirement",
    "unian",
    "Scientific American",
    "Time",
    "Transport Environment",
    "Triple Pundit",
    "Transport Evolved",
    "Fox Business",
    "The Independent",
    "Biofuels Digest",
    "IRENA newsroom",
    "Nation of Change",
    "Middle East Eye",
    "IEA",
    "Gas 2",
    "Peak Prosperity",
    "Business Wire",
    "RiskMap 2017",
    "MRC",
    "Insurance Journal",
    "Wired UK",
    "Technavio",
    "News",
    "Media Center ",
    "EY",
    "Tactical Investor",
    "Seeking Alpha",
    "iMFdirect - The IMF Blog",
    "oilprice.com",
    "Eurasia Group",
    "NY Times",
    "Imeche",
    "University of Chicago",
    "Adam Curry",
    "JD Supra",
    "UK Government",
    "Investopedia",
    "Vox",
    "South China Morning Post",
    "OEM/Lube News",
    "PR Newswire",
    "Future Market Insights",
    "Manufacturing Operations Technology Viewpoints",
    "CSIS",
    "Edge and Odds",
    "maltawinds.com",
    "iamericas",
    "cpzulia",
    "farms",
    "Le·gal In·sur·rec·tion",
    "IFT",
    "International Banker",
    "bankofcanada",
    "Koenig Investment Advisory",
    "Europa",
    "Jachin Capital",
    "Wells Fargo",
    "ethicalconsumer",
    "Citibank",
    "Cornell University",
    "arabellaadvisors",
    "Critical Threats",
    "Fitch",
    "prsync",
    "Physics World",
    "Renewable Energy World",
    "BBC News Technology",
    "edie.net",
    "Russia Beyond The Headlines",
    "Politico",
    "Tech Times",
    "Wood McKenzie",
    "3D Printing Progress",
    "ihsmarkit",
    "Gizmodo Australia",
    "The Nation",
    "Farms.com",
    "McKinsey & Company",
    "The Guardian",
    "Resources for the Future",
    "satprnews",
    "GreenBiz",
    "CNBC ",
    "Sydney Morning Herald",
    "www.narendramodi.in",
    "CNNMoney",
    "EIU",
    "Euromoney",
    "gasstrategies",
    "Cars.co.za",
    "dpaq",
    "europeanclimate",
    "Australian Government",
    "TeleTrade",
    "Bloomberg New Energy Finance",
    "The Economist",
    "Phys Org",
    "djsresearch",
    "nbk",
    "Guardian",
    "cargill",
    "Worldly",
    "Utility Dive",
    "newscientist",
    "westpandi",
    "IASTOPPERS",
    "THISDAY LIVE",
    "veteranstoday",
    "thespanisheconomy",
    "biologicaldiversity",
    "portfolioticker",
    "MIT Technology Review",
    "FoodQualityNews.com",
    "The Conversation",
    "World Bank Group",
    "TheCable",
    "Future Earth",
    "Carbon Brief",
    "Wikipedia",
    "NWF",
    "USDA",
    "energyglobal",
    "IEA.org",
    "PwC",
    "metalprices",
    "GE Reports",
    "Project Syndicate",
    "Interior Design",
    "idc-community",
    "Science Daily",
    "The Mainichi",
    "economy",
    "Drill or drop?",
    "Huffington Post",
    "Lawfare",
    "Futureseek Link Digest",
    "Environmental Leader",
    "Business Standard",
    "ESPAS",
    "Euler Hermes",
    "amundi",
    "ebrd",
    "Drydock Magazine",
    "BorneoPost Online",
    "Finance Magnates",
    "friday-thinking",
    "Newsweek",
    "ECFR",
    "University of Latvia",
    "Future Timeline",
    "allianzglobalinvestors",
    "controleng",
    "inputsmonitor",
    "Planetsave ",
    "agriworldsa",
    "globalmoneytrends",
    "Oxfam",
    "Gartner",
    "clientadvisoryservices",
    "IMF",
    "Eco-Business.com",
    "Channel News Asia",
    "War on the Rocks",
    "biomassmagazine",
    "Think Progress",
    "No 2 Nuclear Power",
    "ogauthority",
    "IBEF",
    "Prospects for Development",
    "Engineering News",
    "NDTV",
    "African Development Bank",
    "Aljazeera.com",
    "worldenergy",
    "cloudfront",
    "Zawya",
    "FAO",
    "VOA",
    "Hospitality Trends",
    "saltlakecityheadlines",
    "The Ticker Tape",
    "The Globe and Mail",
    "AgWeb - The Home Page of Agriculture",
    "CAFrackFacts",
    "jeita",
    "murc",
    "Fast Co-Exist",
    "Cushman & Wakefield Blog",
    "Science News",
    "Quartz",
    "Total",
    "globalizationpartners",
    "Washington Post",
    "Inside Climate News",
    "polymerspaintcolourjournal",
    "njc-cnm",
    "IISS",
    "The Atlantic",
    "Innovations Report",
    "Nature",
    "Cushman & Wakefield",
    "Maplecroft",
    "Predictive Analytics Times",
    "McKinsey Quarterly",
    "Countries.com Global Content",
    "The Market Mogul",
    "knomad",
    "UNESCO ",
    "GlobalMeatNews.com",
    "Motor Magazine",
    "MENA-Forum",
    "Blue and Green Tomorrow",
    "valburyresearch",
    "HBR",
    "Nanotechnology Innovation",
    "oilvoice",
    "ecesr",
    "Freedonia",
    "ethicalmarkets",
    "Climate News Network",
    "OPEC",
    "INSEAD Knowledge",
    "CIO",
    "Institutional Investor",
    "Society of Motor Manufacturers and Traders (SMMT)",
    "worldculturepictorial",
    "globalfueleconomy",
    "LiveMint",
    "g7g20",
    "Mast",
    "ReadWrite",
    "LNG",
    "European Central Bank",
    "Industrial Control Security",
    "Verisk Maplecroft",
    "ETEnergyworld.com",
    "briandcolwell",
    "DW.COM",
    "Elsevier",
    "MAPI",
    "Days Of Year",
    "Virgin Atlantic",
    "Government of Ireland",
    "The Engineer",
    "ISA",
    "Energy Tomorrow",
    "Justmeans",
    "Khaleej Times",
    "Innovaro",
    "FutureinFocus",
    "What's Next",
    "Stanford News",
    "Middle East Online",
    "Neon Nettle",
    "Handelsblatt Global Edition",
    "EE News",
    "Before It's News | Alternative News | UFO | Beyond Science | True News| Prophecy News | People Powered News",
    "aswm",
    "Shenandoah",
    "Digitalist Magazine",
    "EPA",
    "Azonano",
    "National Geographic Society (blogs)",
    "IER",
    "Ocean Acidification",
    "Smart Grid Observer",
    "Freenewspos",
    "AHDB",
    "SlideShare",
    "VITA Technologies",
    "Wall Street Daily",
    "Bearnobull",
    "CCN: Financial Bitcoin & Cryptocurrency News",
    "IRENA",
    "International Monetary Fund (IMF)",
    "Arangkada Philippines",
    "Global Information Inc",
    "ID TECH INDEX",
    "The Jamestown Foundation",
    "savepassamaquoddybay",
    "atradius",
    "dailyquiddity",
    "bankofengland",
    "Futurity",
    "Business Green",
    "About Best Binary Options Strategy",
    "IHS Engineering 360",
    "European Council",
    "Activist Post",
    "Newsletter",
    "U.S. Environmental Protection Agency",
    "Global Money Trends Magazine",
    "CAJ News Africa",
    "Planetizen",
    "CDC",
    "Strategy & Formerly Booz & Company",
    "PriceWaterhouseCoopers",
    "News.com",
    "Brookings Institute",
    "Innovate UK",
    "The Arab Gulf States Institute Washington",
    "Embedded Computing Design",
    "European Environment Agency",
    "Industry Week",
    "Atlantic Council ",
    "U.K. Ministry of Defense",
    "Future in Focus",
    "Australian Government Department of Defence",
    "MIT Sloan Management Review",
    "Scania Group",
    "watercanada",
    "Common Dreams",
    "theicct",
    "nbp",
    "Thomson Reuters ",
    "University Chronicle",
    "globalr2p",
    "Robothub",
    "New Security Beat",
    "betterenergy",
    "Real Estate Professional",
    "Mind Commerce",
    "Yahoo Finance",
    "Pickens Plan",
    "RUSI",
    "Hardin Tibbs",
    "World Health",
    "environmentalpeacebuilding",
    "greenerearthnews",
    "conferenceseries",
    "dailytexanonline",
    "EPS News",
    "The American Prospect",
    "Face2face Africa",
    "Oil and Gas Journal",
    "Infracircle",
    "uschamber",
    "energy news cyprus",
    "UNEP",
    "Foreign Policy",
    "Europe in My Region",
  ];

  const dispatch = useDispatch();
  const onchange = (e) => {
    e.preventDefault();
    if (e.target.name === "topic") {
      // // console.log("Topic clicked", e.target.value);
      dispatch(addFilterTopics(e.target.value));
    } else if (e.target.name === "sector") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterSector(e.target.value));
    } else if (e.target.name === "country") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterCountry(e.target.value));
    } else if (e.target.name === "region") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterRegion(e.target.value));
    } else if (e.target.name === "pestle") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterPestle(e.target.value));
    } else if (e.target.name === "source") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterSource(e.target.value));
    } else if (e.target.name === "end_year") {
      // // console.log(e.target.name, " is clicked with value : ", e.target.value);
      dispatch(addFilterEndyear(e.target.value));
    }
  };

  const topicinfo = useSelector((state) => {
    return state.FILTERINPUTSLICER;
  });
  const seeSiderbartopic = () => {
    // // console.log(topicinfo);
  };

  return (
    <React.Fragment>
      <>
        <button
          className="btn btn-primary mt-2   mx-2"
          style={{ background: "#0B5ED7" }}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="fa-solid fa-filter mx-1"></i>More Filters
        </button>
        <div
          className="offcanvas offcanvas-start "
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header bg-primary text-light">
            <h5 className="offcanvas-title   " id="offcanvasExampleLabel">
              Filter Panel For BlackCoffer DashBoard{" "}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body  ">
            <div className=" text-secondary">
              Please Choose the Filters as per Your Liking{" "}
              <i className="fa-solid fa-filter"></i>
            </div>

            <form>
              {/* First Filter  */}
              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="topic"
              >
                {" "}
                <option value="">Topics</option>
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
              {/* Second Filter  */}
              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="sector"
              >
                <option value="">Sectors</option>

                {sectors.map((sector) => (
                  <option key={sector} value={sector}>
                    {sector}
                  </option>
                ))}
              </select>

              {/* Filter 3  */}
              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="country"
              >
                <option value="">Country</option>

                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Filter 4  */}

              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="region"
              >
                <option value="">Region</option>

                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>

              {/* filter 5  */}
              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="pestle"
              >
                <option value="">Pestle</option>

                {pestles.map((pestle) => (
                  <option key={pestle} value={pestle}>
                    {pestle}
                  </option>
                ))}
              </select>
              {/* filter 6   */}

              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="end_year"
              >
                <option value="">End Year</option>

                {endyears.map((end_year) => (
                  <option key={end_year} value={end_year}>
                    {end_year}
                  </option>
                ))}
              </select>

              {/* filter 7   */}

              <select
                className="form-select text-secondary mt-4"
                aria-label="Default select example"
                style={{ width: "12rem" }}
                onChange={onchange}
                name="source"
              >
                <option value="">Sources</option>

                {sources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}

export default Sidebar;
