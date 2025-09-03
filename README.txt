
# Actualización de páginas — PROYECTOS-PANCHOPINTO

Este paquete mejora visualmente las páginas **SEREMI**, **Municipalidad de San Nicolás**, **Municipalidad de Chillán** y el **acceso (index)**, y deja botones listos para enlazar **Células (Cartas-AR)** y **Trivias**.

## Orden de navegación solicitado
1. SEREMI
2. MUNICIPALIDAD SAN NICOLÁS (DAEM)
3. MUNICIPALIDAD CHILLÁN (DAEM)

## Cómo enlazar Células y Trivias (ACCESO RESTRINGIDO)
Tienes dos opciones. Recomendado: A.

### A) Incluir las demos dentro del MISMO repositorio
1. Copia tu proyecto **Células** completo a `apps/celulas/` y asegúrate que exista `apps/celulas/index.html`.
2. Copia tu proyecto **Trivias** completo a `apps/trivias/` y asegúrate que exista `apps/trivias/index.html`.
3. En el `index.html` de cada demo, agrega antes de `</body>`:
   ```html
   <script defer src="../../js/guard.js"></script>
   ```
   Esto hace que **no se pueda acceder** sin haber iniciado sesión.
4. En `js/config.js` confirma que estén tus correos permitidos y el hash de clave (ya incluido).
5. Publica el sitio (si usas GitHub Pages público, recuerda que la protección JS es básica; para privacidad real, usa **Netlify** o servidor propio con password).

### B) Mantener Células y Trivias en sitios aparte (Netlify) y enlazar
1. Despliega cada proyecto en Netlify con **Password Protection** o **Netlify Identity**.
2. Edita los enlaces en `seremi.html`, `sannicolas.html`, `chillan.html` y reemplaza:
   - `href="apps/celulas/index.html"` por la URL pública de tu despliegue de **Células**.
   - `href="apps/trivias/index.html"` por la URL pública de tu despliegue de **Trivias**.
3. Mantén este repositorio solo como el **panel privado**.

## Archivos clave
- `index.html` — acceso con correo + clave (mejorado).
- `seremi.html`, `sannicolas.html`, `chillan.html` — páginas con nuevo estilo y orden.
- `css/styles.css` — tema visual moderno (gradientes sutiles, tarjetas, tabs).
- `js/config.js` — lista de correos permitidos + hash de clave.
- `js/app.js` — lógica de login.
- `js/guard.js` — protección de rutas (bloquea acceso directo).
- `apps/celulas/index.html` y `apps/trivias/index.html` — **placeholders**: reemplázalos por tus apps reales.

## Seguridad
- Si el repo es **público**, cualquiera puede ver el código. La protección por JS **no es** una barrera fuerte (sirve para demo).
- Si necesitas privacidad real, usa **Netlify** (repo privado + password de Netlify) o **servidor propio** (Basic Auth).
