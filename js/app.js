
async function sha256Hex(str){
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');
}
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('loginForm');
  if(!form) return;
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const code = document.getElementById('code').value.trim();
    const codeHash = await sha256Hex(code);

    if(Array.isArray(CONFIG.allowedEmails) && CONFIG.allowedEmails.length>0){
      const okEmail = CONFIG.allowedEmails.map(e=>e.toLowerCase()).includes(email);
      if(!okEmail){ alert('Correo no autorizado.'); return; }
    }
    if(codeHash !== CONFIG.accessCodeHash){ alert('Código incorrecto.'); return; }

    localStorage.setItem('auth','ok');
    localStorage.setItem('authEmail', email);
    location.href = 'dashboard.html';
  });
});
