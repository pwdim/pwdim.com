import React from 'react';
    import * as S from '../../styles/globalStyles';
    import SmokeBackground from '/src/components/SmokeBackground';

    const AboutPage = () => {
        return (
            
            
            <S.Container>
                <SmokeBackground />
                <S.ProfileImage src='src/assets/logos/logobackground.png'/>
                <S.Username>@pwdim</S.Username>
                <S.AboutText>
                    Oi, eu sou o pwdim.
                </S.AboutText>
            </S.Container>
        );
    };

    export default AboutPage;