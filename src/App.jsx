import React from 'react';
import CryptoDashboard from './components/Dashboard/CryptoDashboard';
import Container from './components/Layout/Container';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <CryptoDashboard />
      </Container>
    </div>
  );
}

export default App;
