// Nonaktifkan pemulihan posisi scroll otomatis browser
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname + window.location.search);
}

window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", function () {
  const btnBackToTop = document.getElementById("btnBackToTop");
  if (btnBackToTop) {
    window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnBackToTop.style.display = "block";
      } else {
        btnBackToTop.style.display = "none";
      }
    };

    btnBackToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
