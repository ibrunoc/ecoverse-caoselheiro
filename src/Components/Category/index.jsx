import './Category.modules.css'; 
import dog1 from './../../Img/category/dog1.png'; 
import dog2 from './../../Img/category/dog2.png'; 
import dog3 from './../../Img/category/dog3.png'; 
import dog4 from './../../Img/category/dog4.png'; 
import arrowLeft from './../../Img/arrows/arrowLeft.png'; 
import arrowRight from './../../Img/arrows/arrowRight.png'; 

export function Category() {
  return (
    <>
    <main>
      <section>
        <h1 className='titleCategory'>Categorias</h1>

        <article className='arrowCategory'>
          <div className='containerArrow'>            
            <img src={arrowLeft} alt='arrow left' /> 
            <img src={arrowRight} alt='arrow right' /> 
          </div>
        </article>

        <article className='dogs'>
          <div> 
            <img src={dog1} alt='PhotoDog' /> 
            <p>Brinquedos</p>
          </div>

          <div> 
            <img src={dog2} alt='PhotoDog' /> 
            <p>Petiscos</p>
          </div>

          <div> 
            <img src={dog3} alt='PhotoDog' /> 
            <p>Guias</p>
          </div>

          <div> 
            <img src={dog4} alt='PhotoDog' /> 
            <p>Higiene</p>
          </div>
        </article>
      </section> 
    </main>      
    </>
  );
}