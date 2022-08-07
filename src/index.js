import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/user-context';
import { QueryClient, QueryClientProvider } from 'react-query';
const client = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <QueryClientProvider client={client}>
        <Router>
          <App />
        </Router>
      </QueryClientProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
