const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');
const bodyElement = document.body;
const bookBtn = document.getElementById('bookbtn');
const kvitteringsdiv = document.getElementById('kvitteringsdiv');
const bookingdiv = document.getElementById('bookingdiv');


burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  document.body.classList.toggle("bodyoverlay");
});

const startBox = document.getElementById(`alle`);

if (startBox !== null){
  startBox.classList.remove('hidden');;
}

//andre videoer on scroll
let registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  if(video !== null) {
  let scrollVideo = () => {
      if (video.duration) {
          let distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          let rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
      }
      requestAnimationFrame(scrollVideo);
  };
  requestAnimationFrame(scrollVideo);}
};

registerVideo("#bound-one", "#bound-one video");


//filter

function skiftFilter(divId) {
  // Skjuler alle color boxes
  hideColorBoxes();

  // Viser den valgte color box
  const filterBox = document.getElementById(`${divId}`);
  filterBox.classList.remove('hidden');
}

function hideColorBoxes() {
  // Skjuler alle color boxes
  const filterBoxes = document.querySelectorAll('.port3');
  filterBoxes.forEach(box => {
    box.classList.add('hidden');
  });
}