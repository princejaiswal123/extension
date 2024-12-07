// Log to confirm the content script is loaded
console.log('Content script loaded on LinkedIn Grow Network page');

// Create a container for the React app
const appContainer = document.createElement('div');
appContainer.id = 'linkedin-auto-connect-app';
document.body.appendChild(appContainer);

// Listener for messages from the background script or popup
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === 'connectAll') {
    // Select all visible "Connect" buttons on the page
    const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');
    if (connectButtons.length === 0) {
      console.log('No connectable profiles available.');
      return;
    }

    console.log(`Found ${connectButtons.length} profiles to connect.`);

    // Function to send connection requests with delay
    const sendConnectionRequests = (buttons, delay = 2000) => {
      buttons.forEach((button, index) => {
        setTimeout(() => {
          button.click();
          console.log(`Sent connection request for profile #${index + 1}`);
        }, index * delay); // Delay each request
      });
    };

    // Start sending requests
    sendConnectionRequests(connectButtons, 13000); // Delay is set to 13 seconds per request
  }
});
