import React from 'react';
import Button from '../../components/Button'; // Uisti sa, že cesta k Button komponentu je správna
import './WelcomePage.css'; // Uisti sa, že cesta k CSS súboru je správna

function WelcomePage() {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <>
            <section className='App-hero'>
                <div className='Hero-content'>
                    <h2 className='Section-title'>Map It. Snap It. Share It. Adventure Together.</h2>
                    <Button text='Discover Routes' onClick={handleClick} variant='primary' />
                </div>
            </section>

            <section className='App-content-area'>
                <h2>About Geostride</h2>
                <p>Your new platform for discovering and sharing outdoor adventures. Explore detailed maps, track your progress, and connect with a community of fellow enthusiasts. Whether you're hiking, biking, or just exploring, Geostride is your companion for every journey.</p>
                <Button text='Learn More' onClick={handleClick} variant='secondary' />
            </section>  
        </>
    );
}
export default WelcomePage;
        
    
        
