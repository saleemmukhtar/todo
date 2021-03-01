var main = document.getElementById('mainList')

firebase.database().ref('todos').on('child_added',function(data){
    
// add todo//


    var finalText = document.createTextNode(data.val().value)
    var list = document.createElement('p')
    list.setAttribute('class', 'list')
    list.appendChild(finalText)
    main.appendChild(list)

    
    //========= Create delete Button

    var btnDiv = document.createElement('div')
    var btn = document.createElement('button')
    btn.setAttribute('class', 'btn')
    btn.setAttribute('id',data.val().key)
    btn.setAttribute('onClick', 'deleteTodo(this)')
    var btnText = 'Delete'
    var finalbtnText = document.createTextNode(btnText)
    btn.appendChild(finalbtnText)




    //========= Create Edit Button

    var editBtn = document.createElement('button')
    editBtn.setAttribute('class', 'btn')
    editBtn.setAttribute('id',data.val().key)
    editBtn.setAttribute('onClick', 'edit(this)')
    var editbtnText = 'Edit'
    var finaleditbtnText = document.createTextNode(editbtnText)
    editBtn.appendChild(finaleditbtnText)


    btnDiv.appendChild(btn)
    btnDiv.appendChild(editBtn)
    list.appendChild(btnDiv)
})

// /add todo///
var inputValue = document.getElementById('inp')
function add() {

    var text = inputValue.value

    var database = firebase.database().ref('todos')

    var key = database.push().key;

    var todo = {
        value:inp.value,
        key:key

    }

    database.child(key).set(todo)


    // var finalText = document.createTextNode(text)
    // var list = document.createElement('p')
    // list.setAttribute('class', 'list')
    // list.appendChild(finalText)
    // main.appendChild(list)



    //========= Create delete Button

    // var btnDiv = document.createElement('div')
    // var btn = document.createElement('button')
    // btn.setAttribute('class', 'btn')
    // btn.setAttribute('onClick', 'deleteTodo(this)')
    // var btnText = 'Delete'
    // var finalbtnText = document.createTextNode(btnText)
    // btn.appendChild(finalbtnText)




    //========= Create Edit Button

    // var editBtn = document.createElement('button')
    // editBtn.setAttribute('class', 'btn')
    // editBtn.setAttribute('onClick', 'edit(this)')
    // var editbtnText = 'Edit'
    // var finaleditbtnText = document.createTextNode(editbtnText)
    // editBtn.appendChild(finaleditbtnText)


    inputValue.value = ''

    // btnDiv.appendChild(btn)
    // btnDiv.appendChild(editBtn)
    // list.appendChild(btnDiv)

}




function deleteTodo(e) {
    var li = e.parentNode.parentNode
    li.remove()
    // console.log(e.parentNode.parentNode)

    firebase.database().ref('todos').child(e.id).remove()


    // console.log(e.id)

}

function edit(e) {
    var li = e.parentNode.parentNode
    var editText = prompt('Enter Edit text')
    li.firstChild.nodeValue = editText
    // console.log(li)

    var edittodo = {
        value:editText,
        key:e.id
    }

    firebase.database().ref('todos').child(e.id).set(edittodo)


}
function deleteAll() {
    main.innerHTML = ''
}