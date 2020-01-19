import React from 'react';
import api from '../../services/api';

import './styles.css';

function DevItem({ dev }) {

    async function handleDelDev() {
        await api.delete(`/devs/${dev._id}`);

        if (
          window.confirm(
            `Voce tem certeza que deseja excluir o usuário ${dev.name}`
          )
        ) {
          try {
            window.location.reload();
          } catch {
            return;
          }
        }
      }

    return (
        <li key={dev._id} className="dev-item">
            <header>
            <img src={dev.avatar_url} alt={dev.name}/>
            <div className="user-info">
                <strong>{dev.name}</strong>
                <span>{dev.techs.join(', ')}</span>
            </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            <div className="user-func">
                <span className="user-apagar" onClick={handleDelDev}>Apagar</span>
                <span className="user-editar">Atualizar</span>
            </div>
        </li>
    );
}

export default DevItem;