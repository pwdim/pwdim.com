import React, { useState } from 'react';
    import * as S from '../../styles/globalStyles';
    import SmokeBackground from '/src/components/SmokeBackground';
    import { FaGithub } from 'react-icons/fa'; // Ícone do Github
    import { FiLink } from 'react-icons/fi';   // Ícone de Link (para Website)
    import { MdEmail } from 'react-icons/md';  // Ícone de Email
    // Remova esta linha: import NavigationBar from '../../components/nav';

    const LinksPage = () => {
        const linksData = [
            { name: 'Github', url: 'https://github.com/pwdim', icon: FaGithub },
            { name: 'Website', url: 'https://www.pwdim.com', icon: FiLink },
            { name: 'Email', url: '#copy-email', icon: MdEmail },
        // Adicione mais links conforme necessário
    ];

    const [copyMessage, setCopyMessage] = useState('');
    const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

    const handleEmailClick = (event) => {
        event.preventDefault();
        const email = 'contato@pwdim.com';
        navigator.clipboard.writeText(email)
        .then(() => {
            setCopyMessage('Email copiado para a área de transferência!');
            setIsCopyMessageVisible(true);
            setTimeout(() => {
                setIsCopyMessageVisible(false);
                setCopyMessage('');
            }, 10000); // 10000 milliseconds = 10 seconds
        })
        .catch(err => {
            console.error('Falha ao copiar o email: ', err);
            setCopyMessage('Não foi possível copiar o email.');
            setIsCopyMessageVisible(true);
            setTimeout(() => {
                setIsCopyMessageVisible(false);
                setCopyMessage('');
            }, 10000);
        });
    };

    return (
        
        
        <S.Container>
        {/* Remova esta linha: <NavigationBar /> */}
        <SmokeBackground />
        {isCopyMessageVisible && <S.CopyMessageTop>{copyMessage}</S.CopyMessageTop>}
        <S.ProfileImage src='src/assets/logos/logobackground.png'/>
        <S.Username>@pwdim</S.Username>
        <S.LinksWrapper>
            {linksData.map((link, index) => (
            <S.GlassContainer key={index}>
                <S.Glass
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-text={link.name}
                style={{ '--r': (index - Math.floor(linksData.length / 2)) * 15 + 'deg' }}
                onClick={link.name === 'Email' ? handleEmailClick : undefined}
                >
                <link.icon /> {/* Renderiza o ícone aqui */}
                </S.Glass>
            </S.GlassContainer>
            ))}
        </S.LinksWrapper>
        </S.Container>
    );
    };

    export default LinksPage;