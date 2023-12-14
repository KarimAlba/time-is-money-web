import Login from "../components/views/Login";
import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import EditUser from "../components/ui/EditUser";
import Preloader from "../components/ui/Preloader";
import UserPlugin from "../components/ui/UserPlugin";
import RedirectPage from "../components/views/RedirectPage";

const UserPage = lazy(() => import("../components/views/User"));
const LoginForm = lazy(() => import("../components/ui/LoginForm"));
const MainPage = lazy(() => import("../components/views/MainPage"));
const Investors = lazy(() => import("../components/views/Investors"));
const PluginPage = lazy(() => import("../components/views/PluginPage"));
const Application = lazy(() => import("../components/views/Application"));
const PrivacyPolicy = lazy(() => import("../components/views/PrivacyPolicy"));
const CongratulationsBlock = lazy(() => import("../components/ui/CongratulationsBlock"));
const CreateNewPasswordPage = lazy(() => import("../components/ui/CreateNewPasswordPage"));
const OrganizationRegistration = lazy(() => import("../components/ui/OrganizationRegistration"));
const PhysicalPersonRegistration = lazy(() => import("../components/ui/PhysicalPersonRegistration"));

interface RouterPropsTypes{
    setCurBtnValue: Function;
    handleIsOpenFooter: Function;
    handleRedirected: Function;
}

const Router = (props: RouterPropsTypes) => {
    const { setCurBtnValue, handleIsOpenFooter, handleRedirected } = props;

    const [isOpenPlugin, setIsOpenPlugin] = useState<boolean>(false);
  
    const handleOpenPlugin = (value: boolean) => setIsOpenPlugin(value);
  
    const handleCurrentBtnChange = (value: string) => setCurBtnValue(value);

    const handleRedirectPageMounted = (val: boolean) => handleRedirected(val);

    return (
        <Routes>
            <Route 
                path="/" 
                element={
                    <Suspense fallback={<Preloader/>}>
                        <MainPage 
                            handleCurrentBtnChange={handleCurrentBtnChange} 
                            handleRedirectPageMounted={handleRedirectPageMounted}
                        />
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
                <Route 
                    path="physicalPerson" 
                    element={
                        <Suspense fallback={<Preloader/>}>
                            <PhysicalPersonRegistration/>
                        </Suspense>
                    } 
                />
                <Route 
                    path="entity" 
                    element={
                        <Suspense fallback={<Preloader/>}>
                            <OrganizationRegistration/>
                        </Suspense>
                    } 
                />
                <Route 
                    path="password-recovery" 
                    element={
                        <Suspense fallback={<Preloader/>}>
                            <CreateNewPasswordPage/>
                        </Suspense>
                    } 
                />
                <Route 
                    path="successful-recovery" 
                    element={
                        <Suspense fallback={<Preloader/>}>
                            <CongratulationsBlock/>
                        </Suspense>
                    } 
                />
            </Route>
            <Route path='user' element={
                    <Suspense fallback={<Preloader/>}>
                        <UserPage 
                            handlePersonInfoMounted={handleIsOpenFooter} 
                            handleOpenPlugin={handleOpenPlugin}
                            handleCurrentBtnChange={handleCurrentBtnChange}
                            handleRedirectPageMounted={handleRedirectPageMounted}
                        />
                    </Suspense>
                } 
            >
                <Route path='' element={<UserPlugin isOpenProps={isOpenPlugin}/>}/>
                <Route path="edit-user" element={<EditUser/>}/>
            </Route>
            <Route 
                path="/redirect" 
                element={
                    <Suspense fallback={<Preloader/>}>
                        <RedirectPage handleRedirectPageMounted={handleRedirectPageMounted}/>
                    </Suspense>
                } 
            />
            <Route path="privacy-policy" element={
                <Suspense fallback={<Preloader/>}>
                    <PrivacyPolicy/>
                </Suspense>
            }/>
      </Routes>
    )
}

export default Router;
