// src/components/MaximoChef.js
import styled from 'styled-components';
import IconImage1 from '../assets/ícone-celular.svg'; // Substitua com o ícone correto
import IconImage2 from '../assets/ícone-alarme.svg';
import IconImage3 from '../assets/icone-computador.svg';
import BGMAX from '../assets/bg-cronograma-31.jpg'

const SectionContainer = styled.section`
  display: flex;
  padding: 4rem;
  background-color: #f9f9f9;
  background-image: url(${BGMAX});
  background-size: cover;
  background-position: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column; /* Organiza os elementos em uma coluna em telas menores */
    padding: 2rem; /* Reduz o padding em telas menores */
  }
`;

const ContentContainer = styled.div`
  width: 40%;
  margin-right: 5rem; /* Ajusta a margem para telas maiores */
  
  @media (max-width: 768px) {
    width: 100%; /* No mobile, ocupa toda a largura */
    margin-right: 0;
    text-align: center; /* Centraliza o texto */
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  width: 14em;

  span {
    color: #ef952b;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho do título em telas menores */
  }
`;

const Text = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduz o tamanho da fonte no mobile */
  }
`;

const ItemsContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 768px) {
    width: 100%; /* Ocupa toda a largura no mobile */
    gap: 2rem; /* Reduz a distância entre os itens */
    align-items: center; /* Centraliza os itens */
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 1rem;
    border: 2px solid #ef952b;
    border-radius: 50%;
    padding: 0.5rem;

    @media (max-width: 768px) {
      width: 40px; /* Diminui o tamanho dos ícones em telas menores */
      height: 40px;
    }
  }

  p {
    font-size: 1rem;
    color: #666;

    @media (max-width: 768px) {
      font-size: 0.9rem; /* Reduz o tamanho do texto no mobile */
      text-align: center; /* Centraliza o texto no mobile */
    }
  }
`;

export default function MaximoChef() {
  return (
    <SectionContainer>
      <ContentContainer>
        <Title>
          COMO EXTRAIR O MÁXIMO DO <span>CHEF DE PRIMEIRA</span>?
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectetur adipiscing.
        </Text>
      </ContentContainer>
      <ItemsContainer>
        <Item>
          <img src={IconImage1} alt="Ícone 1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet</p>
        </Item>
        <Item>
          <img src={IconImage2} alt="Ícone 2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet</p>
        </Item>
        <Item>
          <img src={IconImage3} alt="Ícone 3" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet</p>
        </Item>
      </ItemsContainer>
    </SectionContainer>
  );
}
