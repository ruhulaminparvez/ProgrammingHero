import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ShowImage from './components/ShowImage/ShowImage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ShowImage></ShowImage>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}

export default App;
