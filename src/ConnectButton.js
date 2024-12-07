import React from 'react';

const ConnectButton = () => {
  // Function to simulate the click event for all visible Connect buttons
  const handleConnectAll = () => {
    // Access all "Connect" buttons
    const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
    
    if (connectButtons.length === 0) {
      alert('No Connect buttons available!');
      return;
    }
    
    // Click each button with a delay
    connectButtons.forEach((button, index) => {
      setTimeout(() => {
        button.click();
        console.log('Clicked connect for profile', index + 1);
      }, Math.random() * (3000 - 1000) + 1000); // Random delay between 1-3 seconds
    });
  };

  return (
    <div style={styles.buttonContainer}>
      <button onClick={handleConnectAll} style={styles.button}>
        Connect with All
      </button>
    </div>
  );
};

const styles = {
  buttonContainer: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: 1000,
  },
  button: {
    backgroundColor: '#0073b1',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  },
};

export default ConnectButton;