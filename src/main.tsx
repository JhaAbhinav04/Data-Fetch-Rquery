import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// wrap app in query client provider
const queryCLient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCLient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
