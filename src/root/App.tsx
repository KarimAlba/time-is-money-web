import './App.css';
import Router from '../router';
import { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
// import { useSelector } from 'react-redux/es/exports';
// import SuccessPopup from '../components/modals/SuccessPopup';
//import ErrorPopup from '../components/modals/ErrorPopup/ErrorPopUp';

function App() {
  //const [type, setType] = useState<string>('');
  //const [message, setMessage] = useState<string>('');
  const [isOpenFooter, setIsOpenFooter] = useState<boolean>(true);
  const [currentBtn, setCurrentBtn] = useState<string>('Главная');

  const [isOpenLayout, setIsOpenLayaout] = useState<boolean>(true);

  const handleIsOpenFooter = () => setIsOpenFooter(true);

  const getCurBtnValue = (value: string) => setCurrentBtn(value); 

  const handleRedirected = (val: boolean) => setIsOpenLayaout(val);

  //const users = useSelector((state: any) => state.notification.message);

  // useEffect(() => {
  //   if (users !== undefined) {
  //     setType(users.type);
  //     setMessage(users.payload);
  //   }
  // }, [users]); 

  return (
    <div>
      {isOpenLayout
        ? <Header 
          handleIsOpenFooter={handleIsOpenFooter} 
          currentBtnProp={currentBtn}
        />
        : null
      }

      <Router 
        setCurBtnValue={getCurBtnValue} 
        handleIsOpenFooter={() => setIsOpenFooter(false)}
        handleRedirected={handleRedirected}
      />

      {isOpenFooter && isOpenLayout
        ? <Footer/>
        : null
      }

      {/* {type
        ? type === 'GOOD_MOVE'
          ? <SuccessPopup message={message} onClose={() => setType('')}/>
          : <ErrorPopup error={message} onClose={() => setType('')}/>
        : null
      } */}
    </div>
  )
}

export default App;
