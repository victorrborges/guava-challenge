import * as S from "./styles";
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {

    return (
        <S.Container>
            {
                todos.length > 0 &&
                todos.map((todo) => (
                    <TodoListItem key={todo.id} todo={todo} />
                ))
            }
        </S.Container>
    )

}

export default TodoList;