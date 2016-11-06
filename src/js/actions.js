export function toggleTodoState(id) {
    return {
        type: 'TODO_TOGGLE_DONE',
        id
    };
}

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

export function filterItems(type) {
    switch (type) {
        case 'all':
            showAllItems()
            break;
        case 'opened':
            showAllItems();
            hideClosedItems();
            break
        case 'closed':
            showAllItems();
            hideOpenedItems();
            break;
    }
}

export function showAllItems() {
    const elements = document.getElementsByClassName('todo__item');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "block";
    }
}

export function hideOpenedItems() {
    const elements = document.getElementsByClassName('todo__item--open');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

}

export function hideClosedItems() {
    const elements = document.getElementsByClassName('todo__item--done');
    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

}
