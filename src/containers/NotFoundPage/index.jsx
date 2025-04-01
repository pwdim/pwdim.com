import React from 'react';
import * as S from './styles';
import NavigationBar from '../../components/nav';

const NotFoundPage = () => {
  return (
    <S.TvContainer>
      <S.TvScreen>
        <S.Static />
        <S.ErrorText>ERROR 404 Página Não Encontrada</S.ErrorText>
      </S.TvScreen>
      <S.TvStand />
    </S.TvContainer>
  );
};

export default NotFoundPage;