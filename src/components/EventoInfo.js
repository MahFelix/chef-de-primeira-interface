// src/components/EventoInfo.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const EventoContainer = styled.section`
  background-color: #ef952b;
  color: #fff;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 25vh; /* Ocupa 25% da altura da tela */
  gap: 50px;
  flex-wrap: wrap; /* Permite que os itens se ajustem em telas menores */

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: 2rem;
    gap: 30px;
  }
`;

const Countdown = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 3rem; /* Aumenta o tamanho da fonte */
  font-weight: bold;
  flex-wrap: wrap; /* Permite que o conteúdo se ajuste em telas menores */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span {
    font-size: 4rem; /* Aumenta o número do contador */
  }

  small {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Reduz o tamanho da fonte em telas pequenas */
    gap: 1.5rem;

    span {
      font-size: 3rem; /* Reduz o tamanho do número */
    }

    small {
      font-size: 1rem; /* Reduz o tamanho da legenda */
    }
  }
`;

export default function EventoInfo() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-12-01T00:00:00'); // Defina a data do evento

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval); // Para o contador quando o evento começar
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <EventoContainer>
      <h2>O EVENTO COMECARÁ EM:</h2>
      <Countdown>
        <div>
          <span>{timeLeft.days}</span>
          <small>Dias</small>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <small>Horas</small>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <small>Minutos</small>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <small>Segundos</small>
        </div>
      </Countdown>
    </EventoContainer>
  );
}
