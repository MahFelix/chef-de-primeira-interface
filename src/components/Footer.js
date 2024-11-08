// src/components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 2rem;
  font-size: 0.9rem; /* Tamanho de fonte ajustado */

  @media (max-width: 768px) {
    padding: 1rem; /* Reduz o padding em telas menores */
    font-size: 0.8rem; /* Reduz o tamanho da fonte em telas pequenas */
  }

  p {
    margin: 0;
    line-height: 1.5;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>
        Nome da Empresa - CNPJ XXXXXXX | 
        <a href="/politica-de-privacidade"> Política de Privacidade</a> - 
        <a href="/termos-de-uso"> Termos de Uso</a>
      </p>
    </FooterContainer>
  );
}
