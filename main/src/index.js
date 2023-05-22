import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

import Login from './components/pages/LoginandSignup/Login';
import { FavContextProvider } from './components/API/FavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <FavContextProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* <Login> */}
        <App />
        {/* </Login> */}
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </FavContextProvider>
);
reportWebVitals();
