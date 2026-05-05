import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client/react";
import {gqlClient} from 'src/apollo'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={gqlClient}>
        <App />
        </ApolloProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
