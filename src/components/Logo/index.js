import * as S from "./styles";
import logo from "../../assets/images/logo.svg";

const Logo = () => {
    return (
        <S.Container>
            <S.Image src={logo} alt='Logo' />
        </S.Container>
    )

}

export default Logo;