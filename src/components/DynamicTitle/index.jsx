import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let newTitle = 'pwdim.com';

    switch (true) {
      case location.pathname === '/':
        newTitle = 'pwdim.com - Início';
        break;
      case location.pathname.startsWith('/perfil/'):
        newTitle = 'pwdim.com - Perfil';
        break;
      case location.pathname === '/legal/terms':
        newTitle = 'pwdim.com - Termos de Serviço';
        break;
      case location.pathname === '/legal/privacy':
        newTitle = 'pwdim.com - Política de Privacidade';
        break;
      case location.pathname === '/links':
        newTitle = 'pwdim.com - Links';
        break;
      case location.pathname.startsWith('/leaderboard/'):
        newTitle = 'pwdim.com - Leaderboard';
        break;
      case location.pathname.startsWith('/contact'):
        newTitle = 'pwdim.com - Contato';
        break;
      default:
        newTitle = 'Página não encontrada';
        break;
    }

    document.title = newTitle;
  }, [location]);


  return null;
};

export default DynamicTitle;