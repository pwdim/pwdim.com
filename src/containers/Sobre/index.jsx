import React from 'react';
import {
    Container,
    ProfileImage,
    Username,
    Section,
    SectionTitle,
    Paragraph,
    
} from '../../styles/globalStyles'; 


const AboutPage = () => {
    return (
        
        <Container>
            

            
            <ProfileImage src='https://imgur.com/NcZvDQ1.png' alt="Avatar pwdim"/>
            <Username>@pwdim</Username>

            
            <Section>
                
                <Paragraph>
                    Oi, eu sou o pwdim! 👋 <br />
                    Criei este site como um painel de estatísticas para o servidor FlameMC, focado em fornecer informações detalhadas sobre jogadores e classificações.
                </Paragraph>
            </Section>

            
            <Section>
                <SectionTitle>O que você pode fazer aqui?</SectionTitle>
                <Paragraph>
                    Este painel permite que você:
                    
                    <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            🚀 Explorar as <strong>Leaderboards</strong> dos principais modos de jogo como Hardcore Games (HG), Competitive (CxC), FlameLeague (FL) e PvP Arena/FPS.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            📊 Ordenar os jogadores nas leaderboards por diferentes critérios, como <strong>XP (Posição Original), Vitórias, Abates e Mortes</strong>.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            🔍 Visualizar <strong>Perfis de Jogadores</strong> completos, incluindo informações da conta (rank, clã, status), histórico de login e estatísticas detalhadas para uma variedade de minigames.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            🎨 Alternar entre os temas <strong>claro e escuro</strong> para melhor visualização.
                        </li>
                    </ul>
                </Paragraph>
            </Section>

            
            <Section>
                 <Paragraph>
                    Espero que as informações sejam úteis para você! 😉
                </Paragraph>
            </Section>

        </Container>
    );
};

export default AboutPage;