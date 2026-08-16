document.addEventListener("DOMContentLoaded", () => {
  const menuToggleBtn = document.getElementById("menuToggleBtn");
  const navMenu = document.getElementById("navMenu");
  if (menuToggleBtn && navMenu) {
    menuToggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
  const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("open");
      }
    });
  });
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetTabId = e.currentTarget.getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active");
      });
      tabBtns.forEach((b) => {
        b.classList.add("outline");
        b.style.color = "#0f172a";
      });
      document.getElementById(targetTabId).classList.add("active");
      e.currentTarget.classList.remove("outline");
      e.currentTarget.style.color = "#ffffff";
    });
  });
});
function activateSecurePlayer(container) {
  const videoId = container.dataset.videoid;
  const iframe = document.createElement('iframe');  
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-presentation');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  container.innerHTML = '';
  container.appendChild(iframe); 
  container.removeAttribute('onclick');
  container.style.cursor = 'default';
}
function activateMyMap(container) {
  const mapId = container.dataset.mid;
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.google.com/maps/d/embed?mid=${mapId}&ehbc=2E312F`;
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  container.innerHTML = '';
  container.appendChild(iframe);
  container.removeAttribute('onclick');
  container.style.cursor = 'default';
}