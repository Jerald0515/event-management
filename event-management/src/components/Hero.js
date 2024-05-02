import React from 'react';

function Hero() {
  return (
    <div class="hero-section">
      <nav>
        <ul className='nav-flex'>
          <div className='logo-nav'>
            <img src='./logo.png' className='logo-img' />
          </div>
          <div className='links'>
            <li class="nav-link">Home</li>
            <li class="nav-link">About</li>
            <li class="nav-link">Contact</li>
          </div>

        </ul>
      </nav>
      <div class="hero-text">
        <h1 class="header-text text-[54px]">Diadem Event Managements</h1>
        <p className='hero-para'>Transforming your dreams into unforgettable experiences.</p>
      </div>
    </div>

  )
}

export default Hero