//BOTONES

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'galeria_img.html') {
      document.getElementById('img-btn').classList.add('active');
    } else if (currentPage === 'galeria_videos.html') {
      document.getElementById('vid-btn').classList.add('active');
    }
  });

