import React, { useState } from 'react';
import * as S from '../Links/styles';
import SmokeBackground from '/src/components/SmokeBackground';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import DiscordProfileDisplay from '../../components/DiscordProfileDisplay';
import {
    Container,
    Section,
    SectionTitle,
    Paragraph,
} from '../../styles/globalStyles';



const LinksPage = () => {
    const YOUR_DISCORD_ID = '386563422055170048';

    const linksData = [
        { name: 'Github', url: 'https://github.com/pwdim', icon: FaGithub },
        { name: 'Discord', url: 'https://dc.pwdim.com', icon: FaDiscord },
        { name: 'Email', url: '#copy-email', icon: MdEmail },
    ];

    const [copyMessage, setCopyMessage] = useState('');
    const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false);

    const handleEmailClick = (event) => {
        event.preventDefault();
        const email = 'contact@pwdim.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                setCopyMessage('Email copiado para a área de transferência!');
                setIsCopyMessageVisible(true);
                setTimeout(() => {
                    setIsCopyMessageVisible(false);
                    setCopyMessage('');
                }, 3000);
            })
            .catch(err => {
                console.error('Falha ao copiar o email: ', err);
                setCopyMessage('Não foi possível copiar o email.');
                setIsCopyMessageVisible(true);
                setTimeout(() => {
                    setIsCopyMessageVisible(false);
                    setCopyMessage('');
                }, 3000);
            });
    };

    return (
        <Container>
            <SmokeBackground />
            
            {isCopyMessageVisible && <S.CopyMessageTop>{copyMessage}</S.CopyMessageTop>}

            <S.LinksWrapper></S.LinksWrapper>
            <DiscordProfileDisplay userId={YOUR_DISCORD_ID} />

            

            <S.LinksWrapper>
                {linksData.map((link, index) => (
                    <S.StyledGlassContainer key={index}>
                        <S.Glass
                            href={link.url}
                            target={link.name !== 'Email' ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            onClick={link.name === 'Email' ? handleEmailClick : undefined}
                        >
                            <link.icon />
                        </S.Glass>
                    </S.StyledGlassContainer>
                ))}
            </S.LinksWrapper>
        </Container>
    );
};

export default LinksPage;