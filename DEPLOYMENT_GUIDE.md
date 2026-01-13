# Guía de Deployment - Opticolorsmx
## Preparación para Producción

---

## ✅ PRE-DEPLOYMENT CHECKLIST

### 1. Archivos SEO Verificados
```
✅ /public/robots.txt
✅ /public/sitemap.xml
✅ /public/manifest.json
✅ /public/.htaccess
✅ /index.html (meta tags completos)
```

### 2. Imágenes Optimizadas
```
✅ /public/logoopticolorsmx.svg
✅ /public/fondoopticolors.png
✅ /public/opticolorsimg1-5.jpeg
```

### 3. Configuraciones
```
✅ Canonical URL: https://opticolorsmx.com/
✅ Theme color: #0066CC
✅ Language: es-MX
✅ Timezone: America/Mexico_City
```

---

## 🚀 PASOS PARA DEPLOYMENT

### 1. Build de Producción
```bash
# En terminal PowerShell
cd C:\CRUMEN\Proyectos\opticolorsmx
npm run build
```

**Resultado esperado:**
- Carpeta `/dist` creada
- Archivos optimizados y minificados
- Imágenes comprimidas
- CSS y JS concatenados

### 2. Verificar Build
```bash
# Preview del build
npm run preview
```

Verificar que todo funcione correctamente en: `http://localhost:4173`

---

## 📋 DESPUÉS DEL DEPLOYMENT

### 1. Google Search Console (CRÍTICO)

#### Paso 1: Crear Cuenta
```
1. Ir a: https://search.google.com/search-console
2. Agregar propiedad: https://opticolorsmx.com
3. Verificar propiedad (método HTML tag o archivo)
```

#### Paso 2: Enviar Sitemap
```
1. En Search Console → Sitemaps
2. Agregar sitemap: https://opticolorsmx.com/sitemap.xml
3. Enviar
```

#### Paso 3: Solicitar Indexación
```
1. Inspección de URL
2. Solicitar indexación para:
   - https://opticolorsmx.com/
   - https://opticolorsmx.com/#services
   - https://opticolorsmx.com/#about
   - https://opticolorsmx.com/#contact
```

---

### 2. Google Analytics

