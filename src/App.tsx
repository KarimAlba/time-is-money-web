import { useState } from 'react';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Preloader from './components/ui/Preloader';
import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PhysicalPerson from './components/Form/PhysicalPerson';
import Entity from './components/Form/Entity';
import EditUser from './components/EditUser';
import UserPlugin from './components/UserPlugin';
import Login from './views/Login';

const MainPage = lazy(() => import("./views/MainPage"));
const Application = lazy(() => import("./views/Application"));
const PluginPage = lazy(() => import("./views/Plugin"));
const Investors = lazy(() => import("./views/Investors"));
const LoginForm = lazy(() => import("./components/Form/LoginForm"));
const UserPage = lazy(() => import("./views/User"));

function Layout() {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isOpenFooter, setIsOpenFooter] = useState<boolean>(true);
  const [isOpenPlugin, setIsOpenPlugin] = useState<boolean>(false);
  const [currentBtn, setCurrentBtn] = useState<string>('Главная');

  const handlePasswordChange = () => setModalVisible(true);

  const handleIsOpenFooter = () => setIsOpenFooter(true);

  const handlePersonInfoMounted = () => setIsOpenFooter(false);

  const handleOpenPlugin = (value: boolean) => setIsOpenPlugin(value);

  const handleCurrentBtnChange = (value: string) => setCurrentBtn(value); 

  return (
    <>
      <Header handleIsOpenFooter={handleIsOpenFooter} currentBtnProp={currentBtn}/>
      <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={<Preloader/>}>
              <MainPage handleCurrentBtnChange={handleCurrentBtnChange}/>
            </Suspense>
          } 
        />
        <Route 
          path="/application" 
          element={
            <Suspense fallback={<Preloader/>}>
              <Application handleCurrentBtnChange={handleCurrentBtnChange}/>
            </Suspense>
          }
        />
        <Route 
          path="/PluginPage" 
          element={
            <Suspense fallback={<Preloader/>}>
              <PluginPage handleCurrentBtnChange={handleCurrentBtnChange}/>
            </Suspense>
          }
        />
        <Route 
          path="/investors" 
          element={
            <Suspense fallback={<Preloader/>}>
              <Investors handleCurrentBtnChange={handleCurrentBtnChange}/>
            </Suspense>
          }
        />
        <Route path="login" element={<Login handleCurrentBtnChange={handleCurrentBtnChange}/>} >
          <Route 
            path='' 
            element={
              <Suspense fallback={<Preloader/>}>
                <LoginForm showModal={handlePasswordChange}/>
              </Suspense>
            } 
          />
          <Route path="physicalPerson" element={<PhysicalPerson/>}/>
          <Route path="entity" element={<Entity/>}/>
        </Route>
        <Route path='user' element={
              <Suspense fallback={<Preloader/>}>
                <UserPage 
                  handlePersonInfoMounted={handlePersonInfoMounted} 
                  handleOpenPlugin={handleOpenPlugin}
                  handleCurrentBtnChange={handleCurrentBtnChange}
                />
              </Suspense>
            } 
          >
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
                <h5 className='h5'>Восстановление пароля</h5>
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
