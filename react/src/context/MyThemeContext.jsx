import React, { createContext, useState, useContext } from 'react';

// Create a context object
export const MyThemeContext = createContext();

// Create a custom hook to access the context
export const useMyTheme = () => useContext(MyThemeContext);

// ThemeProvider component to wrap your application
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    background: '#800080', 
    foreground: '#ffff00' 
  });

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      background: prevTheme.background === '#ffffff' ? '#000000' : '#ffffff',
      foreground: prevTheme.foreground === '#000000' ? '#ffffff' : '#000000'
    }));
  };

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
};
