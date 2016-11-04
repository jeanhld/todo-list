import {isEnabled} from './lib/feature';

export function render(el, state) {
    const todoItems = state.todos.map(renderTodoItem).join('');
    el.innerHTML = renderApp(
        renderInput(),
        renderTodos(todoItems)
    );
}

function renderApp(input, todoList) {
    if(isEnabled('renderBottom')) {
        return renderAddTodoAtBottom(input, todoList);
    } else {
        return renderAddTodoAtTop(input, todoList);
    }
}

function renderAddTodoAtTop(input, todoList) {
    return `${renderHeader()}
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-centered">
                        <div id="app">
                            ${input}
                            ${todoList}
                            ${isEnabled('filter') ? renderFilter() : ''}
                        </div>
                    </div>
                </div>
            </div>`;
}

function renderAddTodoAtBottom(input, todoList) {
    return `${renderHeader()}
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-centered">
                        <div id="app">
                            ${isEnabled('filter') && isEnabled('filterTop')  ? renderFilter() : ''}
                            ${todoList}
                            ${input}
                            ${isEnabled('filter') && !isEnabled('filterTop') ? renderFilter() : ''}
                        </div>
                    </div>
                </div>
            </div>`;
}

function renderInput() {
    return `<div class="todo__input input-group">
                <input type="text" class="form-control" id="todoInput">
                    <span class="input-group-btn">
                        <button class="btn btn-primary" id="addTodo" type="button">Add</button>
                    </span>
                </input>
            </div>`;
}

function renderTodos(todoItems) {
    return `<ul class="todo list-group">
                ${todoItems}
            </ul>`;
}

function renderTodoItem(todo) {
    const todoClass = `todo__item todo__item--${todo.done ? 'done' : 'open'}`;

    return `<li class="${todoClass} list-group-item list-group-item-${todo.done ? 'success' : 'warning' }">
                <input class="js_toggle_todo" type="checkbox" data-id="${todo.id}"${todo.done ? ' checked' : ''}>
                ${todo.text}
            </li>`;
}

function renderFilter() {
    return `<div class="filter">
                <label class="radio-inline">
                    <input type="radio" name="filterType" value="all" checked=true> Mostrar todos<br>
                </label>
                <label class="radio-inline">
                    <input type="radio" name="filterType" value="opened"> Somente abertos<br>
                </label>
                <label class="radio-inline">
                    <input type="radio" name="filterType" value="closed"> Somente fechados<br>
                </label>
            </div>`;
}

function renderHeader() {
    return `<div class="container">
                <div class="row">
                    <div class="col-lg-6 col-centered">
                        <div class="jumbotron">
                            <div class="title">Todo List</div>
                            <p> Inspired by SoftExpert </p>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
            `
}
