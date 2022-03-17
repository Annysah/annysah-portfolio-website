import { useState } from "react";
import { ThemeProvider } from "styled-components"
import Layout from "../components/Layout"
import { GlobalStyles, lightTheme, darkTheme } from "../styles/theme.config"

function MyApp({ Component, pageProps }) {
  const [ theme, setTheme ] = useState('light')

  const themeSwitcher = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Layout themes = {themeSwitcher} >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
