import React from 'react';

export const SidebarContext = React.createContext({
    isSidebarVisible: true,
    setSidebarVisibility: (isVisible: boolean) => {},
  });