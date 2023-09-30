import './App.css';
import Login from './views/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import EditUser from './components/ui/EditUser';
import { useState, lazy, Suspense } from 'react';
import Preloader from './components/ui/Preloader';
import UserPlugin from './components/ui/UserPlugin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrganizationRegistration from './components/ui/OrganizationRegistration';
import PhysicalPersonRegistration from './components/ui/PhysicalPersonRegistration';

const UserPage = lazy(() => import("./views/User"));
const MainPage = lazy(() => import("./views/MainPage"));
const PluginPage = lazy(() => import("./views/PluginPage"));
const Investors = lazy(() => import("./views/Investors"));
const Application = lazy(() => import("./views/Application"));
const LoginForm = lazy(() => import("./components/ui/LoginForm"));

function Layout() {
  const [isOpenFooter, setIsOpenFooter] = useState<boolean>(true);
  const [isOpenPlugin, setIsOpenPlugin] = useState<boolean>(false);
  const [currentBtn, setCurrentBtn] = useState<string>('Главная');

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
                <LoginForm/>
              </Suspense>
            } 
          />
          <Route path="physicalPerson" element={<PhysicalPersonRegistration/>}/>
          <Route path="entity" element={<OrganizationRegistration/>}/>
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
