import './Brands.modules.css'; 
import marca1 from './../../Img/brands/marca1.png'; 
import marca2 from './../../Img/brands/marca2.png'; 
import marca3 from './../../Img/brands/marca3.png'; 
import arrowLeft from './../../Img/arrows/arrowLeft.png'; 
import arrowRight from './../../Img/arrows/arrowRight.png'; 

export function Brands() {
  return (
    <>
    <main>
      <section>
        <div className="containerTitle">
          <h1 className='titleCategory'>Principais Marcas</h1>
          <a href="#" className='linkBrands'>Ver todos</a>
        </div>

        <article className='arrowBrands'>
          <div className='containerArrow'>            
            <img src={arrowLeft} alt='seta left' /> 
            <img src={arrowRight} alt='seta right' /> 
          </div>
        </article>

        <article className='brands'>
          <div> <img src={marca1} className='buddy' alt='buddy' /> </div>

          <div> <img src={marca2} className='petgames' alt='petgames' /> </div>

          <div> <img src={marca3} className='kong' alt='kong' /> </div>

          <div> <img src={marca1} className='buddy' alt='buddy' /> </div>

          <div> <img src={marca2} className='petgames' alt='petgames' /> </div>

          <div> <img src={marca3} className='kong' alt='kong' /> </div>
        </article>

        <article className='partner'>         
          <article className='containerPartner'>          
            <div className='partnerRectangle'>
              <div className='background'>
                <h1>Parceiros</h1>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
                <button className='btnPartner'>CONFIRA</button>
              </div>
             
            </div>

            <div className='circlesSlidePartner'>
              <span className='circlesPartner'></span>
              <span className='circlesPartner'></span>
              <span className='circlesPartner'></span>
            </div>
          </article>

          <article className='signature'>
            <div className='signatureRectangle'>
              <h1>Assinatura
              Cãoselheiro</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor adipiscing quis non sed.</p>
              <button className='btnSignature'>SAIBA MAIS</button>
            </div>
          </article>          
        </article>  
      </section> 
    </main>      
    </>
  );
}