import logo from './logo.svg';
// import background from './background.jpeg'; // Už nie je potrebné importovať, ak ho CSS načíta priamo
import './App.css';
import Button from './components/Button'; // Uisti sa, že cesta k Button komponentu je správna
import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Geostride Logo" />
        <h1 className="App-title">GEOSTRIDE</h1>
        <div className="Navbar">
          <nav>
        <Button text="Log in" onClick={handleClick} variant="primary" cla/>
        <Button text="Sign up" onClick={handleClick} variant="secondary" />
          </nav>
        </div>
      </header>

      <main className="App-main">
        {/* App-hero sekcia teraz využíva CSS pre obrázok na pozadí */}
        <section className="App-hero">
          {/* Tento img tag sa už nepoužíva pre pozadie: 
          <img src={background} className="Section-background" alt="Scenic hiking or cycling trail" /> 
          */}
          <div className="Hero-content"> {/* Tento div obalí obsah na hero obrázku */}
            <h2 className="Section-title">Map It. Snap It. Share It. Adventure Together.</h2>
            <Button text="Discover Routes" onClick={handleClick} variant="primary" />
          </div>
        </section>

        <section className="App-content-area">
          <h2>About Geostride</h2>
          <p>Your new platform for discovering and sharing outdoor adventures. Explore detailed maps, track your progress, and connect with a community of fellow enthusiasts. Whether you're hiking, biking, or just exploring, Geostride is your companion for every journey.</p>
          <Button text="Learn More" onClick={handleClick} variant="secondary" />
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} GEOSTRIDE. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;