const urlMod = require("url")

function urlToPath(url) {
    var path = urlMod.parse(url).pathname
    var result = "." + decodeURIComponent(path)
    for (;;) {
      var simplified = result.replace(/(\/|\\)\.\.(\/|\\|$)/, "/")
      if (simplified == result) return result
      result = simplified
    }
  }