import React, { useEffect, useState } from "react";
import './ErrorPopUp.css'

interface ErrorPopupProps {
  error: string;
  onClose: () => void;
}

const ErrorPopup: React.FC<ErrorPopupProps> = ({ error, onClose }) => {

  const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

    useEffect(() => {
      setIsErrorPopupVisible(true); // Показываем popup

      const timer = setTimeout(() => {
        onClose(); // Закрываем popup спустя 4 секунды
      }, 4000);
  
      return () => {
        clearTimeout(timer); // Очищаем таймер при размонтировании компонента
      };
    }, [onClose]);
  
    return (
      <div className={`error-popup ${isErrorPopupVisible ? 'show' : ''}`}>
      <p>{error}</p>
        <button onClick={onClose}>x</button>
      </div>
    );
  };

export default ErrorPopup;
