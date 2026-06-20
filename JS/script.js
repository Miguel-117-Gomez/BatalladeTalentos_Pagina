let lang = 'es';
  function toggleLang() {
    lang = lang === 'es' ? 'en' : 'es';
    document.documentElement.lang = lang;
    document.getElementById('lang-btn').textContent = lang === 'es' ? 'EN' : 'ES';
    document.querySelectorAll('[data-es]').forEach(el => {
      const val = el.getAttribute('data-' + lang);
      if (!val) return;
      if (val.includes('<')) el.innerHTML = val;
      else el.textContent = val;
    });
  }
