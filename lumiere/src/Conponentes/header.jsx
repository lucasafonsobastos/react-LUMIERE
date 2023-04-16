import logo from '../img/logo.png';
import home from '../img/ico/botao-de-inicio .png';
import mais from '../img/ico/mais-pequeno.png';
import buscar from '../img/ico/procurar.png';
import filme from '../img/ico/filme.png';
import serie from '../img/ico/tela.png';
import pontos from '../img/ico/tres-pontos.png'

import User from './User';

import '../stylesheets/header.css';

function Header() {
    return (
        <div className='app-header'>
            <div className='header-content-menu'>
                <img src={logo} className='app-Logo' alt='logo' />
                <div className='header-logo'>
                    <div className='tab-menu'>
                        <img src={pontos} className='ico-menu' alt='ico-pontos' />
                        <div className='header-content'>
                            <div className='itens-menu'>
                                <img src={home} className='app-ico' alt='ico-home' />
                                <span className='app-item-menu' >Início</span>
                            </div>
                            <div className='itens-menu'>
                                <img src={buscar} className='app-ico' alt='ico-buscar' />
                                <span className='app-item-menu' >Pesquisar</span>
                            </div>
                            <div className='itens-menu'>
                                <img src={mais} className='app-ico' alt='ico-main' />
                                <span className='app-item-menu' >Minha Lista</span>
                            </div>
                            <div className='itens-menu'>
                                <img src={filme} className='app-ico' alt='ico-filme' />
                                <span className='app-item-menu' >Filmes</span>
                            </div>
                            <div className='itens-menu'>
                                <img src={serie} className='app-ico' alt='ico-serie' />
                                <span className='app-item-menu' >Séries</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* abaixo esta o componente de login e do menu do usuario */}
                <div>
                    <User />
                </div>
            </div>
        </div>
    );
}
export default Header;