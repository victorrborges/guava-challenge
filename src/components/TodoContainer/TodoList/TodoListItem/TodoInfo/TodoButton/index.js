import * as S from "./styles";

const TodoButton = ({ edit, remove, action }) => {
    return (
        <S.Container>
            <S.Oval edit={edit} remove={remove} onClick={action} />
        </S.Container>
    )

}

export default TodoButton;