import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { gsap } from 'gsap';  // Ensure you import GSAP
import Button from './Button';

const Story = () => {
  const frameRef = useRef(null);

  // Handle mouse leaving the image
  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: 'power1.inOut',
      });
    }
  };

  // Handle mouse movement over the image
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  return (
    <section id="story" className="min-h-screen w-screen bg-black text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">The Multiversal IP World</p>
        <div className="relative w-full">
          <AnimatedTitle 
            title="The st<b>o</b>ry of <br/> a hidden real<b>m</b>"
            sectionId="#story"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content rounded-xl">
                <img 
                  src="/img/entrance.webp"
                  alt="entrance"
                  className="object-contain "
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave} // Handle mouse leave
                  onMouseMove={handleMouseMove}   // Handle mouse move
                />
          </div>
        </div>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your fate amidst infinite
              opportunities.
            </p>
            <Button
              id="realm-btn"
              title="discover prologue"
              containerClass="mt-5"
            />
            </div>
          </div>    
      </div>
    </section>
  );
};

export default Story;
