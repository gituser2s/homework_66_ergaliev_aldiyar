const div = document.getElementById('container')
for(let i=0; i<5; i++){
    let element = document.createElement('div')
    element.className = 'element'
    element.innerText = 'Element ' + i
    div.appendChild(element)
}