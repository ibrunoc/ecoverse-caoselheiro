import './Style/app.css'; 
import { HeaderComponent } from "./Components/HeaderComponent/index.jsx";
import { FrontCover } from "./Components/FrontCover/index.jsx";
import { Category } from "./Components/Category/index.jsx";
import { Dog } from "./Components/Dog/index.jsx";
import { Brands } from "./Components/Brands/index.jsx";
import { Blog } from "./Components/Blog/index.jsx";
import { Instagram } from './Components/Instagram/index.jsx';
import { Newsletter } from './Components/Newsletter/index.jsx';
import { Footer } from './Components/Footer/index.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function App() {
  return (
    <>   
      <HeaderComponent />
      <FrontCover />
      <Category />      
      <Dog />
      <Brands />      
      <Blog />     
      <Instagram />        
      <Newsletter />
      <Footer />        
    </>
  );
}
