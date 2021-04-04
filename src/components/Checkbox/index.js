import * as S from "./styles";

const Checkbox = ({ todoId, done, editTodoStatus }) => {
    return (
        <S.Container>
            <S.Checkbox added={todoId} done={done} onClick={() => editTodoStatus? editTodoStatus(todoId, !done) : undefined} />
        </S.Container>
    )

}

export default Checkbox;