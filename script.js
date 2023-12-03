const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt the user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, error here:", error);
  }
}

button.addEventListener("click", async () => {
  // Disable button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
