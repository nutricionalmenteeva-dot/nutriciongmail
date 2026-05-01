# 🌿 Meteeva Mail — Aplicación de envío de correos profesionales

Aplicación web para enviar correos HTML profesionales a través de Gmail + Nodemailer, desplegada en Vercel.

---

## 🚀 Despliegue en Vercel

### Opción A — Vercel CLI (recomendado)

```bash
# 1. Instala Vercel CLI si no lo tienes
npm install -g vercel

# 2. Entra a la carpeta del proyecto
cd email-app

# 3. Instala dependencias
npm install

# 4. Despliega
vercel

# 5. Para producción
vercel --prod
```

### Opción B — GitHub + Vercel Dashboard

1. Sube esta carpeta a un repositorio de GitHub
2. Ve a [vercel.com](https://vercel.com) y haz "Import Project"
3. Conecta tu repositorio
4. Añade las variables de entorno (ver abajo)
5. Despliega

---

## 🔐 Variables de entorno en Vercel

En el dashboard de Vercel → Settings → Environment Variables, añade:

| Variable | Valor |
|---|---|
| `GMAIL_USER` | `nutricionalmeteeva@gmail.com` |
| `GMAIL_APP_PASSWORD` | `stbq qtuj cofk tpjn` |

> ⚠️ **Importante:** Las credenciales ya están en `vercel.json` para desarrollo local, pero para producción es MEJOR configurarlas como variables de entorno en el dashboard de Vercel por seguridad.

---

## 📁 Estructura del proyecto

```
email-app/
├── api/
│   └── send.js          # Endpoint serverless (Nodemailer)
├── public/
│   └── index.html       # Frontend HTML completo
├── package.json
├── vercel.json          # Configuración de rutas Vercel
└── README.md
```

---

## ✨ Funcionalidades

- **4 plantillas HTML** listas: Bienvenida, Cita, Resultados, Personalizado
- **Editor HTML** con vista previa en tiempo real
- **Múltiples destinatarios** con sistema de etiquetas
- **Nombre del remitente** y Reply-To configurables
- **Diseño profesional** orientado a nutrición
- **Notificaciones** de éxito/error

---

## 🛠️ Desarrollo local

```bash
npm install
npx vercel dev
```

La app estará en `http://localhost:3000`
"# nutriciongmail" 
"# nutriciongmail" 
"# nutriciongmail" 
