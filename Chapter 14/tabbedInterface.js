function asTabs(node) {
    // Your code here.
    var childrenList = node.childNodes
    var tabs = []
    for(var i = 0; i < childrenList.length; i++) {
    	var child = childrenList[i]
        if(child.nodeType === document.ELEMENT_NODE)
          tabs.push(child)
    }
    
    var tabList = document.createElement("div")
    
    tabs.forEach((tab, i) => {
    	var button = document.createElement("button")
        button.textContent = tab.getAttribute("data-tabname")
    	button.addEventListener("click", () => {selectTab(i)} )
        tabList.appendChild(button)
    })
    node.insertBefore(tabList, node.firstChild)
   	function selectTab(n) {
      tabs.forEach((tab, i) => {
       if(i === n)
         tab.style.display = ""
       else 
         tab.style.display = "none"
      })
      for (var i = 0; i < tabList.childNodes.length; i++) {
        if (i == n)
          tabList.childNodes[i].style.background = "violet";
        else
          tabList.childNodes[i].style.background = "";
      }
    } 
  }
  asTabs(document.querySelector("#wrapper"));
