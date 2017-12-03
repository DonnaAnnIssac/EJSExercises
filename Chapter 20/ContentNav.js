const http = require("http")

function readStream(stream, callback) {
  var content = ""
  stream.on("data", (chunk) => {
    content += chunk
  })
  stream.on("end", () => {
    callback(null, content)
  })
  stream.on("error", (error) => {
    callback(error)
  })
}

let types = ["text/plain", "text/html", "application/json"]
types.forEach((type) => {
  http.request({
    hostname: "eloquentjavascript.net",
    path: "/author",
    headers: {Accept: type}
  }, (response) => {
    if (response.statusCode != 200) {
      console.error("Request for " + type + " failed: " + response.statusMessage)
      return
    }
    readStream(response, (error, content) => {
      if (error) throw error
      console.log("Type " + type + ": " + content)
    })
  }).end()
})
