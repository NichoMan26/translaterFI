import React, {useState} from 'react'
import cls from  './Menu.module.css'
import MenuButton from './MenuButton/MenuButton'

const Menu = (props) => {

  let [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(true)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
    return(
      <div className={menuOpen ? `${cls.wrapper} ${cls.wrapper_active}` : cls.wrapper}>
        <MenuButton menuOpen={menuOpen}
                    setAppState={props.setAppState}
                    openMenu={openMenu}
                    closeMenu={closeMenu}/>
      </div>
    )
}
export default Menu 