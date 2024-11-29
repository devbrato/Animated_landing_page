import React, { useEffect, useRef,useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import Button from "./Button"
import { useWindowScroll } from 'react-use'
import gsap from 'gsap'


const Navbar = () => {

    const navItems=['Nexus','Vault','Prolouge','About','Contact'];

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)

    const [LastScroolY, setLastScroolY] = useState(0);
    const [IsVisible, setIsVisible] = useState(true)

    const audioElementRef=useRef(null)
    const navContainerRef=useRef(null)

    const toggleAudioindicator=(()=>{
    setIsAudioPlaying((prev)=>!prev);
    setIsIndicatorActive((prev)=>!prev);
    })

    const {y: currentScrollY}=useWindowScroll();


    useEffect(()=>{
        if (currentScrollY ===0) {
            setIsVisible(true);
            navContainerRef.current.classList.remove('floating-nav');
        }else if(currentScrollY > LastScroolY){
            setIsVisible(false);
            navContainerRef.current.classList.add('floating-nav')
        }else if(currentScrollY < LastScroolY){
            setIsVisible(true);
            navContainerRef.current.classList.add('floating-nav');
        }
        setLastScroolY(currentScrollY);
    },[currentScrollY,LastScroolY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
          y: IsVisible ? 0 : -100,
          opacity: IsVisible ? 1 : 0,
          duration: 0.2,
        });
      }, [IsVisible]);


    useEffect(()=>{
        if (isAudioPlaying) {
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause();
        }
    })

  return (
    <div className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:insert-x-6'
     ref={navContainerRef}>
<header className='absolute top-1/2 w-full -translate-y-1/2'>
<nav className='flex size-full items-center justify-between p-4'>
<div className="flex items-center gap-7">
    <img src="/img/logo.png" 
    alt="logo" />
    <Button
    id="product-button"
    title="Products"
    rightIcon={<TiLocationArrow/>}
    containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
    />
</div>
<div className="flex h-full items-center">
<div className="hidden md:block">
    {navItems.map((item)=>(
        <a key={item} className='nav-hover-btn font-black'>
            {item}
        </a>
    ))}
</div>

<button className='ml-10 flex items-center'
onClick={toggleAudioindicator}>

    <audio
     src="/audio/loop.mp3"
    loop
    className='hidden'
    ref={audioElementRef}/>
        {[1,2,3,4].map((bar)=>(
            <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active' : ""}`} style={{animationDelay: `${bar*0.1}s`,
                marginRight: '5px',
                width: '2px',
                height: '10px', 
            }}/>                
        ))}
</button>
</div>
</nav>
</header>

    </div>
  )
}

export default Navbar