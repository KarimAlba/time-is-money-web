import './style.css';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import redirectConfig from '../../../utils/redirect';
import logo from '../../../assets/imgTimeIsMoney/ТиМ2.svg';

const RedirectPage = (props) => {
    const { handleRedirectPageMounted } = props;

    const navigate = useNavigate();

    const AppRedirect = redirectConfig();
    
    var qs = AppRedirect.queryString;

    useEffect(() => {
        handleRedirectPageMounted(false);
        AppRedirect.redirect({
            iosApp: 'tim://plugin/',
    
            iosAppStore: 'https://apps.apple.com/us/app/тим/id6447686674',
    
            android: {
                'host': 'plugin/' + encodeURIComponent(qs['id']),
                'scheme': 'tim',
                'package': 'com.studiovr.timeismoney',
                'fallback': 'https://play.google.com/store/apps/details?id=com.studiovr.timeismoney'
            }
    
        });
    }, []);

    return (
        <div className='redirect-container'>
            <script src='../../../utils/redirect'></script>
            <img 
                src={logo} 
                alt="logotype" 
                onClick={() => navigate('https://api.time-money.shop/')}
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
