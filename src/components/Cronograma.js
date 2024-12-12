// src/components/Cronograma.js
import styled from 'styled-components';
import aula1 from '../assets/aula-1.png';
import aula2 from '../assets/aula-2.png';
import aula3 from '../assets/aula-3.png';

const CronogramaContainer = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #EBEBEB;

  `;

const AulaCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin: 1.5rem 0;
  width: 100%;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
  }
`;

const AulaImage = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    max-width: 90%; /* Ajusta a largura em telas menores */
    margin-bottom: 1rem;
  }
`;

const AulaContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  text-align: center;

  p {
    font-size: 1rem;
    color: #999;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.75rem;
    color: #333;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  button {
    background-color: #ef952b;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 1rem;

    &:hover {
      background-color: #d78324;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.9rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    button {
      padding: 0.6rem 1.2rem;
      font-size: 1rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o título para telas menores */
  }
`;

const SubTitle = styled.p`
  font-size: 1.2rem;
  color:#FB952F;
  margin-bottom: 3rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem; /* Ajusta o subtítulo para telas menores */
    margin-bottom: 2rem;
  }
`;

const aulas = [
  {
    id: 1,
    data: '10/01',
    titulo: 'Introdução à Culinária',
    descricao: 'Uma introdução ao mundo da culinária com técnicas básicas.',
    imagem: aula1,
  },
  {
    id: 2,
    data: '12/01',
    titulo: 'Cozinha Italiana',
    descricao: 'Aprenda a preparar pratos clássicos da cozinha italiana.',
    imagem: aula2,
  },
  {
    id: 3,
    data: '14/01',
    titulo: 'Doces e Sobremesas',
    descricao: 'Explore o mundo dos doces com técnicas de confeitaria.',
    imagem: aula3,
  },
];

export default function Cronograma() {
  return (
    <CronogramaContainer>
      <SubTitle>DEFINA OS LEMBRETES</SubTitle>
      <Title>CRONOGRAMA DE AULAS</Title>
      {aulas.map((aula) => (
        <AulaCard key={aula.id}>
          <AulaImage src={aula.imagem} alt={`Aula ${aula.id}`} />
          <AulaContent>
            <p>AULA {aula.data}</p>
            <h3>{aula.titulo}</h3>
            <p>{aula.descricao}</p>
            <button>Definir Lembrete</button>
          </AulaContent>
        </AulaCard>
      ))}
    </CronogramaContainer>
  );
}
