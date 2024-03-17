import logo from './logo.svg';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
        <BrowserRouter>
          <Header></Header>
          <AppRouter/>
          <Footer/>
        </BrowserRouter>
  );
}

export default App;
