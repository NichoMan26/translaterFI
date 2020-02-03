import React from 'react'
import cls from  './MenuButton.module.css'
import MenuItem from '../MenuItem/MenuItem'


const MenuButton = (props) => {
    const burger = () => { // create layout for burger icon
        return <><span></span><span></span><span></span></>
    }
    const settings = () => { // create layout for settings icon
        return <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M22.28,11.75a2.54,2.54,0,0,0,.6-2.56,2.43,2.43,0,0,0-1.95-1.7l-4.44-.66a.47.47,0,0,1-.36-.27l-2-4.17A2.39,2.39,0,0,0,12,1h0A2.37,2.37,0,0,0,9.83,2.4l-2,4.18a.46.46,0,0,1-.36.27l-4.43.69a2.4,2.4,0,0,0-1.94,1.7,2.53,2.53,0,0,0,.61,2.56L5,15.05a.49.49,0,0,1,.14.43l-.75,4.6a2.53,2.53,0,0,0,1,2.44,2.3,2.3,0,0,0,1.4.48,2.4,2.4,0,0,0,1.13-.29l4-2.18a.45.45,0,0,1,.45,0l4,2.16a2.33,2.33,0,0,0,2.53-.2,2.55,2.55,0,0,0,1-2.45l-.77-4.59a.51.51,0,0,1,.13-.44Zm-4.56,1.83A2.58,2.58,0,0,0,17,15.79l.77,4.6a.48.48,0,0,1-.18.48.46.46,0,0,1-.5,0l-4-2.16a2.34,2.34,0,0,0-2.24,0l-4,2.18a.46.46,0,0,1-.5,0,.47.47,0,0,1-.19-.48L7,15.82a2.58,2.58,0,0,0-.69-2.21L3.08,10.36A.49.49,0,0,1,3,9.86a.48.48,0,0,1,.39-.34l4.43-.68A2.4,2.4,0,0,0,9.58,7.47l2-4.19A.46.46,0,0,1,12,3a.46.46,0,0,1,.43.27l2,4.18a2.43,2.43,0,0,0,1.81,1.36l4.44.66a.45.45,0,0,1,.38.33.48.48,0,0,1-.12.51Z"/>
            </svg>
    }
    const toggleMenu = () => {
        return props.menuOpen ? props.closeMenu() : props.openMenu()
    }
    return(
        <div className={cls.wrapper}>
            <ul className={cls.ul}>
                <MenuItem   handleEvent={toggleMenu}
                            text={'Close Menu'}
                            isMenu={true}
                            icon={burger()}
                            />
                <MenuItem   handleEvent={props.setAppState}
                            text={'Choose mode or words'}
                            eventValue={'start'}
                            icon={settings()}
                            />            
                <li className={cls.li}>
                    <span className={cls.menuText}>Main menu</span>
                    <span className={cls.menuButton}>M</span>
                </li>
                <li className={cls.li}>
                    <span className={cls.menuText}>Rulles</span>
                    <span className={cls.menuButton}>R</span>
                </li>
            </ul>
            {/* {props.isMobile
                ? <div onTouchStart={props.menuOpen ? props.closeMenu : props.openMenu} className={cls.button}>
                    <div className={cls.dote}></div>
                    <div className={cls.dote}></div>
                    <div className={cls.dote}></div>
                </div>
                : <div onClick={props.menuOpen ? props.closeMenu : props.openMenu} className={cls.button}>
                    <div className={cls.dote}></div>
                    <div className={cls.dote}></div>
                    <div className={cls.dote}></div>
                </div>}
             */}
        </div>
    )
}
export default MenuButton