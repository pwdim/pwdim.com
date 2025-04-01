import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    let newTitle = 'pwdim.com'; // Título padrão

    // Defina os títulos com base no caminho da rota
    switch (location.pathname) {
      case '/':
        newTitle = 'pwdim.com - Início';
        break;
      case '/perfil/*':
        newTitle = 'pwdim.com - Perfil'; // Ou personalize com o nickname se necessário
        break;
      case '/legal/terms':
        newTitle = 'pwdim.com - Termos de Serviço';
        break;
      case '/legal/privacy':
        newTitle = 'pwdim.com - Política de Privacidade';
        break;
      case '/links':
        newTitle = 'pwdim.com - Links';
        break;
      default: // Para qualquer outra rota que não corresponda (incluindo a NotFoundPage)
        newTitle = 'Página não encontrada';
        break;
    }

    document.title = newTitle;
  }, [location]);

  // Este componente não renderiza nada visualmente
  return null;
};

export default DynamicTitle;