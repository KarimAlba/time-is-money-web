import './style.css'
import { useEffect, useState } from "react";

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup = (props: SuccessPopupProps) => {
  const { message, onClose } = props;

  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);

      const timer = setTimeout(() => {
        onClose();
      }, 4000);
  
      return () => {
        clearTimeout(timer); 
      };
    }, [onClose]);
  
    return (
      <div className={`success-popup ${isVisible ? 'show' : ''}`}>
        <p>{message}</p>
        <button 
          onClick={onClose}
          className="btn-close"
        >
          x
        </button>
      </div>
    );
  };

export default SuccessPopup;
