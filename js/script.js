(function(){
  const el = document.getElementById('typeConsole');
  if(!el) return;
  const lines = [
    {text:'$ building site...', cls:'muted2'},
    {text:'✓ otimização concluída', cls:'ok'},
    {text:'✓ responsivo testado', cls:'ok'},
    {text:'✓ SEO configurado', cls:'ok'},
    {text:'$ site no ar', cls:'muted2'}
  ];
  let started = false;
  function typeLines(){
    if(started) return;
    started = true;
    let li = 0;
    function typeLine(){
      if(li >= lines.length) return;
      const {text, cls} = lines[li];
      const div = document.createElement('div');
      div.className = 'line';
      const span = document.createElement('span');
      span.className = cls;
      div.appendChild(span);
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      div.appendChild(cursor);
      el.appendChild(div);
      let ci = 0;
      const iv = setInterval(()=>{
        span.textContent = text.slice(0, ci+1);
        ci++;
        if(ci >= text.length){
          clearInterval(iv);
          cursor.remove();
          li++;
          setTimeout(typeLine, 220);
        }
      }, 28);
    }
    typeLine();
  }
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ typeLines(); obs.disconnect(); } });
    }, {threshold:.3});
    obs.observe(el.closest('.console'));
  } else {
    el.innerHTML = '<div class="line"><span class="muted2">$ building site...</span></div><div class="line ok">✓ otimização concluída</div><div class="line ok">✓ responsivo testado</div><div class="line ok">✓ SEO configurado</div><div class="line"><span class="muted2">$ site no ar</span></div>';
  }
})();

if('IntersectionObserver' in window){
  document.documentElement.classList.add('js-anim');
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  }, {threshold:.12});
  els.forEach(el=>io.observe(el));
}
