var  userInput = document.getElementById("input");
var todoList = document.getElementById("todolist");
var input = [];
let addBtn = document.getElementById("button");
addBtn.addEventListener("click", function() {
    input.push( userInput.value);
     userInput.value = "";
    list();
})

function list() {
    todoList.innerHTML = "";
    input.forEach((element, index) => {
        const userList = document.createElement("li");
        userList.textContent = element;
        userList.style.marginBottom = "20px";
        userList.style.padding = "20px";
        userList.style.boxShadow = "-1px -1px 5px 0px gray";
        userList.style.borderBottom = "5px solid #7055d3";

        var editBtn = document.createElement("span");
        editBtn.textContent = "Edit";
        editBtn.style.marginRight = "5px";
        editBtn.style.marginLeft = "270px";
        editBtn.style.cursor = "pointer";
        editBtn.addEventListener("click", function () {
            var value = prompt("Enter your edited todo:", element);
            if (value) {
                input[index] = value;
                list();
            }
        });

        userList.appendChild(editBtn);

        var delBtn = document.createElement("span");
        delBtn.textContent = "|x";
        delBtn.style.cursor = "pointer";
        delBtn.addEventListener("click", function () {
            input.splice(index, 1);
            list();
        });

        userList.appendChild(delBtn);
        todoList.appendChild(userList); 
    });
}