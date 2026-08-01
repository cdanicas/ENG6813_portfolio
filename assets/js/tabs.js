(function(){
  const TABS = ['teaching-statement', 'syllabus', 'hotel-negotiator', 'ethics-simulator'];

  function activate(tabId, updateHash){
    if (TABS.indexOf(tabId) === -1) tabId = TABS[0];

    document.querySelectorAll('.tab-nav button').forEach(function(btn){
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    document.querySelectorAll('.tab-panel').forEach(function(panel){
      panel.classList.toggle('active', panel.id === tabId);
    });

    if (updateHash !== false && window.location.hash !== '#' + tabId) {
      history.replaceState(null, '', '#' + tabId);
    }
    document.title = document.title.replace(/^[^|]+\|/, '').trim();
  }

  document.querySelectorAll('.tab-nav button').forEach(function(btn){
    btn.addEventListener('click', function(){
      activate(btn.dataset.tab, true);
    });
  });

  window.addEventListener('hashchange', function(){
    activate(window.location.hash.replace('#', ''), false);
  });

  const initial = window.location.hash.replace('#', '') || TABS[0];
  activate(initial, false);
})();
