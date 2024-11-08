// src/App.js
import GlobalStyle from './globalStyle';
import Header from './components/Header';
import Cronograma from './components/Cronograma';
import NovidadesAvisos from './components/NovidadesAvisos';
import EventoInfo from './components/EventoInfo';
import Footer from './components/Footer';
import MaximoChef from './components/MaximoChef';

function App() {
  return (
    <div>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <Header />
      <Cronograma />
      <NovidadesAvisos />
      <MaximoChef/>
      <EventoInfo />
      <Footer />
    </div>
  );
}

export default App;
