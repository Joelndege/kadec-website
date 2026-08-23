// Mobile navigation toggle
(function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-navigation');
  if(!btn || !nav) return;

  btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    // update aria-label
    this.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  });

  // Close nav on outside click
  document.addEventListener('click', function(e){
    if(!nav.classList.contains('open')) return;
    if(e.target === btn || nav.contains(e.target)) return;
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    btn.setAttribute('aria-label','Open menu');
  });

  // Close nav on Escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' && nav.classList.contains('open')){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.setAttribute('aria-label','Open menu');
      btn.focus();
    }
  });
})();
