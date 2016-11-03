import {todos} from './state';
import {listen} from './lib/events';
import {addTodo, toggleTodoState} from './actions';

function insertItem(event) {
  const todoInput = document.getElementById('todoInput');
  todos.dispatch(addTodo(todoInput.value));
  event.stopPropagation();
}

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        insertItem(event);
    });

    listen('keyup', '#todoInput', event => {
        if(event.keyCode == 13){
          insertItem(event);
        }
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });
}
