// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';


// gsap.registerPlugin(ScrollTrigger);

// const AnimatedTitle = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "100 bottom",
//           end: "center bottom",
//           toggleActions: "play none none reverse",
//         },
//       });

//       tl.fromTo(
//         '.animated-word',
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
//           ease: "power2.inOut",
//           stagger: 0.02,
//         }
//       );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const containerStyle = {
//     marginTop: '2rem',
//     textAlign: 'center',
//     display: 'block',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     textTransform: 'uppercase',
//   };

//   const wordStyle = {
//     opacity: 0,
//     transform: 'translateY(50px)',
//     margin:"20px",
//     fontSize:"80px"
//   };

//   return (
//     <div ref={containerRef} style={containerStyle}>
//       <span className="animated-word" style={wordStyle}>discover</span>
//       <span className="animated-word" style={wordStyle}>the</span>
//       <span className="animated-word" style={wordStyle}>world's</span>
//       <br/>
//       <span className="animated-word" style={wordStyle}>largest</span>
//       <span className="animated-word" style={wordStyle}>shared</span>
//       <br/>
//       <span className="animated-word" style={wordStyle}>adventure</span>
//     </div>
//   );
// };

// export default AnimatedTitle;


import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {title.split("<br />").map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
