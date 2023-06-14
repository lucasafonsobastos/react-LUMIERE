import user from '../img/ico/usuario.png';

import '../stylesheets/user.css';

function User (){
    return (
        <div className='content-user'>
            <div className='div-content-user'>
                <div className='content-username'>
                    <span className='iten-user nome' > Usuário </span>
                    <img src={user} className='ico-user' alt='ico-user'/>
                </div>
                <div>
                    <div className='decorar-linha'></div>
                    <div className='user-menu'>
                        <span className='iten-user'>Editar</span>
                        <span className='iten-user'>Configuração</span>
                        <span className='iten-user'>Conta</span>
                        <span className='iten-user'>Ajuda</span>
                        <span className='iten-user'>Sair</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;