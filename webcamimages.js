const images = [
    "media/webcam3.gif" ,
    "media/webcam4.gif" ,
    "media/webcam5.gif" ,
    "media/webcam6.gif" ,
    "media/webcam7.gif" ,
    "media/webcam8.gif" ,
    "media/webcam9.gif" ,
    "media/webcam10.gif" ,
    "media/webcam11.gif" ,
    "media/webcam12.gif" ,
    "media/webcam13.gif" ,
    "media/webcam14.gif" ,

  ];

  const imgEl = document.getElementById("random-img");

  function pickRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    imgEl.src = images[randomIndex];
  }

  // Initial load
  pickRandomImage();

  // Change every 15 seconds (15000 ms)
  setInterval(pickRandomImage, 15000);