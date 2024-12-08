import Hero from "./pages/Hero"
import { useContext } from "react";
import ThemeContext from "./context/themeContext";

function App() {

  const {theme} = useContext(ThemeContext);
  return (
    <div className={`  ${theme ? `bg-black text-white` : `bg-white text-black`} `}>
        <Hero />
    </div>
  )
}

export default App
