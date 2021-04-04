import * as S from "./styles";
import * as C from "../../../../../components";
import TodoText from "./TodoText";
import TodoButton from "./TodoButton";
import swal from "@sweetalert/with-react";

const TodoInfo = ({ todo, editMode, setEditMode, deleteTodo, editTodoStatus }) => {

    const removeTodoWrapper = () => {
        swal({
            title: `Remover to-do?`,
            text: `Tem certeza que deseja remover o to-do "${todo.text}"?`,
            buttons: ["Não", "Sim"],
            dangerMode: true,
            html: true
        }).then(shouldRemoveTodo => {
            if (shouldRemoveTodo) {
                deleteTodo(todo.id)
                swal(
                    `To-do removido`,
                    `O to-do "${todo.text}" foi removido!`
                );
            } else {
                swal(
                    `To-do não removido`,
                    `O to-do "${todo.text}" não foi removido!`
                );
            }
        });
    }

    return (
        <S.Container>
            <C.Checkbox todoId={todo.id} done={todo.done} editTodoStatus={editTodoStatus} />
            <TodoText done={todo.done} text={todo.text} />
            {
                !todo.done &&
                <>
                    <TodoButton edit action={() => setEditMode(!editMode)} />
                    <TodoButton remove action={() => removeTodoWrapper()} />
                </>
            }
        </S.Container>
    )

}

export default TodoInfo;