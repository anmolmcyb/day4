const message = "welcome to cybage "
function changeContent() {
    // document.getElementById('').innerText
    let paras = document.getElementsByTagName('p');
    for (let p of paras ){
        p.innerText = message
    }
}

// function addPara(){
//     let add = document.getElementById('add')
//     let para = document.createElement('p')
//     let textNode = document.createTextNode(message)
//     para.appendChild(textNode)
//     add.appendChild(para)
// }
/**
 * 
 * @returns {string}
 */
function getMessage(id){
    return document.getElementById(id).innerText
}
function createPara(text) {
    let para = document.createElement('p')
    let textNode = document.createTextNode(text)
    para.appendChild(textNode)
    return para
}
function addMessage(){
    let msg = document.getElementById('txt')
    let add = document.getElementById('messages')
    let para = createPara(msg.value)
    add.appendChild(para)
    msg.value = ""
}
function addPara(){
    let add = document.getElementById('add')
    let para = createPara(message)
    add.appendChild(para)
}