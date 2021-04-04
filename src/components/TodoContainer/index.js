import * as S from "./styles";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import Header from "./Header";

const TodoContainer = ({ userId, todos }) => {
    const doneTodos = todos.filter((todo) => todo.done);
    const pendingTodos = todos.filter((todo) => !todo.done);
    const doneQty = doneTodos.length;
    const pendingQty = pendingTodos.length;

    return (
        <S.Container>
            { pendingQty === 0 && <Header doneQty={doneQty} /> }
            <TodoList pending pendingQty={pendingQty} doneQty={doneQty} todos={pendingTodos} />
            <NewTodo userId={userId} pendingQty={pendingQty} doneQty={doneQty} />
            <TodoList done pendingQty={pendingQty} doneQty={doneQty} todos={doneTodos} />
        </S.Container>
    )

}

export default TodoContainer;