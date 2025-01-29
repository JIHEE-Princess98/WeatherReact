import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Provider} from "react-redux";
import {store} from "./store.js";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
)
