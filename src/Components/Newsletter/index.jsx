import './Newsletter.modules.css'; 
import dog from './../../Img/photos/dogNewsletter.png'; 

export function Newsletter() {
  return (
    <>
    <main>
      <section className="sectionNewsletter">        
        <article className='photoDog'>          
          <img src={dog} alt='Dog' /> 
          <div className='containerNewsletter'>
            <h1>Se inscreva para receber novidades e promoções</h1>
            <input type="text" className="name" placeholder="Digite seu nome"></input>
            <input type="email" className="email" placeholder="Digite seu e-mail"></input>
            <button className="btnNewNewsletter">ENVIAR</button>
          </div>
        </article>
      </section> 
    </main>      
    </>
  );
}