import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import App from './App'
import theme from './theme'
import './index.css'

// noinspection JSVoidFunctionReturnValueUsed
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {
            localStorage.getItem('chakra-ui-color-mode')
                ? <></>
                :<>{localStorage.setItem('chakra-ui-color-mode', 'dark')}</>
        }
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
