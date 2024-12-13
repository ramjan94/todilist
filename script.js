
    function addTodo() {
      const todoInput = document.getElementById('todoInput');
      const todoList = document.getElementById('todoList');

      if (!todoInput.value.trim()) {
        alert('Please enter a valid task.');
        return;
      }

      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';

      const taskText = document.createElement('span');
      taskText.textContent = todoInput.value;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        todoList.removeChild(todoItem);
      };

      todoItem.appendChild(taskText);
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  