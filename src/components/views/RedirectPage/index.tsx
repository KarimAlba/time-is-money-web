import './style.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/imgTimeIsMoney/ТиМ2.svg';

interface RedirectPagePropsTypes{
    handleRedirectPageMounted: Function;
}

const RedirectPage = (props: RedirectPagePropsTypes) => {
    const { handleRedirectPageMounted } = props;

    const navigate = useNavigate();

    useEffect(() => {
        handleRedirectPageMounted(false)
    });

    return (
        <div className='redirect-container'>
            <img 
                src={logo} 
                alt="logotype" 
                onClick={() => navigate(-1)}
            />

            <div className='redirect-container_text'>
                <p>
                    This is the automatic redirect page to the native app or to the App Store / Play Store.
                </p>
                <span>
                    Сайт использует cookie для своей работы. Если вы не согласны, покиньте сайт.
                </span>
            </div>
        </div>
    )
}

export default RedirectPage; 
