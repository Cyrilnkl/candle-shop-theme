/* Vael Candle — Scroll animations */
(function() {
  'use strict';
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function init() {
    document.querySelectorAll('.vael-step, .vael-usp, .vael-testimonial, .vael-split__content').forEach(function(el) {
      el.classList.add('vael-animate');
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
