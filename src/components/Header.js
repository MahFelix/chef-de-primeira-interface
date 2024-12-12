// src/components/Header.js
import styled from 'styled-components';
import BGHEADER from '../assets/bg-cronograma222.jpg'; // Imagem para desktop
import BGMobile from '../assets/2222.png'; // Nova imagem para mobile
import LOGOCHEF from '../assets/Logochef.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start; /* Alinha os itens à esquerda */
  flex-direction: column;
  padding: 13rem;
  background-image: url(${BGHEADER});
  background-size: cover;
  background-position: center;
  background-color: #EBEBEB;

  @media (max-width: 768px) {
    background-image: url(${BGMobile}); /* Imagem de fundo diferente para mobile */
    padding: 5rem 2rem; /* Reduz o padding em dispositivos móveis */
    text-align: center; /* Centraliza o texto no mobile */
    background-size: cover; /* Garante que a imagem ainda seja redimensionada adequadamente */
    background-position: center;
  }
`;


const Logo = styled.img`
  width: 200px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 150px; /* Reduz a largura do logo no mobile */
    margin-bottom: 2rem; /* Aumenta o espaço abaixo do logo no mobile */
  }
`;

const BannerText = styled.div`
  h1 {
    width: 11em;
    font-size: 2.5rem;
    font-weight: bold;
    color: #938B80;

    /* Destaque para o nome "Chef de Primeira" */
    span.highlight {
      color: #ef952b;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem; /* Reduz o tamanho da fonte no mobile */
      width: 100%; /* Ajusta a largura do título no mobile */
    }
  }

  p {
    width: 500px;
    font-size: 1.2rem;
    color: #938B80;
    margin-top: 1rem;

    @media (max-width: 768px) {
      width: 100%; /* Ajusta a largura do parágrafo no mobile */
      font-size: 1rem; /* Reduz o tamanho da fonte no mobile */
      margin-top: 1.5rem; /* Ajusta o espaço entre o título e o parágrafo */
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={LOGOCHEF} alt="Chef de Primeira" />
      <BannerText>
        <h1>
          Fique por dentro de todos os detalhes do <span className="highlight">Chef de Primeira</span>!
        </h1>
        <p>Veja como se preparar para o evento que poderá mudar a sua carreira e a sua vida</p>
      </BannerText>
    </HeaderContainer>
  );
}
