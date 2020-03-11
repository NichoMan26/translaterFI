import React, {useState} from 'react'
import cls from  './Menu.module.css'
import MenuButton from './MenuButton/MenuButton'
import PopUp from '../Common/PopUp/PopUp'

const Menu = (props) => {

  const [isPopUp, setIsPopUp] = useState(false) // show popUp

  let [menuOpen, setMenuOpen] = useState(false)

  const onHandleFalse = () => {
    setIsPopUp(false)
  }

  const onHandleTrue = (page) => {
    setIsPopUp(false)
    props.setAppState(page)
    props.setScoreZero(0)
  }

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
    return(
      <div className={menuOpen ? `${cls.wrapper} ${cls.wrapper_active}` : cls.wrapper}>
        <MenuButton menuOpen={menuOpen}
                    isPopUp={isPopUp}
                    setIsPopUp={setIsPopUp}
                    isMobile={props.state.appData.isMobile}
                    score={props.state.appData.score}
                    setAppState={props.setAppState}
                    openMenu={openMenu}
                    closeMenu={closeMenu}/>      
        {isPopUp ? <PopUp text='If you continue, you will lost you result'
                          onHandleTrue={onHandleTrue}
                          onHandleFalse={onHandleFalse}
                          isMobile={props.state.appData.isMobile}
                          buttonTrue='Continue' 
                          buttonFalse='Cancel' />
        : null}        
      </div>
    )
}
export default Menu 