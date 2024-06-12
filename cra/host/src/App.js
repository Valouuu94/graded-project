import React, { useState, useEffect } from 'react';
import GhoulCard from './GhoulCard';
import './App.css';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('shared/Header'));
const Footer = React.lazy(() => import('shared/Footer'));

const App = () => {
  const [ghouls, setGhouls] = useState([]);

  useEffect(() => {
    fetch('https://6669a7622e964a6dfed6092a.mockapi.io/api/tokyogoule/goules/goules')
      .then(response => response.json())
      .then(data => setGhouls(data))
      .catch(error => console.error('Error fetching ghouls:', error));
  }, []);

  const h1Style = {
    textAlign: 'center',
    fontFamily: '"Courier New", Courier, monospace',
    color: '#E50914', 
    textShadow: '2px 2px 4px #000', 
    margin: '20px 0',
  };

  return(
    <div>
      <React.Suspense fallback="Loading Header">
        <Header />
      </React.Suspense>

      <h1 style={h1Style}>Bienvenue sur le Host site de Tokyo Ghoul</h1>
      <h2>Avis de recherche des goules :</h2>
      <div className="ghoul-container">
        {ghouls.map(ghoul => (
          <GhoulCard
            key={ghoul.id}
            image={ghoul.image}
            name={ghoul.name}
            type={ghoul.rang}
            kagune={ghoul.pocheRc}
            description={ghoul.description}
          />
        ))}
      </div>
      <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense>
      <React.Suspense fallback="Loading Footer">
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default App;
