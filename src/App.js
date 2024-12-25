// src/App.js
import GlobalStyle from './globalStyle';
import Header from './components/Header';
import Timeline from './components/Timeline';
import NewsAndNotes from './components/NewsAndNotices';
import EventInfo from './components/EventInfo';
import Footer from './components/Footer';
import MaximumChef from './components/MaximumChef';

function App() {
  return (
    <div>
      <GlobalStyle /> {/* Aplica os estilos globais */}
      <Header />
      <Timeline />
      <NewsAndNotes />
      <MaximumChef/>
      <EventInfo />
      <Footer />
    </div>
  );
}

export default App;
