(function () {
  'use strict';
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Follow the OS unless the visitor has chosen explicitly.
  var media = window.matchMedia('(prefers-color-scheme: light)');
  var onChange = function (e) {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (err) {}
    if (!stored) root.dataset.theme = e.matches ? 'light' : 'dark';
  };
  if (media.addEventListener) media.addEventListener('change', onChange);
  else if (media.addListener) media.addListener(onChange);
})();
