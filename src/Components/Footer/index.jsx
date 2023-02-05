import './Footer.modules.css'; 
import instagram from './../../Img/footer/instagram.png';
import facebook from './../../Img/footer/facebook.png';
import youtube from './../../Img/footer/youtube.png';
import Elo from './../../Img/footer/buy1.png';
import Visa from './../../Img/footer/buy2.png';
import MasterCard from './../../Img/footer/buy3.png';
import Boleto from './../../Img/footer/buy4.png';
import HiperClub from './../../Img/footer/buy5.png';
import AmericanExpress from './../../Img/footer/buy6.png';
import letLogo from './../../Img/footer/let.png';
import econverse from './../../Img/footer/econverse.png';
import vtex from './../../Img/footer/vtex.png';
import { BiPhone } from 'react-icons/bi';

export function Footer() {
  return (
    <>
    <main>

      <section className="Footer">
         <article className='Social'>
            <h1>Nos siga nas nossas redes sociais</h1>
            <div className="Redes">
              <img src={facebook} alt='facebook'></img>
              <img src={instagram} alt='instagram'></img>
              <img src={youtube} alt='youtube'></img>
            </div>

            <h1>Sobre O Cãoselheiro</h1>
            <p>Seja muito bem-vindo! O Cãoselheiro - a loja - é a loja online de uma empresa que nasceu para contribuir para uma melhor qualidade de vida dos cães e seus 
            familiares humanos. Seus sócios são profissionais de educação canina que trabalham seguindo metodologias positivas de treinamento animal, encorajando e 
            recompensando os acertos de nossos amigos em seus processos de adestramento. 
            Aqui você encontrará apenas itens de qualidade comprovada e utilizados pessoalmente por seus idealizadores. Fique à vontade!</p>
          </article> 

          <section className='Information'>
            <article className='containerInformation'>
              <div>              
                <h1>Assinatura</h1>
                <h1>Parceiros</h1>
              </div>

              <div>              
                <h1>Institucional</h1>
                <p>Quem somos</p>
                <p>Política de privacidade</p>
                <p>Política comercial</p>
                <p>Política de devolução</p>
                <p>Regras de frete</p>
              </div>

              <div>              
                <h1>Atendimento</h1>
                <p>Fale conosco</p>
                <p><BiPhone size={20} className='Telefone' /> </p>
                <p className='textTelefone'>(11) 97212-1314</p>
                <p>ocaoselheiro@ocaoselheiro.com.br</p>
                <p>Trabalhe conosco</p>
              </div>
            </article>

            <section className='containerPayment'>
              <article>              
                <h1>Formas de pagamento</h1>
                <div className='Payment'>
                  <img src={Elo} alt='Elo'></img>
                  <img src={Visa} alt='Visa'></img>
                  <img src={MasterCard} alt='MasterCard'></img>
                  <img src={Boleto} alt='Boleto'></img>
                  <img src={HiperClub} alt='HiperClub'></img>
                  <img src={AmericanExpress} alt='AmericanExpress'></img>
                </div>
              </article>

              <div>              
                <h1>Segurança</h1>
                <img src={letLogo} alt='Let'></img>
              </div>
            </section>

            <article className='informationRights'>
              <div className='textRights'>
                <p>O Cãoselheiro Comércio LTDA</p>
                <p>CNPJ: 30.324.633/0001-16</p>
                <p>© Todos os direitos reservados. 2021</p>
              </div>

              <div>
                <img src={econverse} alt='Econverse'></img>
                <img src={vtex} alt='Vtex'></img>
              </div>
            </article>
          </section>         
      </section> 
    </main>      
    </>
  );
}