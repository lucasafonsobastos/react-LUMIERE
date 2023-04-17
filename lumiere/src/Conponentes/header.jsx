import logo from '../img/Logo.jpg';
import home from '../img/ico/botao-de-inicio .png';
import mais from '../img/ico/mais-pequeno.png';
import buscar from '../img/ico/procurar.png';
import filme from '../img/ico/filme.png';
import serie from '../img/ico/tela.png';

import '../stylesheets/header.css';

function Header() {
     return (
         <div className='app-header'>
             <div className='header-content'>
                 <img src={logo} className='app-Logo' alt='logo' />
                 <div className='itens-menu'>
                     <img src={home} className='app-ico' alt='ico-home' />
                     <span>Início</span>
                 </div>
                 <div className='itens-menu'>
                     <img src={buscar} className='app-ico' alt='ico-home' />
                     <span>Pesquisar</span>
                 </div>
                 <div className='itens-menu'>
                     <img src={mais} className='app-ico' alt='ico-home' />
                     <span>Minha Lista</span>
                 </div>
                 <div className='itens-menu'>
                     <img src={filme} className='app-ico' alt='ico-home' />
                     <span>Filmes</span>
                 </div>
                 <div className='itens-menu'>
                     <img src={serie} className='app-ico' alt='ico-home' />
                     <span>Séries</span>
                 </div>
             </div>
             {/* abaixo esta o componente de login e do menu do usuario */}
             <div>
                 <div>
                     <span> Usuário </span>
                 </div>
             </div>
         </div>
     )
}

export default Header;