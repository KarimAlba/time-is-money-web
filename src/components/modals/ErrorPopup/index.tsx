import './style.css'
import { useEffect, useState } from "react";

interface ErrorPopupProps {
  error?: string;
  errorArray?: string[] | [];
  onClose: Function;
}

const ErrorPopup = (props: ErrorPopupProps) => {
  const { error, onClose, errorArray } = props;

  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

    useEffect(() => {
      setIsErrorPopupVisible(true);

      const timer = setTimeout(() => {
        onClose();
      }, 2000);
  
      return () => {
        clearTimeout(timer); 
      };
    }, [onClose]);
  
    return (
      <div className={`error-popup ${isErrorPopupVisible ? 'show' : ''}`}>
        {errorArray && errorArray.length >= 1
          ? <div>
            {errorArray.map((item, index) => 
              <p key={item}>{`${index + 1}) ${item}`}</p>
            )}
          </div> 
          : <p>{error}</p>
        }
        <button 
          onClick={() => onClose()}
          className="close-btn"
        >
          x
        </button>
      </div>
    );
  };

export default ErrorPopup;
