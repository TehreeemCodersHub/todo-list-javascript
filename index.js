let submit_btn = document.querySelector('#submit');
let delete_item = document.querySelector('#deleteItem');
// let add_task = document.querySelector('.task');
let msg = document.getElementById("msg");
let ul_items = document.querySelector('#items li>input');
//console.log(ul_items.value);
const form = document.querySelector('#addForm');
const input_item = document.querySelector('#item-input');
let todos_array = [];
let data = {};

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  todos();
});

  let edit_btn = document.getElementById('edit');
form.addEventListener('edit_btn',(e)=>{
  console.log(e.target);
})

function todos() {

     console.log("Input item: ", input_item.value);
     const input_value = input_item.value === "" ? msg.innerHTML = 'can not be blank' : msg.innerHTML=''; 
     
     if(input_item.value) {
      document.querySelector('.task').innerHTML += `
      <ul class="flex pt-2 space-x-3 overflow-hidden" id="items">
        <li class="md:w-full"> <input value = "${input_item.value}" class="rounded-lg  h-10 md:w-full pl-5" type ='text' disabled > </li> 
        <li > <button class="bg-green-400 rounded-lg p-2 " > Read</button> </li> 
        <li> <button class="bg-red-600 rounded-lg p-2 " id= 'edit'  > Edit </button> </li>
        <li> <button class="bg-red-600 rounded-lg p-2 " id="deleteItem"> Delete </button> </li> 
      </ul>
      
      `;
      input_item.value == "";
      msg.innerHTML = '';

     }else {
      console.log('no value')
     }
    
     document.querySelector('#clear').addEventListener('click', ()=>{
      document.querySelectorAll(".task").forEach((element)=> element.remove());
     })

      document.querySelectorAll('#deleteItem').forEach((element)=>{
        element.onclick  = function() {
          
          console.log(element.parentNode);
          element.parentElement.parentElement.remove();
        }
      });

      // document.querySelectorAll('#edit').forEach((item)=>{
      //   item.onclick = function()  {
      //         console.log(item);
      //         console.log('edit item value: ' + item.parentElement.value);

      //     }
      // })
    //  let edit_btn = document.getElementById('edit');

    //  edit_btn.addEventListener('click', ()=>{
    //     console.log(edit_btn.parentElement.parentElement);

    //   })

 
     
    
     
}




