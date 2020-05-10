//Require : npm i cors-anywhere
//Run proxy server : node "name.js"
//This proxy  -> node ./app/javascript/proxy/proxy.js

//Listen on a specific host via the HOST environment variable
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

const cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
    originWhitelist: [
      "http://localhost:3000",
      "https://cryptic-harbor-77074.herokuapp.com/",
    ], // Origins allowed.
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function() {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
