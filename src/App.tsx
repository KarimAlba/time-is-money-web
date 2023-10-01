import './App.css';
import Router from './router';
import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const [isOpenFooter, setIsOpenFooter] = useState<boolean>(true);
  const [currentBtn, setCurrentBtn] = useState<string>('Главная');

  const handleIsOpenFooter = () => setIsOpenFooter(true);

  const getCurBtnValue = (value: string) => setCurrentBtn(value); 

  return (
    <div>
      <Header 
        handleIsOpenFooter={handleIsOpenFooter} 
        currentBtnProp={currentBtn}
      />

      <Router 
        setCurBtnValue={getCurBtnValue} 
        handleIsOpenFooter={() => setIsOpenFooter(false)}
      />

      {isOpenFooter
        ? <Footer/>
        : null
      }
    </div>
  )
}

export default App;
