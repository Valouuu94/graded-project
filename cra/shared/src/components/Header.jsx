import React from 'react';

const Header = () => {
    const headerStyle = {
        backgroundImage: 'url("https://steamuserimages-a.akamaihd.net/ugc/776155680302750635/190CE4C6954A35BD33671BB37259F3D1D67700B8/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        height: '200px',
    };

    return (
        <header style={headerStyle}>
            <h1>OSHIETE OSHIETE O SONO SHIKU MI WO</h1>
        </header>
    );
};

export default Header;
