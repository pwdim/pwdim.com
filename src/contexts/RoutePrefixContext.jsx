import React, { createContext, useState } from 'react';

export const RoutePrefixContext = createContext();

export const RoutePrefixProvider = ({ children }) => {
  const [profileRoutePrefix, setProfileRoutePrefix] = useState('perfil'); 

  return (
    <RoutePrefixContext.Provider value={{ profileRoutePrefix, setProfileRoutePrefix }}>
      {children}
    </RoutePrefixContext.Provider>
  );
};