import * as S from "./styles";
import NewTodo from './NewTodo';
import TodoList from './TodoList';

const TodoContainer = ({ userId, todos }) => {

    return (
        <S.Container>
            <NewTodo userId={userId} />
            <TodoList todos={todos} />
            <TodoList todos={todos} />
        </S.Container>
    )

}

export default TodoContainer;