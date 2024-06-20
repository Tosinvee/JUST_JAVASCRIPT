const form = document.getElementById("data-form");
const list = document.getElementById("data-lists");
const input = document.getElementById("data-input");

let todoArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random() * 1000000;
  const todo = new Todo(id, input.value);
  todoArr = [...todoArr, todo];
  UI.displayData();
  UI.clearInput();
  UI.deleteTodo();
});

class Todo {
  constructor(id, todo) {
    this.id = id;
    this.todo = todo;
  }
}

// display the todo in the box
class UI {
  static displayData() {
    let displayData = todoArr.map((item) => {
      return `
            <div class = 'todo'>
            <p>${item.todo}</p>
            <span class="remove" data-id = ${item.id}>delete</span>
       </div>     `;
    });

    list.innerHTML = displayData.join(" ");
  }

  static clearInput() {
    input.value = "";
  }
  static deleteTodo() {
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
      }
      let btnId = e.target.dataset.id;
      //remove from array
      UI.removeArrayTodo(btnId);
    });
  }
  static removeArrayTodo(id) {
    todoArr = todoArr.filter((item) => item.id !== +id);
  }
}
