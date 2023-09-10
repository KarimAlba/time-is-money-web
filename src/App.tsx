import { useState } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './views/MainPage';
import Footer from './components/Footer';
import Application from './views/Application';
import Plugin from './views/Plugin';
import screen1 from './assets/imgTimeIsMoney/screen1.svg'
import stroke from './assets/imgTimeIsMoney/stroke.svg'
import Investors from './views/Investors';
import Login from './views/Login';
import PhysicalPerson from './components/Form/PhysicalPerson';
import Entity from './components/Form/Entity';
import LoginForm from './components/Form/LoginForm';
import UserPage from './views/User';
import EditUser from './components/EditUser';
import UserPlugin from './components/UserPlugin';

function Layout() {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isOpenFooter, setIsOpenFooter] = useState<boolean>(true);

  const handlePasswordChange = () => {
    setModalVisible(true)
  }

  const handleIsOpenFooter = () => {
    setIsOpenFooter(true)
  }
  const handlePersonInfoMounted = () => {
    setIsOpenFooter(false)
  }

  return (
    <>
      <Header handleIsOpenFooter={handleIsOpenFooter} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/application" element={<Application />} />
        <Route path="/Plugin" element={<Plugin />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="login" element={<Login />} >
          <Route path='' element={<LoginForm showModal={handlePasswordChange} />} />
          <Route path="physicalPerson" element={<PhysicalPerson />} />
          <Route path="entity" element={<Entity />} />
        </Route>
        <Route path='user' element={<UserPage handlePersonInfoMounted={handlePersonInfoMounted} />}>
          <Route path='' element={<UserPlugin/>}/>
          <Route path="edit-user" element={<EditUser type={1}/>} />
        </Route>

      </Routes>
      {isOpenFooter
        ? <Footer />
        : null
      }
      {
        isModalVisible ? (
          <div className='overlay modalChooseServiceContainer'>
            <div className='modalChooseService'>
              <div className='modalHeder'>
                <span
                  onClick={() => setModalVisible(false)}
                  className='spanCross'
                >×</span>
                <h5 className='h5'>Востановление пароля</h5>
              </div>
              <div className='animate-label'>
                <input
                  type='text'
                  id='id_email'
                  required />
                <label
                  htmlFor="id_email">
                  Введите email, указаный при регистрации:
                </label>
              </div>
              <div className='modalFuter'>
                <button
                  className='buttonHide'
                  onClick={() => setModalVisible(false)}>
                  Отправить
                </button>
              </div>
              <Outlet />
            </div>
          </div>
        ) : null
      }


    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
