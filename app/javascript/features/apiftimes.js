// -----------------------------------------------FINANCIAL-TIMES-API-JS-------------------------
// branch name : feature
// Feature created in order to recover data from the Financial Times

// Curations allow the API consumer to specify a curated set of content and describes the scope against which a Query will operate.
// AVAILABLE QUERY CONTEXT CURATIONS : "ARTICLES, BLOGS, PAGES, PODCASTS, VIDEOS"

// Aspects allow consumers to specify which elements of content they wish to receive within the results. Aspects can be provided in the resultContext
// AVAILABLE RESULTS CONTEXT : ASPECTS : “lifecycle”,“location”,“master”,“summary”,“title”

// <%= @deal.acquirer.name %>

const searchParam = {
  queryString: "banks",
  queryContext: {
    curations: ["PAGES", "BLOGS", "ARTICLES"],
  },
  resultContext: {
    aspects: ["title", "lifecycle"],
    maxResults: 20,
    offset: 21,
    sortOrder: "ASC",
    sortField: "title",
    facets: { names: ["people"], maxElements: 20, minThreshold: 1 },
  },
};
const searchContentAPI = async () => {
  const url = "https://api.ft.com/content/search/v1";
  const json = JSON.stringify(searchParam);
  try {
    // proxyurl +
    const response = await fetch(proxyurl + url, {
      method: "POST",
      body: json,
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "59cbaf20e3e06d3565778e7b3d64dd02f06e492d9f7e1adb8c648332",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      for (let i = 0; i < searchParam.resultContext.maxResults; i++) {
        let articleId = dataAPI.results[0].results[0].id;
        // console.log(articleId); //DEBUG
        getContentId(articleId);
      }
    }
  } catch (e) {
    console.error("e : ", e);
  }
};

searchContentAPI();
// WARNING: Proxy URL

const getContentId = async (id) => {
  const url = `https://api.ft.com/content/{${id}}`;
  // console.log(url); //DEBUG
  try {
    const response = await fetch(proxyurl + url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": "59cbaf20e3e06d3565778e7b3d64dd02f06e492d9f7e1adb8c648332",
      },
    });
    if (response.ok) {
      const dataAPI = await response.json();
      // console.log("NO BUG") //DEBUG
      console.log(dataAPI); // We just print the object in the console ATM.
    }
  } catch (e) {
    console.error("e : ", e);
  }
};
