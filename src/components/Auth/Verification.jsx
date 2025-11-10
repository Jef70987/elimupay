import { useState } from 'react';
import './Verification.css';
import { useNavigate } from 'react-router-dom';

function PinInput() {
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const navigate = useNavigate();

  // Demo PIN number
  const DEMO_PIN = '1234';

  const handleNumberClick = (number) => {
    if (pin.length < 4) {
      const newPin = pin + number;
      setPin(newPin);
      
      // Auto-submit when 4 digits are entered
      if (newPin.length === 4) {
        setTimeout(() => validatePin(newPin), 500);
      }
    }
  };

  const handleClear = () => {
    setPin('');
    setMessage('');
    setMessageType('');
  };

  const validatePin = (enteredPin) => {
    if (enteredPin === DEMO_PIN) {
      setMessage('✅ Payment successful! PIN accepted.');
      setMessageType('success');
      navigate('/receipt');

    } else {
      setMessage('❌ Invalid PIN. Please try again.');
      setMessageType('error');
      // Clear PIN after delay
      setTimeout(() => {
        setPin('');
        setMessage('');
      }, 2000);
    }
  };

  // Render PIN dots
  const renderPinDots = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <div
        key={index}
        className={`pin-dot ${index < pin.length ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <div className="pin-container">
      <h2>MPESA PIN</h2>
      <div className="instruction">
        Enter your MPESA PIN (Demo PIN: {DEMO_PIN})
      </div>
      
      <div className="pin-display">
        {renderPinDots()}
      </div>

      <div className="keypad">
        {/* Number keys 1-9 */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            className="pin-key"
            onClick={() => handleNumberClick(number.toString())}
            disabled={pin.length >= 4}
          >
            {number}
          </button>
        ))}
        
        {/* Empty space */}
        <div></div>
        
        {/* Number 0 */}
        <button
          className="pin-key"
          onClick={() => handleNumberClick('0')}
          disabled={pin.length >= 4}
        >
          0
        </button>
        
        {/* Clear button */}
        <button className="clear-key" onClick={handleClear}>
          Clear
        </button>
      </div>

      {message && (
        <div className={`message ${messageType}`}>
          {message}
        </div>
      )}

      <div style={{ marginTop: '20px', fontSize: '12px', color: '#999' }}>
        <strong>Demo Instructions:</strong> Use PIN: <strong>{DEMO_PIN}</strong> for success
      </div>
    </div>
  );
}

export default PinInput;