const http = require("http");

const server = http.createServer((req, res) => {
  console.log("connected");
  res.statusCode = 200;
  let data = [];

  req.on("data", (chunk) => {
    data.push(chunk);

    /* var container = JSON.parse(data.toString()); //data already parsed to json
    console.log(container.newValue);
    var doc = null;
    try {
      doc = JSON.parse(JSON.stringify(container.newValue)); //just assign container.newValue to doc and access data from there
    } catch (error) {
      console.log("JSON parse error " + error);
    }
    console.log(doc); */
  });

  res.end("Connection established with local server");
});
server.listen(8081, () => {
  console.log("Server running...");
  console.log("Server start");
});
