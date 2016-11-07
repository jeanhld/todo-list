import { connect } from 'react-redux';
import * as components from './view';
import { addTodo, toggleTodoState } from './actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodoState: id => dispatch(toggleTodoState(id))
        };
    }
)(components.TodoList);
