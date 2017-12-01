var trailingElements = []
for (let i = 0; i < 12; i++) {
  let node = document.createElement("div")
  node.className = "trail"
  document.body.appendChild(node)
  trailingElements.push(node)
}
var currentDot = 0
  
addEventListener("mousemove", (event) => {
  var elem = trailingElements[currentDot]
  elem.style.left = (event.pageX - 3) + "px"
  elem.style.top = (event.pageY - 3) + "px"
  currentDot = (currentDot + 1) % trailingElements.length
})
