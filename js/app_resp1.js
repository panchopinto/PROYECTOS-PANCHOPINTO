// Login simple con verificación de correo y hash del código
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

    // Validar correo si hay whitelist
    if(Array.isArray(CONFIG.allowedEmails) && CONFIG.allowedEmails.length>0){
      if(!CONFIG.allowedEmails.map(e=>e.toLowerCase()).includes(email)){
        alert('Este correo no está autorizado. Solicita acceso.');
        return;
      }
    }

    if(codeHash !== CONFIG.accessCodeHash){
      alert('Código incorrecto.');
      return;
    }

    localStorage.setItem('auth','ok');
    localStorage.setItem('authEmail', email);
    location.href = 'dashboard.html';
  });
});
