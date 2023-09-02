// Get the user agent string
var userAgent =.userAgent;

// Convert the user agent string to lower case for easier comparison
var userAgentLowerCase = userAgent.toLowerCase();

// Function to set the device emulation based on the user agent string
function setDeviceEmulation() {
  // Default device emulation settings
  var deviceWidth = 0  var deviceHeight = 1080;
  var devicePixelRatio = 1;

  // Check if the user agent string matches any known devices
  if (AgentLowerCase.includes('iphone')) {
    deviceWidth = 375;
    deviceHeight = 667;
    devicePixelRatio = 2;
  } else if (userAgentLowerCase.includes('ipad')) {
    = 768;
    deviceHeight = 1024;
    devicePixelRatio = 2;
  } else if (userAgentLowerCase.includes('')) {
    device = 1280;
   Height = 800;
   PixelRatio = 1;
  } else if (userAgentLowerCase.includes('windows')) {
    deviceWidth = 1366;
    deviceHeight = 768;
 devicePixelRatio =1;
  }

  // Set the device emulation properties
  document.documentElement.style.setProperty('--device-width', deviceWidth + 'px');
  document.documentElement.style.setProperty('--device-height', deviceHeight + 'px');
  document.documentElement.style.setProperty('--device-pixel-ratio', devicePixelRatio);

 // Trigger window resize event to update the layout based on new device
  window(new('resize'));
}

// Call the function to set the initial device
setDeviceEmulation();

// Event listener changes in the user agent string
window.addEventListener('resize', setDeviceEm`

