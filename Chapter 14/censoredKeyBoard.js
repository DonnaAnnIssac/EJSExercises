var field = document.querySelector("input");
field.addEventListener('keydown', (event) => {
  console.log(event.keyCode)
  if (event.keyCode === 81 || event.keyCode === 87 || event.keyCode === 88) 
    event.preventDefault()
})

