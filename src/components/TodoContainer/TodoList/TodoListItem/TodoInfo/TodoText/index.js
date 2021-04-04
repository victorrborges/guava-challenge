import * as S from "./styles";

const TodoText = ({ done, text }) => {

    return (

        <S.Container>
            <S.Text done={done}> {text} </S.Text>
        </S.Container>

    )

}

export default TodoText;