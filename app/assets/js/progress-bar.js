import $ from 'jquery';


if (document.body.classList.contains('homepage')) {
  const video = document.getElementById('bgVideo');

  video.addEventListener('canplaythrough', () => {
    const videoDuration = video.duration;

    setInterval(() => {
      const progress = Math.floor(video.currentTime / videoDuration * 100);
      $('#progressCounter')
        .text(`${progress}%`);
      $('#progressBar')
        .attr('aria-valuenow', progress)
        .css('width', `${progress}%`);
    }, 500);
  });
}


