import React, { use } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const PostCard = () => {
  const videoRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:".post-card",
        start:"top center",
        end:"bottom center",
        scrub:true,
      }
    })
    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {currentTime: videoRef.current.duration, ease: "power1.inOut", duration: 3});
    }
  })
  return (
    <section className='post-card'>
      <div className='animated-gradient-bg'/>
        <div className='post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700'>
          <img src="/images/overlay.webp" alt="" />

          <video src="/videos/postcard-vd.mp4"
            ref={videoRef}
            muted
            playsInline
            preload='auto'
            autoPlay
            
          />

          <button className='group-hover:bg-yellow transition duration-700'>
            explore Leonida Keys
          </button>
        </div>
      
    </section>
  )
}

export default PostCard