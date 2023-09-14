import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import MainComponent from './components/LandingPage/MainComponent';
import HomePage from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import CoinPage from './Pages/Coin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/coin/:id' element={<CoinPage />}/>
        {/* <Route path='/compare' element={<ComparePage />}/>
        <Route path='/watchlist' element={<WatchListPage />}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
