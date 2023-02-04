import { NavLink } from 'react-router-dom'

const Header = () => {

  const menu = ()=>{

    const close = document.getElementById("close");
    const nav = document.getElementsByClassName("navbar")[0];
    const navlinks = document.querySelectorAll(".nav-link");
    
    if (menu) {
        nav.classList.add('active');
        navlinks.forEach((element)=>{
          element.addEventListener('click',()=> {
            nav.classList.remove('active');
          });
        })
    }
    if (close) {
      close.addEventListener('click', () => {
        nav.classList.remove('active');
      })
    }
    
  }

  return (
    <header>
      <NavLink to="/"><img src="./img/logo.png" alt="logo" /></NavLink>
      <nav>
        <ul className="navbar">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
          <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
          <li className="bag"><NavLink to="/cart"><ion-icon class="cart-main" name="cart"></ion-icon></NavLink></li>
          <a id="close"><ion-icon name="close-outline"></ion-icon></a>
        </ul>
      </nav>
      <div id="mobile">
        <NavLink to="/cart"><ion-icon class="cart-main menu" name="cart"></ion-icon></NavLink>
        <ion-icon name="menu-outline" class="menu ham-menu" id="bar" onClick={menu} ></ion-icon>
      </div>
    </header>
  )
}

export default Header