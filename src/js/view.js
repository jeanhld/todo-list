import React from 'react';
import {filterItems} from './actions';

export function Todo(props) {
    const { todo } = props;
    return (
        <span>
            <input className="js_toggle_todo" type="checkbox" key={todo.get('id')} checked={todo.get('done')}/>
            {todo.get('text')}
        </span>
    );
}

export function TodoList(props) {
    const { todos, toggleTodoState, addTodo } = props;
    const toggleClick = id => event => toggleTodoState(id);

    const onSubmit = (event) => {
        const isClick = event.type == 'click'
        const input = document.getElementById('todoInput');
        const text = input.value;
        const isEnterKey = (event.which == 13);
        const isLongEnough = text.length > 0;

        if((isClick || isEnterKey) && isLongEnough) {
            input.value = '';
            addTodo(text);
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <Header />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-centered">
                        <div id="app">
                            <div className="todo__input input-group">
                                <input type="text" className="form-control" id="todoInput" onKeyDown={onSubmit} />
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" id="addTodo" onClick={onSubmit} type="button">Add</button>
                                </span>
                            </div>
                            <div className='list-group'>
                                <ul className='todo todo__list'>
                                    {todos.map(t => (
                                        <li key={t.get('id')} className={`todo__item todo__item--${t.get('done') ? 'done' : 'open'} list-group-item list-group-item-${t.get('done') ? 'success' : 'warning' }`} onClick={toggleClick(t.get('id'))}>
                                            <Todo todo={t} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {features.enableFilter ? <Filter /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Filter() {
    const onChange = (event) => {
        const type = event.target.value;
        filterItems(type);
    };

    return (
        <div className="filter" onChange={onChange}>
            <label className="radio-inline">
                <input type="radio" name="filterType" value="all" defaultChecked /> Mostrar todos<br/>
            </label>
            <label className="radio-inline">
                <input type="radio" name="filterType" value="opened" /> Somente abertos<br/>
            </label>
            <label className="radio-inline">
                <input type="radio" name="filterType" value="closed" /> Somente fechados<br/>
            </label>
        </div>
    );
}

export function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-centered">
                    <div className="jumbotron">
                        <div className="title">Todo List</div>
                        <p> Inspired by SoftExpert </p>
                    </div>
                    <hr/>
                </div>
            </div>
        </div>
    );
}
