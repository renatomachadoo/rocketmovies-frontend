import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"

import { New } from './pages/New'

import theme from "./styles/theme"

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New/>
    </ThemeProvider>
)
