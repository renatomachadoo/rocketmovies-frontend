import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./styles/global"

import { SignIn } from './pages/SignIn'

import theme from "./styles/theme"

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SignIn />
    </ThemeProvider>
)
