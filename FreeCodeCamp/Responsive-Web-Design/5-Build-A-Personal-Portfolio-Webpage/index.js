window.onload = function () {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const width = window.innerWidth;
      const hash = e.target.hash.substr(1);
      const el = document.getElementById(hash);
      const top = el.offsetTop;
      window.scrollTo(0, top - 110);
    });
  });
};
