document.querySelector("#push").addEventListener("click", function () {
  let todoEl = document.querySelector("#newtask input").value;

  if (todoEl.length === 0) {
    alert("enter the value");
  } else {
    document.getElementById("tasks").innerHTML += `
              <div class="task">
              <span id="task">${todoEl}</span>
              <button type="delete" class="delete">Delete</button>
              </div>
              
              `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
  document.querySelector("#newtask input").value = "";
});
