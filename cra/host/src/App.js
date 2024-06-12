import React from 'react';

const RemoteButton = React.lazy(() => import('remote/Button'));
const Header = React.lazy(() => import('shared/Header'));
const Footer = React.lazy(() => import('shared/Footer'));

const App = () => (
  <div>
    <React.Suspense fallback="Loading Header">
      <Header />
    </React.Suspense>

    <h1>Basic Host-Remote</h1>
    <h2>Host</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <React.Suspense fallback="Loading Footer">
      <Footer />
    </React.Suspense>
  </div>
);

export default App;
