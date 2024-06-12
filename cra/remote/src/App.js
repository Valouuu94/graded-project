import React from 'react';
import LocalButton from './Button';

const Header = React.lazy(() => import('shared/Header'));
const Footer = React.lazy(() => import('shared/Footer'));

const App = () => {
  const h1Style = {
    textAlign: 'center',
    fontFamily: '"Courier New", Courier, monospace',
    color: '#E50914', 
    textShadow: '2px 2px 4px #000', 
    margin: '20px 0',
  };

  return (
    <div>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>
      <h1 style={h1Style}>Bienvenue sur le Remote site de Tokyo Ghoul</h1>
      <LocalButton />
      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;
