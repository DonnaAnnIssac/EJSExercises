function sendRequest(type) {
    let req = new XMLHttpRequest()
    req.open('GET', 'eloquentjavascript.net/author', true)
    req.setRequestHeader('accept', type)
    req.send(null)
    return req
}

let types = ['text/plain', 'text/html', 'application/json']

types.forEach((type) => {
    let req = sendRequest(type)
    req.onload = () => console.log(req.responseText)
})