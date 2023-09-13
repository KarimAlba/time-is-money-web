import { useState } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './views/MainPage';
import Footer from './components/Footer';
import Application from './views/Application';
import PluginPage from './views/Plugin';
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
  const [isOpenPlugin, setIsOpenPlugin] = useState<boolean>(false);

  const handlePasswordChange = () => setModalVisible(true);

  const handleIsOpenFooter = () => setIsOpenFooter(true);

  const handlePersonInfoMounted = () => setIsOpenFooter(false);

  const handleOpenPlugin = (value: boolean) => setIsOpenPlugin(value);

  return (
    <>
      <Header handleIsOpenFooter={handleIsOpenFooter} />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/application" element={<Application/>}/>
        <Route path="/PluginPage" element={<PluginPage/>}/>
        <Route path="/investors" element={<Investors/>}/>
        <Route path="login" element={<Login/>} >
          <Route path='' element={<LoginForm showModal={handlePasswordChange}/>} />
          <Route path="physicalPerson" element={<PhysicalPerson/>}/>
          <Route path="entity" element={<Entity/>}/>
        </Route>
        <Route path='user' element={<UserPage handlePersonInfoMounted={handlePersonInfoMounted} handleOpenPlugin={handleOpenPlugin}/>}>
          <Route path='' element={<UserPlugin isOpenProps={isOpenPlugin}/>}/>
          <Route path="edit-user" element={<EditUser/>}/>
        </Route>

      </Routes>
      {isOpenFooter
        ? <Footer/>
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
              <Outlet/>
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
