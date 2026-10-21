// Le Roi du Beignet · scripts du site
(function () {
  // Menu mobile
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'Fermer' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = 'Menu';
      });
    });
  }

  // « Voir le sachet » : ouvre l'emballage du salgado
  var dialog = document.getElementById('pack-dialog');
  var packImg = document.getElementById('pack-img');
  var packTitle = document.getElementById('pack-title');
  document.querySelectorAll('.card').forEach(function (card) {
    var btn = card.querySelector('.card__pack');
    if (!btn || !dialog) return;
    btn.addEventListener('click', function () {
      var key = card.getAttribute('data-pack');
      var name = card.querySelector('h3').textContent;
      packImg.src = 'img/emballages/' + key + '.jpg';
      packImg.alt = 'Sachet ' + name + ' Le Roi du Beignet';
      packTitle.textContent = name;
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  if (dialog) {
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
  }

  // Formulaire
  var form = document.getElementById('form-devis');
  var status = document.getElementById('form-status');
  if (form && status) {
    var next = form.querySelector('input[name="_next"]');
    if (next && location.protocol.indexOf('http') === 0) {
      next.value = new URL('merci.html', location.href).href;
    }
    form.addEventListener('submit', function (e) {
      if (form.action.indexOf('VOTRE-EMAIL') !== -1) {
        e.preventDefault();
        status.hidden = false;
        status.textContent = "Le formulaire n'est pas encore relié à une adresse e-mail. Contactez-nous directement en attendant.";
      }
    });
  }

  var annee = document.getElementById('annee');
  if (annee) annee.textContent = new Date().getFullYear();
})();
