if('IntersectionObserver' in window){
  document.documentElement.classList.add('js-anim');
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  }, {threshold:.15});
  els.forEach(el=>io.observe(el));
}
