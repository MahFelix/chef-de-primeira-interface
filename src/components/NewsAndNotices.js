// src/components/NovidadesAvisos.js
import styled from 'styled-components';
import BGNOV from '../assets/bg-cronograma-3.png';
import BGNOVMOBILE from '../assets/bg-cronograma-3mobile.jpg';  // Adicione sua imagem de fundo para o mobile

const NovidadesContainer = styled.section`
  background-color: #fff;
  padding: 7rem;
  display: flex;
  align-items: center;
  background-image: url(${BGNOV});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    background-image: url(${BGNOVMOBILE}); /* Imagem de fundo para mobile */
    background-size: cover;
    background-position: center;
    padding: 3rem 2rem; /* Reduz o padding em dispositivos móveis */
    flex-direction: column; /* Organiza os itens em coluna no mobile */
    text-align: left; /* Ajusta o alinhamento para a esquerda no mobile */
    justify-content: center; /* Centraliza o conteúdo */
  }
`;

const TextContent = styled.div`
 align-items: flex-start;
  width: 50%;
  padding-right: 2rem; /* Espaçamento extra para separação do texto da imagem */

  @media (max-width: 768px) {
    width:110%; /* Ajusta a largura do content container para 70% no mobile */
  }

  h2 {
    font-size: 2.5rem;
    color: #938B80;
    width: 100%; /* Ajusta o título para ocupar 100% da largura disponível */
    

    .highlight {
      color: #ef952b;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem; /* Reduz o tamanho da fonte no mobile */
      text-align: left; /* Alinha o título à esquerda no mobile */
    }
  }

  p {
    width: 100%; /* Faz o parágrafo ocupar toda a largura disponível */
    font-size: 1.1rem;
    color: #938B80;
    margin: 1.5rem 0;
    text-align: left; /* Garante que o texto comece da esquerda */

    @media (max-width: 768px) {
      font-size: 1rem; /* Reduz o tamanho da fonte no mobile */
      margin: 1rem 0; /* Reduz o espaço entre o parágrafo e outros elementos */
    }
  }

  button {
    background-color: #A1C655;
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    margin-top: 1.5rem; /* Adiciona margem superior ao botão */

    @media (max-width: 768px) {
      width: 100%; /* Ajusta o botão para ocupar toda a largura no mobile */
      padding: 0.8rem 1.5rem; /* Ajusta o tamanho do botão */
      font-size: 1rem; /* Reduz o tamanho da fonte do botão */
      text-align: center; /* Centraliza o botão no mobile */
    }
  }
`;

export default function NovidadesAvisos() {
  return (
    <NovidadesContainer>
      <TextContent>
        <h2>
          Receba as <span className="highlight">Novidades</span> e <span className="highlight">Avisos</span> em Primeira Mão
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <button>Entrar no Grupo de WhatsApp</button>
      </TextContent>
    </NovidadesContainer>
  );
}
