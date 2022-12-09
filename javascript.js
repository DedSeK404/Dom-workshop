var btnAdd = document.getElementById("add_task");

//console.log(btnAdd)

btnAdd.addEventListener("click", function () {
  //console.log("hello")
  var divAdd = btnAdd.parentElement.parentElement;
  //console.log(divAdd)
  var inputTag = divAdd.querySelector("input");
  //console.log(inputTag)
  var newValue = inputTag.value;
  //console.log(newValue)
  if (!newValue) {
    return alert("You have to write a text");
  }
  //console.log(newValue)
  var Ul = document.createElement("Ul");
  Ul.setAttribute("class", "list-group list-group-horizontal rounded-0");
  Ul.innerHTML = ` <li
class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
<div class="form-check">
  <input class="form-check-input me-0" type="checkbox" value="" id="flexCheckChecked1"
    aria-label="..." />
</div>
</li>
<li
class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
<p class="lead fw-normal mb-0 title">${newValue}</p>
</li>
<li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
<div class="d-flex flex-row justify-content-end mb-1">
  <a href="#!" class="text-info edittask" data-mdb-toggle="tooltip" title="Edit todo"><i
      class="fas fa-pencil-alt me-3"></i></a>
  <a href="#!" class="text-danger deltask" data-mdb-toggle="tooltip" title="Delete todo"><i
      class="fas fa-trash-alt"  ></i></a>
</div>

</li>`;
  let Tasks = document.getElementById("Tasks");
  Tasks.appendChild(Ul);
  inputTag.value = "";
  //delete
  var deleteTag = Tasks.getElementsByClassName("deltask");
  //console.log(deleteTag)
  for (let i = 0; i < deleteTag.length; i++) {
    deleteTag[i].addEventListener("click", deleteTask);
  }
  //edit

var editTag = Tasks.getElementsByClassName("edittask");
//console.log(deleteTag)
for (let i = 0; i < deleteTag.length; i++) {
  editTag[i].addEventListener("click", EditTask);
}


});

var deleteTag = Tasks.getElementsByClassName("deltask");
//console.log(deleteTag)
for (let i = 0; i < deleteTag.length; i++) {
  deleteTag[i].addEventListener("click", deleteTask);
}

function deleteTask(event) {
  const Ul =
    event.target.parentElement.parentElement.parentElement.parentElement;

  console.log(
    event.target.parentElement.parentElement.parentElement.parentElement
  );
  Ul.remove();
}
//edit

var editTag = Tasks.getElementsByClassName("edittask");
//console.log(deleteTag)
for (let i = 0; i < deleteTag.length; i++) {
  editTag[i].addEventListener("click", EditTask);
}
function EditTask(event) {
  console.log(event.target);
  var newTitle = prompt("Type Text Here");
  console.log(newTitle);
  const p =
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(
      ".title"
    );
  console.log(p);
  p.innerText=newTitle
}
