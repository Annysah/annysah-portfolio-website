import { useState } from "react";
import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config"

import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";

function MyApp({ Component, pageProps }) {
  const [ theme, setTheme ] = useState('light')

  const themeSwitcher = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const icon = theme === 'light' ? <BsMoon size={20} /> : <ImSun size={20} />

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout themes = {themeSwitcher} icon={icon}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