#### Configuración
```javascript
<!-- Agregar en index.html antes de </head> -->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Pasos:**
1. Crear cuenta en https://analytics.google.com
2. Crear propiedad "Opticolorsmx"
3. Obtener ID de medición (G-XXXXXXXXXX)
4. Agregar código al index.html
5. Re-deploy

---

### 3. Google My Business

#### Configuración
```
1. Ir a: https://www.google.com/business/
2. Agregar negocio: Opticolorsmx
3. Categoría: Laboratorio Óptico
4. Dirección: Calle Tacuba 37, Cuarto Piso, Consultorio 413-A
5. Teléfono: +52 55 1503 7150
6. Horarios: Lun-Vie 9:00-18:00
7. Verificar por correo postal o teléfono
```

#### Información a Completar
- Logo (logoopticolorsmx.svg)
- Fotos del local (5-10 imágenes)
- Descripción (de index.html)
- Servicios principales
- Atributos (Accesible, Estacionamiento, etc.)
- URL del sitio: https://opticolorsmx.com

---

### 4. Schema.org Validation

```
1. Ir a: https://validator.schema.org/
2. Pegar URL: https://opticolorsmx.com
3. Verificar que no haya errores
4. Ir a: https://search.google.com/test/rich-results
5. Probar URL nuevamente
6. Verificar Rich Snippets
```

**Esperar resultados:**
- ✅ LocalBusiness válido
- ✅ Address reconocida
- ✅ Rating visible
- ✅ Opening hours válidas

---

### 5. Open Graph Testing

#### Facebook Debugger
```
1. Ir a: https://developers.facebook.com/tools/debug/
2. Pegar URL: https://opticolorsmx.com
3. Click en "Scrape Again"
4. Verificar preview
5. Verificar imagen, título y descripción
```

#### Twitter Card Validator
```
1. Ir a: https://cards-dev.twitter.com/validator
2. Pegar URL: https://opticolorsmx.com
3. Preview Card
4. Verificar que sea "summary_large_image"
```

---

### 6. Performance Testing

#### PageSpeed Insights
```
1. Ir a: https://pagespeed.web.dev/
2. Analizar: https://opticolorsmx.com
3. Objetivo: Score > 90 en móvil y desktop
```

**Optimizaciones si score < 90:**
- Comprimir imágenes más
- Lazy loading de imágenes
- Defer JavaScript
- Minificar CSS adicional

#### GTmetrix
```
1. Ir a: https://gtmetrix.com/
2. Analizar URL
3. Objetivo: Grade A o B
```

---

### 7. Mobile-Friendly Test

```
1. Ir a: https://search.google.com/test/mobile-friendly
2. Probar URL: https://opticolorsmx.com
3. Verificar que sea "Mobile-friendly"
```

---

### 8. SSL Certificate

```
✅ Asegurar que el sitio tenga HTTPS activo
✅ Certificado válido (Let's Encrypt o comercial)
✅ Forzar redireccionamiento HTTP → HTTPS
✅ Verificar que no haya contenido mixto
```

**En .htaccess ya está preparado, solo descomentar:**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

---

## 📊 MONITOREO POST-DEPLOYMENT

### Semana 1
```
☐ Verificar indexación en Google (site:opticolorsmx.com)
☐ Comprobar errores en Search Console
☐ Verificar Analytics funcionando
☐ Revisar Speed scores
☐ Probar formularios y WhatsApp
```

### Semana 2-4
```
☐ Revisar primeras keywords en Search Console
☐ Monitorear CTR en búsquedas
☐ Analizar bounce rate
☐ Verificar conversiones (WhatsApp clicks)
☐ Revisar Google My Business insights
```

### Mes 2-3
```
☐ Análisis de keywords posicionadas
☐ Identificar oportunidades de contenido
☐ Optimizar páginas con bajo rendimiento
☐ Generar backlinks
☐ Solicitar reviews de clientes
```

---

## 🛠️ HERRAMIENTAS DE MONITOREO

### Gratis
- ✅ Google Search Console (obligatorio)
- ✅ Google Analytics (obligatorio)
- ✅ Google My Business (obligatorio)
- ✅ Google PageSpeed Insights
- ✅ Google Mobile-Friendly Test
- ✅ Schema.org Validator
- ✅ Facebook Debugger
- ✅ Twitter Card Validator

### Pagadas (Recomendadas)
- Ahrefs (backlinks y keywords)
- SEMrush (análisis competencia)
- Moz Local (local SEO)
- Screaming Frog (auditorías técnicas)

---

## 🔧 CONFIGURACIÓN DE HOSTING

### Recomendaciones

#### Si usa Apache
```
✅ .htaccess activado
✅ mod_rewrite habilitado
✅ mod_deflate habilitado (compresión)
✅ mod_expires habilitado (cache)
✅ mod_headers habilitado (seguridad)
```

#### Si usa Nginx
Crear archivo `nginx.conf` equivalente al .htaccess

#### CDN (Opcional)
- Cloudflare (gratis)
- AWS CloudFront
- Google Cloud CDN

---

## 📝 URLS A ACTUALIZAR EN PRODUCCIÓN

Cambiar en estos archivos cuando el dominio esté activo:

### index.html
```html
<!-- Líneas a actualizar -->
<link rel="canonical" href="https://TU-DOMINIO.com/" />
<meta property="og:url" content="https://TU-DOMINIO.com/" />
<meta property="og:image" content="https://TU-DOMINIO.com/fondoopticolors.png" />
<meta property="twitter:url" content="https://TU-DOMINIO.com/" />
<meta property="twitter:image" content="https://TU-DOMINIO.com/fondoopticolors.png" />

<!-- En Schema.org -->
"@id": "https://TU-DOMINIO.com",
"url": "https://TU-DOMINIO.com",
"image": "https://TU-DOMINIO.com/logoopticolorsmx.svg",
```

### sitemap.xml
```xml
<!-- Actualizar todas las URLs -->
<loc>https://TU-DOMINIO.com/</loc>
<loc>https://TU-DOMINIO.com/#services</loc>
<loc>https://TU-DOMINIO.com/#about</loc>
<loc>https://TU-DOMINIO.com/#contact</loc>
```

### robots.txt
```txt
Sitemap: https://TU-DOMINIO.com/sitemap.xml
```

---

## 🎯 MÉTRICAS DE ÉXITO

### Mes 1
```
Target:
- Páginas indexadas: 4
- Keywords posicionadas: 10-20
- Tráfico orgánico: Baseline
- Posición promedio: 30-50
```

### Mes 3
```
Target:
- Keywords posicionadas: 50-100
- Tráfico orgánico: +30%
- Posición promedio: 20-30
- CTR: 2-3%
```

### Mes 6
```
Target:
- Keywords en Top 10: 10-15
- Tráfico orgánico: +50%
- Posición promedio: 15-20
- CTR: 4-5%
- Conversiones: +40%
```

---

## 🚨 PROBLEMAS COMUNES Y SOLUCIONES

### 1. Sitio no indexa
```
Problema: Después de 2 semanas, site:opticolorsmx.com no muestra resultados

Soluciones:
☐ Verificar robots.txt (Allow: /)
☐ Comprobar meta robots (index, follow)
☐ Solicitar indexación manual en Search Console
☐ Verificar que sitemap.xml sea accesible
☐ Revisar Search Console por errores
```

### 2. Schema.org no válido
```
Problema: Rich Results Test muestra errores

Soluciones:
☐ Validar JSON en validator.schema.org
☐ Verificar comillas y comas
☐ Comprobar tipos de datos
☐ Asegurar campos obligatorios
```

### 3. Performance bajo
```
Problema: PageSpeed score < 70

Soluciones:
☐ Comprimir imágenes (TinyPNG)
☐ Implementar lazy loading
☐ Activar cache del servidor
☐ Minificar CSS/JS adicional
☐ Usar CDN
```

### 4. Mobile-friendly issues
```
Problema: Test falla en móvil

Soluciones:
☐ Verificar viewport meta tag
☐ Comprobar texto legible
☐ Revisar tap targets (mín 48px)
☐ Eliminar contenido bloqueado
```

---

## 📞 SOPORTE Y RECURSOS

### Documentación Oficial
- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/
- Open Graph: https://ogp.me/
- Twitter Cards: https://developer.twitter.com/cards

### Comunidades
- Reddit /r/SEO
- Google Search Central Community
- Stack Overflow
- WebmasterWorld

---

## ✅ CHECKLIST FINAL PRE-GO-LIVE

```
SEO Básico
☐ Title optimizado
☐ Meta description
☐ Keywords estratégicas
☐ H1 tags correctos
☐ Alt tags en imágenes
☐ Canonical URLs

Technical SEO
☐ robots.txt accesible
☐ sitemap.xml accesible
☐ HTTPS activo
☐ Redirects 301 configurados
☐ 404 page personalizada
☐ Velocidad optimizada

Local SEO
☐ Google My Business creado
☐ Dirección consistente
☐ Geo tags implementados
☐ Google Maps integrado
☐ Horarios actualizados

Social & Schema
☐ Open Graph tags
☐ Twitter Cards
☐ Schema.org JSON-LD
☐ Manifest.json
☐ Favicon configurado

Tracking
☐ Google Analytics
☐ Search Console
☐ Goals/Events configurados
☐ UTM parameters (ads)

Testing
☐ Mobile-Friendly Test ✅
☐ PageSpeed Insights > 90
☐ Rich Results Test ✅
☐ Links funcionando
☐ Forms funcionando
```

---

## 🎉 ¡LISTO PARA LANZAR!

Una vez completados todos los pasos, el sitio estará:
- ✅ Optimizado para SEO
- ✅ Listo para Google
- ✅ Preparado para conversiones
- ✅ Monitoreable con Analytics
- ✅ Posicionable en búsquedas

**¡Mucha suerte con el lanzamiento de Opticolorsmx!** 🚀

---

**Última actualización:** 13 de Enero de 2026
**Documentación por:** GitHub Copilot
