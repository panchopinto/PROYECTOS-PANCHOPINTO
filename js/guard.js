document.addEventListener('DOMContentLoaded', ()=>{
  const ok = localStorage.getItem('auth') === 'ok';
  if(!ok){
    document.body.innerHTML = `
      <main class="container hero card hero-center">
        <h1>Acceso requerido</h1>
        <p class="lead">Tu sesión no está activa. Ingresa nuevamente.</p>
        <p><a class="cta" href="index.html">Ir al inicio de sesión</a></p>
      </main>
    `;
  }
});
