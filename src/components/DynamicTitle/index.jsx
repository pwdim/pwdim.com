import { useEffect } from 'react';
import { useLocation, useMatch } from 'react-router-dom';
import Perfil from '../../containers/Perfil';

const DynamicTitle = () => {
  const location = useLocation();
  
  const perfilMatch = useMatch('/perfil/:nickname');

  useEffect(() => {
    let newTitle = 'pwdim.com';

    if (perfilMatch) {
      const nickname = perfilMatch.params.nickname;

      newTitle = nickname ? `Perfil de ${nickname}` : `Perfil`;
    } else {
      switch (true) {
        case location.pathname === '/':
          newTitle = 'Início';
          break;
        case location.pathname === '/legal/terms':
          newTitle = 'Termos de Serviço';
          break;
        case location.pathname === '/legal/privacy':
          newTitle = 'Política de Privacidade';
          break;
        case location.pathname === '/links':
          newTitle = 'Links';
          break;
        case location.pathname.startsWith('/leaderboard/'):
          newTitle = 'Leaderboard';
          break;
        case location.pathname.startsWith('/about'):
          newTitle = 'Sobre Mim';
          break;
        default:
          newTitle = 'Página não encontrada';
          break;
      }
    }

    document.title = newTitle;
  }, [location]);


  return null;
};

export default DynamicTitle;