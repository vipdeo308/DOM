import {React,useState} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {NavBar} from './NavBar';
import {CardList} from './CardList';
import {data} from './constant';
import './App.css';

const App = () => {
  const [cardList,setCardList]=useState(data)
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<CardList type="all" cardList={cardList}/>} />
          <Route path="/full-stack" element={<CardList type="full-stack" cardList={cardList}/>} />
          <Route path="/data-science" element={<CardList type="data-science" cardList={cardList}/>} />
          <Route path="/cyber-security" element={<CardList type="cyber-security" cardList={cardList}/>} />
          <Route path="/career" element={<CardList type="career" cardList={cardList}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;