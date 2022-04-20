import React from 'react'
// import FontSizeChanger from 'react-font-size-changer'

function Header () {
  return (
    <header
      id='home'
      className='header valign bg-img parallaxie'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 text-center caption'>
            <h1 className='animate-box' data-animate-effect='fadeInUp' style={{'fontSize': '90px'}}>
              Katherine & Walther
            </h1>
            <h5 className='animate-box' data-animate-effect='fadeInUp'>
              17 de Setiembre, 2022 – Lima, Peru
            </h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='arrow bounce text-center'>
              <a href='#couple'>
                {' '}
                <i className='ti-heart'></i>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
