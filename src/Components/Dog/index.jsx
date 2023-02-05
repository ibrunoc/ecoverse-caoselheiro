import './Dog.modules.css'; 
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import arrowLeft from './../../Img/arrows/arrowLeft.png'; 
import arrowRight from './../../Img/arrows/arrowRight.png'; 
import Heart from './../../Img/icons/Heart.png'; 
import Product from './../../Img/product.png'; 
import Close from './../../Img/icons/close.png'; 
import Modal from 'react-modal';
import UINumber from './../../Js/UINumber';

export function Dog() {
  const [ modalIsOpen, setIsOpen ] = useState(false)

  function handleOpenModal() { setIsOpen(true); }

  function handleCloseModal() { setIsOpen(false); }

  const [products, setProducts] = useState([])
    useEffect(()=>{
      axios.get('https://app.econverse.com.br/teste-front-end/junior/caoselheiro/lista-produtos/produtos.json')
      .then(function ({data}) {
        setProducts(data.products);
      })
  }, []); 

  const [productPreview, setProductPreview] = useState([])

  function ModalProduto(previewIndex) {
    setProductPreview(products.filter((products, index) => index === previewIndex))
  }

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
    
  return (
    <>
    <main>
      <section>
        <article className='CategoryDog'>
          <h1 className='titleCategory'>Meu cachorro...</h1>

          <div className='containerCategoryDog'>
            <p>&#8249;</p> 
            <button className='btnCategory select'>É AGITADO</button>
            <button className='btnCategory'>MORDE</button>
            <button className='btnCategory'>LATE MUITO</button>
            <button className='btnCategory'>É ANSIOSO</button> 
            <button className='btnCategory'>É ESTRESSADO</button> 
            <p>&#8250;</p> 
          </div>         
        </article>

        <div className="arrowDogs">
            <div className='containerArrow'>
              <button onClick={handleLeftClick}>
                <img src={arrowLeft} alt='' className="scrollLeft" />
              </button>
              <button onClick={handleRightClick}>
                <img src={arrowRight} alt='' className="scrollRight" />
              </button>
            </div>
        </div>       

        <article className='dogs'>
          <div className='containerDogs'>
            <div className="carousel" ref={carousel}>
            {products.map((products,index) =>{
              return(
                  <article className='Product' onClick={() => ModalProduto(index)}> 
                    <div className='imageContainerProduct'>
                      <h5>40% OFF</h5>
                      <img src={Heart} alt='Heart' />
                    </div>

                    <button className='btnModal' onClick={handleOpenModal}>
                      <div className='imgProduct'>
                        <img src={Product} alt="Product" />
                      </div>

                      <h1 className='nameProduct'>{products.productName}</h1>
                    </button>                   

                    <p className='PriceOld'>De R$ 96,69</p>
                    <h3 id='price' className='Price'><span className='porPrice'>por</span> <UINumber format="">{products.price}</UINumber></h3>
                    <h4 className='PricePlus'>R$ 85,69</h4>
                    <h4>Para assinantes</h4>
                    <button>ADICIONAR</button>
                  </article>                  
                )
              }
            )}
            </div>
          </div>
        </article>

        <Modal className='modal' isOpen={modalIsOpen} onRequestClose={handleCloseModal} style={{overlay: {zIndex: 1000,}}}>         
           {productPreview.map((productPreview,index) =>{
              return(
                <article className='modalContainer'>   
                  <button className='Close' onClick={handleCloseModal}><img src={Close}></img></button>                 
                  <div className='imgProductModal'>
                    <img src={Product} alt="Product" />
                  </div>

                  <div className='infoProductModal'>
                    <h1 className='nameProductModal'>{productPreview.productName}</h1>     
                    <h3 id='price' className='PriceModal'><UINumber format="">{productPreview.price}</UINumber></h3>     
                    <p className='Description'>{productPreview.descriptionShort}</p>
                    <a href='#' className='linkModal'>Veja mais detalhes do produto</a>
                  </div>                  
                </article>
              )
            }
          )}                    
        </Modal>
      
        <a href="#" className='seeAll'>Ver todos</a>        

        <article className='circlesSlidesDog'>
          <span className='circleDog'></span>
          <span className='circleDog'></span>
          <span className='circleDog'></span>
        </article>               
      </section> 
    </main>    
    </>
  );
}