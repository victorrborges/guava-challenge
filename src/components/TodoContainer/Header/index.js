import * as S from "./styles";
import empty from "../../../assets/images/empty.svg"
import success from "../../../assets/images/success.svg";

const Header = ({ doneQty }) => {

    const text = doneQty === 0 ? 'Nenhuma tarefa criada ainda.' : 'Tudo pronto!';
    const image = doneQty === 0 ? empty : success;

    return (
        <S.Container>
            <S.Text> {text} </S.Text>
            <S.Image src={image} alt='Logo' />
        </S.Container>
    )

}

export default Header;