import './Header.modules.css'; 
import ShieldCheck from './../../Img/icons/ShieldCheck.png'; 
import Truck from './../../Img/icons/Truck.png'; 
import CreditCard from './../../Img/icons/CreditCard.png'; 
import logo from './../../Img/brands/logo.png'; 
import Group from './../../Img/icons/Group.png'; 
import Heart from './../../Img/icons/Heart.png'; 
import UserCircle from './../../Img/icons/UserCircle.png'; 
import ShoppingCart from './../../Img/icons/ShoppingCart.png'; 
import CrownSimple from './../../Img/icons/CrownSimple.png'; 

export function HeaderComponent() {
  return (
    <>
    <main>
    <section className="HeaderComponent">
        <article className='InfoHeader'>
          <div className='ContainerInfoHeader'>
            <img src={ShieldCheck} className='Shield' alt='ShieldCheck'/>
            <h1>Compra <span className='headerSpan'>100% segura</span></h1>
          </div>

          <div className='ContainerInfoHeader'>
            <img src={Truck} className='Truck' alt='Truck'/>
            <h1><span>Frete grátis</span> acima de R$ 200</h1>
          </div>
          
          <div className='ContainerInfoHeader'>
            <img src={CreditCard} className='Card' alt='CreditCard'/>
            <h1><span>Parcele</span> suas compras</h1>
          </div>
        </article>  

        <article className='Header'>
          <div className='logo'>          
            <img src={logo} alt='logo'/>
          </div>

          <div className="bar">
            <input type="text" className="search" placeholder="O que você está buscando?"></input>
          </div>

          <div className="User">
            <img src={Group} className='Group' alt='Group'/>
            <img src={Heart} className='Heart' alt='Heart'/>
            <img src={UserCircle} className='UserCircle' alt='UserCircle'/>
            <img src={ShoppingCart} className='ShoppingCart' alt='ShoppingCart'/>
          </div>
        </article>

        <article className='Links'>
          <nav>
            <ul>
              <li><a href="#">Brincar</a></li>
              <li><a href="#">Morder</a></li>
              <li><a href="#">Comer</a></li>
              <li><a href="#">PASSEAR</a></li>
              <li><a href="#">Casa e Conforto</a></li>
              <li><a href="#">Educação</a></li>
              <li><a href="#"><span>OFERTAS</span></a></li>
              <li><img src={CrownSimple} alt='CrownSimple' /><a href="#">Coleção de Outono</a></li>
            </ul>
          </nav>
        </article>
      </section>  
    </main>
    </>
  );
}