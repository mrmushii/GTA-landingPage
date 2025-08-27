import React from 'react'
import ComingSoon from './ComingSoon'

const Hero = () => {
  return (
    <section className='hero-section'>
      <div className='size-full mask-wrapper'>
        <img src="/images/hero-bg.webp" className='scale-out' alt="" />
        <img src="/images/hero-text.webp" className='title-logo fade-out' alt="" />
        <img src="/images/watch-trailer.png" className='trailer-logo fade-out' alt="" />
        <div className='play-img fade-out'>
          <img src="/images/play.png" alt=" " className='w-7 ml-1' />
        </div>
      </div>
      <div>
        <img src="/images/big-hero-text.svg" alt="" />
      </div>
      <div className='fake-logo-wrapper'>
        <img src="/images/big-hero-text.svg" className='overlay-logo' alt="" />
      </div>
      <ComingSoon/>
    </section>
  )
}

export default Hero