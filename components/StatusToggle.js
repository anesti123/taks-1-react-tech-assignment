export default function StatusToggle({ isOn, setIsOn }) {
    return (
      <div className="toggle-container">
        <p>Current Status: {isOn ? 'ON' : 'OFF'}</p>
        <button 
          onClick={() => setIsOn(!isOn)}
          className="toggle-button"
        >
          Toggle Status
        </button>
      </div>
    );
  }