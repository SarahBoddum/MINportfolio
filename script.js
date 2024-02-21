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


//andre videoer on scroll
let registerVideo = (bound, video) => {
  bound = document.querySelector(bound);
  video = document.querySelector(video);
  let scrollVideo = () => {
      if (video.duration) {
          let distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
          let rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
          let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

          video.currentTime = video.duration * percentScrolled;
      }
      requestAnimationFrame(scrollVideo);
  };
  requestAnimationFrame(scrollVideo);
};

registerVideo("#bound-one", "#bound-one video");