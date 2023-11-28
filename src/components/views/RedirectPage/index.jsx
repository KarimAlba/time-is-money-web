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

    // Here we initiate the redirect process
    AppRedirect.redirect({

        iosApp: 'tim://plugin/' + qs['id'],

        //iosAppStore: 'https://apps.apple.com/us/app/%D1%82%D0%B8%D0%BC/id6447686674' + qs['message'], - вариант прошлый 
        iosAppStore: 'https://apps.apple.com/us/app/%D1%82%D0%B8%D0%BC/id6447686674' + qs['id'],
        // For this, your app need to have category filter: android.intent.category.BROWSABLE

        android: {
            'host': 'plugin/' + encodeURIComponent(qs['id']), // Host/path/querystring part in a custom scheme URL
            // 'action': '', // Equivalent to ACTION in INTENTs
            // 'category': '', // Equivalent to CATEGORY in INTENTs
            // 'component': '', // Equivalent to COMPONENT in INTENTs
            'scheme': 'tim', // Scheme part in a custom scheme URL
            'package': 'com.studiovr.timeismoney', // Package name in Play store
            'fallback': 'https://play.google.com/store/apps/details?id=com.studiovr.timeismoney'
        }

    }); 

    useEffect(() => {
        handleRedirectPageMounted(false);
    });

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
