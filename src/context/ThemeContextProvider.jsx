import ThemeContext from './themeContext'
import { useState } from 'react'
const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );

}

export default ThemeContextProvider