import React,{useState} from 'react'
import "./navigation.css"


function Navigation(){
  const[burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const[menu_class, setMenuClass] = useState("menu hidden");
  const[isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if(!isMenuClicked){
       setBurgerClass("burger-bar clicked");
       setMenuClass("menu visible");
    }else
    setBurgerClass("burger-bar unclicked");
    setMenuClass("menu hidden");
  }
  return (
    <div style={{width:'100%', height: '100vh'}}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class} >
            <p>hello world</p>
          </div>
          <div className={burger_class} >
             <p>palisade</p> 
          </div>
          <div className={burger_class} >
           <p> octahedral</p>
          </div>
        </div>
      </nav>
      <div className={menu_class}></div>
    </div>
  )
}

export default Navigation