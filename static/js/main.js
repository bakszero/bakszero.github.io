(function () {
  'use strict';

  // Dark is the default. Light only applies if the visitor explicitly chose it,
  // so the OS colour scheme is deliberately ignored here.
  var root = document.documentElement;
  var toggle = document.querySelector('.theme-toggle');
  var meta = document.querySelector('meta[name="theme-color"]');
  var COLOURS = { dark: '#0c0c0e', light: '#fbfaf8' };

  if (!toggle) return;

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    if (meta) meta.setAttribute('content', COLOURS[next]);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
