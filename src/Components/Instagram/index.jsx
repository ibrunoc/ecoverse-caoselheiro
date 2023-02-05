import './Instagram.modules.css'; 
import photo1 from './../../Img/instagram/photoInstagram.png'; 
import photo2 from './../../Img/instagram/photoInstagram2.png'; 
import photo3 from './../../Img/instagram/photoInstagram3.png';

export function Instagram() {
  return (
    <>
    <main>

      <section>
        <div className="containerTitle">
          <h1 className='titleCategory'>Instagram</h1>
          <a href="#" className='linkInstagram'>+Seguir</a>
        </div>

        <article className='photos'>
          <div> <img src={photo1} alt='Photo Instagram' />  </div>

          <div> <img src={photo2} alt='Photo Instagram' />  </div>

          <div> <img src={photo3} alt='Photo Instagram' />  </div>

          <div> <img src={photo1} alt='Photo Instagram' />  </div>

          <div> <img src={photo2} alt='Photo Instagram' />  </div>

          <div> <img src={photo3} alt='Photo Instagram' />  </div>
        </article>
      </section> 
    </main>      
    </>
  );
}