import * as S from "./styles";

const TodoText = ({ text }) => {

    return (

        <S.Container>
            <S.Text> {text} </S.Text>
        </S.Container>

    )

}

export default TodoText;