
document.addEventListener('DOMContentLoaded', ()=>{
  const ok = localStorage.getItem('auth') === 'ok';
  if(!ok){ location.href = 'index.html'; }
});
