import logo from './logo.svg';
import './App.css';
import Aboutme from './components/Aboutme';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
