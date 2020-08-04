import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/55895943?s=400&u=fe2fe9a33f353f6a955cc8354360580628dd2967&v=4" alt="Vitor Rafael" />
        <div>
          <strong>Vitor Rafael</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Jogador de videogames
            <br /><br />
            Gostaria de te vender umas aulas privadas sobre assuntos diversos
          </p>

      <footer>
        <p>
          Preço/hora:
              <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>

      </footer>
    </article>
  );
}

export default TeacherItem;