// Include a new Todo item
export function addTodo(text) {
    const uid = () => Math.random().toString(34).slice(2);

    return {
        type: 'ADD_TODO',
        payload: {
            id: uid(),
            done: false,
            text: text
        }
    };
}

// Change Todo item state
export function toggleTodoState(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: id
    };
}

// Filter Todo items
export function filterItems(type) {
    switch (type) {
        case 'all':
            showAllItems()
            break;
        case 'opened':
            showAllItems();
            hideItems('open');
            break
        case 'closed':
            showAllItems();
            hideItems('done');
            break;
    }
}

// Display all Todo items
export function showAllItems() {
    const elements = document.getElementsByClassName('todo__item');

    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "block";
    }
}

// Hide Todo items by type ('open' or 'done')
export function hideItems(type) {
    const elements = document.getElementsByClassName(`todo__item--${type}`);

    for(var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }

}
