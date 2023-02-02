import { useRef } from 'react';
import './style.css'

function NavbarComponent() {
    const overlay = useRef();
    const bars = useRef();
    const openBars = () => {
        overlay.current.style.display = 'block'
        bars.current.style.display = 'block'
        bars.current.style.transform = 'translateX(0%)'
        bars.current.style.animationName = 'navanimation'
    }
    const closeBars = () => {
        overlay.current.style.display = 'none'
        bars.current.style.animationName = 'navclose'
        bars.current.style.transform = 'translateX(100%)'
        bars.current.style.animationDuration = '1s'
    }
  return (
    <>
    <div className="NavbarComponent">
        <div className="container">
            <div className="NavBox">
                <img src="https://res.cloudinary.com/dccxaewos/image/upload/v1674659800/assets/LiveShop_gbuqte.png" alt="" />
                <input type="text" placeholder='Search...'/>
                <ul>
                    <li>About</li>
                    <li>Categories</li>
                    <li>Toogle</li>
                    <li><i className='fa-solid fa-cart-shopping'></i></li>
                </ul>
            </div>
        </div>
    </div>
    <div className="NavbarBras">
        <img src="https://res.cloudinary.com/dccxaewos/image/upload/v1674659800/assets/LiveShop_gbuqte.png" alt="" />
        <input type="text" placeholder='Search...'/>
        <i onClick={openBars} className='fa-solid fa-bars'></i>
    </div>
    <div className="NavBrows">
    <div ref={bars} className="NavbarBarser">
        <h5><i onClick={closeBars} className="fa-solid fa-xmark"></i> Menu</h5>
        <img src="https://res.cloudinary.com/dccxaewos/image/upload/v1674659810/assets/LiveShopWhite_c5vdlk.png" alt="" />
        <ul>
            <li>About</li>
            <li>Categories</li>
            <li>Toogle</li>
            <li><i className='fa-solid fa-cart-shopping'></i></li>
        </ul>
    </div>
    </div>
    <div onClick={closeBars} ref={overlay} className="Overlay"></div>
    </>
  );
}

export default NavbarComponent;