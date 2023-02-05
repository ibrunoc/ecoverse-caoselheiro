import './FrontCover.modules.css'; 
import capa from './../../Img/photos/Capa.png'; 
import arrowRight from './../../Img/arrows/arrowL.png'; 
import arrowLeft from './../../Img/arrows/arrowR.png'; 
import arrowBottom from './../../Img/arrows/arrowBotton.png'; 

export function FrontCover() {
  return (
    <>
    <main>
      <section>
        <img src={capa} alt='frontCover' className='frontCover'/>

        <article className='arrowFrontCover'>
          <div className='containerArrow'>
            <img src={arrowRight} alt='arrow right' /> 
            <img src={arrowLeft} alt='arrow left' /> 
          </div>
        </article>

        <article className='infoFrontCover'>                
          <h1 className='titleFrontCover'>As melhores guias para os melhores passeios.</h1>
          <button className='btnFrontCover'>CONFIRA</button>
        </article>

        <article className='circlesSlideFrontCover'>
          <span className='circleFrontCover'></span>
          <span className='circleFrontCover'></span>
          <span className='circleFrontCover'></span>
        </article>

        <div className='containerArrowBottom'>          
          <img src={arrowBottom} className='circleBottom' alt='arrowBottom' />
        </div>
      </section> 
    </main>      
    </>
  );
}