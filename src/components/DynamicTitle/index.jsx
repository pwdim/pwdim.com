import { useEffect } from 'react';
import { useLocation, useMatch } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let newTitle = 'pwdim.com';

    if (location != null) {
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
        case location.pathname.startsWith('/about'):
          newTitle = 'Sobre Mim';
          break;
        case location.pathname.startsWith('/'):
          newTitle = 'pwdim.com';
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