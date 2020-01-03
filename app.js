// var button = document.getElementsByClassName('delete')



//delete Item
// Array.from(button).forEach(function(butt){
//     butt.addEventListener('click', function(e){
        
//          if(e.target.className == 'delete'){
//             const delItem = e.target.parentElement;
//             delItem.parentNode.removeChild(delItem);
//          }
//     });
// })

const delLists = document.querySelectorAll('#todo-list div');

Array.from(document.querySelectorAll('.delete')).forEach(function(item){
        item.addEventListener('click', function(e){
            const del = item.parentElement;

            del.parentNode.removeChild(del);

    })
})



//create new to do

var forms = document.getElementsByClassName('todo')

Array.from(forms).forEach(function(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        
        const value = form.querySelector('input[type="text"]').value;
        console.log(value)

const div = document.createElement('div');
const todoName = document.createElement('p');
const deleBtn = document.createElement('span');



    deleBtn.addEventListener('click', function(e){
        const newDel = deleBtn.parentElement;

        newDel.parentNode.removeChild(newDel);
        
        console.log(newDel)
    })
        
const container = document.getElementById('todo-list');

deleBtn.textContent = 'delete';
todoName.textContent = value;

todoName.classList.add('task');
deleBtn.classList.add('delete');

div.appendChild(todoName);
div.appendChild(deleBtn);
container.appendChild(div);
    })
})

