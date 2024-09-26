import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"

import { Details } from './pages/Details'

import theme from "./styles/theme"

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Details/>
    </ThemeProvider>
)
