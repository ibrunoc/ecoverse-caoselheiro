import './Blog.modules.css'; 
import blog1 from './../../Img/blog/blog1.png'; 
import blog2 from './../../Img/blog/blog2.png'; 
import blog3 from './../../Img/blog/blog3.png'; 
import blog4 from './../../Img/blog/blog4.png'; 
import arrowLeft from './../../Img/arrows/arrowLeft.png'; 
import arrowRight from './../../Img/arrows/arrowRight.png';  

export function Blog() {
  return (
    <>
    <main>
    <section>
        <h1 className='titleCategory'>Confira o nosso Blog</h1>
        
        <article className='arrowBlog'>
          <div className='containerArrow'>            
            <img src={arrowLeft} alt='arrow left' /> 
            <img src={arrowRight} alt='arrow right' /> 
          </div>
        </article>

        <article className='blog'>
          <div> 
            <img src={blog1} alt='PhotoBlog' /> 
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
            <button className='btnBlog'>LER ARTIGO</button>
          </div>

          <div> 
            <img src={blog2} alt='PhotoBlog' /> 
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
            <button className='btnBlog'>LER ARTIGO</button>
          </div>

          <div> 
            <img src={blog3} alt='PhotoBlog' /> 
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
            <button className='btnBlog'>LER ARTIGO</button>
          </div>

          <div> 
            <img src={blog4} alt='PhotoBlog' /> 
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur elit adipiscing dignissim posuere vitae.</p>
            <button className='btnBlog'>LER ARTIGO</button>
          </div>
        </article>
      
        <article className='circleSlideBlog'>
          <span className='circleBlog'></span>
          <span className='circleBlog'></span>
          <span className='circleBlog'></span>
        </article> 
      </section> 
    </main>    
    </>
  );
}