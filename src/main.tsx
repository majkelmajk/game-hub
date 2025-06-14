import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from './theme'
import './index.css'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {RouterProvider} from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();

// noinspection JSVoidFunctionReturnValueUsed
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {
            localStorage.getItem('chakra-ui-color-mode')
                ? <></>
                : <>{localStorage.setItem('chakra-ui-color-mode', 'dark')}</>
        }
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <RouterProvider router={router} />
                <ReactQueryDevtools/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
