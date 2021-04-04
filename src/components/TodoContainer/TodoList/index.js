import * as S from "./styles";
import TodoListItem from "./TodoListItem";

const TodoList = ({ pending, done, pendingQty, doneQty, todos }) => {

    const title = 
        pending 
            ? pendingQty === 0 
                ? doneQty > 0
                    ? 'Sensação de dever cumprido. Que tal um café agora?'
                    : 'Que tal organizar as ideias criando uma lista agora?'
                : `Pendente (${pendingQty})`
            : doneQty > 0
                ? `Feito (${doneQty})`
                : '';

    const sortTodos = (x, y) => pending? x.creationDate - y.creationDate : y.lastModificationDate - x.lastModificationDate;

    return (
        <S.Container>
            <S.Title> {title} </S.Title>
            {
                todos.length > 0 &&
                todos
                    .sort(sortTodos)
                    .map((todo) => (
                        <TodoListItem key={todo.id} todo={todo} />
                    ))
            }
        </S.Container>
    )

}

export default TodoList;