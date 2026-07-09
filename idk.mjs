// h
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// config
const titleText = "zaka's bio (hi!)"; // h
const typingSpeed = 150; 
const pauseBeforeRestart = 100; 

async function typeTitleLoop() {
  while (true) {
  
    document.title = "";
    for (let i = 0; i < titleText.length; i++) {
      document.title += titleText.charAt(i);
      await sleep(typingSpeed);
    }

    // pause for a second
    await sleep(pauseBeforeRestart);

   
    for (let i = titleText.length; i > 0; i--) {
      document.title = titleText.substring(0, i - 1);
      await sleep(typingSpeed / 2); // h
    }

    // wait until next loop
     await sleep(200);
  }
}

// Start the continuous animation loop
typeTitleLoop();
