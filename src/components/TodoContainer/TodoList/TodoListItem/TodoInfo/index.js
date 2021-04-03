import * as S from "./styles";
import * as C from "../../../../../components";
import TodoText from "./TodoText";
import TodoButton from "./TodoButton";

const TodoInfo = ({ todo, editMode, setEditMode, deleteTodo }) => {

    return (
        <S.Container>
            <C.Checkbox />
            <TodoText text={todo.text} />
            <TodoButton edit action={() => setEditMode(!editMode)} />
            <TodoButton remove action={() => deleteTodo(todo.id)} />
        </S.Container>
    )

}

export default TodoInfo;