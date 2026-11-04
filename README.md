# Asegúrate — sitio web

Landing page de Asegúrate, migrada desde un HTML único a **Next.js** (App Router + TypeScript). Es la base sobre la que se va a construir el portal de clientes.

## Estructura

```
app/
  layout.tsx        Layout raíz: idioma, título, tipografía
  page.tsx          Landing (arma las secciones)
  globals.css       Estilos (los mismos del HTML original)
  icon.svg          Favicon
  fonts/            Plus Jakarta Sans alojada localmente (licencia OFL)
components/
  landing/          Una sección por archivo: Nav, Hero, Seguros, Equipo, etc.
public/
  img/              Ilustraciones y logos en WebP
```

Para editar textos, cada sección tiene su contenido al inicio del archivo correspondiente en `components/landing/` (por ejemplo, los seguros están en el arreglo `seguros` de `Seguros.tsx`).

## Correr en local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Publicar en Vercel

Vercel detecta Next.js automáticamente al conectar el repositorio. Si el proyecto ya existía en Vercel como sitio estático, revisa en **Settings → Build and Deployment** que el *Framework Preset* diga **Next.js**.

## Datos de contacto

El número de WhatsApp/teléfono y el correo de contacto están en `lib/contacto.ts` y se usan en todo el sitio.

## Páginas

- `/` — landing
- `/cotizar` — aviso de cotizador en construcción + datos de contacto
- `/ingresar` — ingreso al portal de clientes (aún sin conectar a la base de datos)
