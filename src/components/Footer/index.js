import * as S from "./styles";

const Footer = () => {
    return (
        <S.Container>
            <S.MainText> 
                Um teste projetado pela 
                <S.Link href={'https://guava.software/'}> 
                    {' Guava '}
                </S.Link> 
            </S.MainText>
            <S.MinorText> 
                Ilustrações por 
                <S.Link href={'https://www.opendoodles.com/'}> 
                    {' Open Doodles '}
                </S.Link> 
                | Inter UI Font Family por 
                <S.Link href={'https://rsms.me/'}> 
                    {' Rasmus Andersson '}
                </S.Link> 
            </S.MinorText>
        </S.Container>
    )

}

export default Footer;