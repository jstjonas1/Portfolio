# Angular Portfolio - Deployment Guide

## 🚀 Hosting-Optionen

Du hast mehrere Möglichkeiten, dein Angular Portfolio zu hosten:

### 1. **GitHub Pages** (Kostenlos & Einfach) ⭐ EMPFOHLEN

#### Vorteile:
- ✅ Völlig kostenlos
- ✅ Automatisches Deployment via GitHub Actions
- ✅ SSL/HTTPS inklusive
- ✅ Schnelles CDN

#### Setup-Schritte:

1. **Repository-Einstellungen**
   - Gehe zu: `https://github.com/jstjonas1/Portfolio/settings/pages`
   - Source: "GitHub Actions"

2. **GitHub Actions Workflow erstellen**
   ```bash
   # Erstelle Ordner für Workflow (falls nicht vorhanden)
   mkdir .github\workflows
   ```

3. **Build & Deploy Script**
   Die Datei `.github/workflows/deploy.yml` wird automatisch erstellt

4. **Base-URL anpassen**
   In `angular.json` wurde bereits konfiguriert für Subdomain-Deployment

5. **Push zum Repository**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

6. **Deployment läuft automatisch**
   - Nach dem Push wird die App automatisch gebaut und deployed
   - Deine Website ist erreichbar unter: `https://jstjonas1.github.io/Portfolio/`

---

### 2. **Netlify** (Kostenlos, Sehr benutzerfreundlich)

#### Vorteile:
- ✅ Kostenlos für persönliche Projekte
- ✅ Automatisches Deployment bei Git Push
- ✅ Eigene Domain möglich
- ✅ SSL inklusive
- ✅ Sehr einfach einzurichten

#### Setup-Schritte:

1. **Netlify Account**
   - Gehe zu: https://www.netlify.com
   - Registriere dich mit deinem GitHub Account

2. **Neues Projekt erstellen**
   - "New site from Git" klicken
   - GitHub Repository auswählen: `jstjonas1/Portfolio`
   - Build Settings:
     - Build command: `npm run build:prod`
     - Publish directory: `dist/portfolio/browser`

3. **Netlify Configuration File** (bereits erstellt als `netlify.toml`)

4. **Deploy**
   - Netlify deployed automatisch bei jedem Git Push
   - Du bekommst eine URL wie: `https://dein-portfolio.netlify.app`

---

### 3. **Vercel** (Kostenlos, Speziell für Frontend)

#### Vorteile:
- ✅ Kostenlos
- ✅ Sehr schnell
- ✅ Automatisches Deployment
- ✅ Eigene Domain möglich

#### Setup-Schritte:

1. **Vercel Account**
   - Gehe zu: https://vercel.com
   - Registriere dich mit GitHub

2. **Projekt importieren**
   - "Import Project" klicken
   - GitHub Repository auswählen
   - Framework: Angular automatisch erkannt
   - Deploy klicken

3. **Fertig!**
   - Du bekommst eine URL wie: `https://portfolio-username.vercel.app`

---

### 4. **Eigener Server / Shared Hosting** (Apache/Nginx)

#### Für Apache Server:

1. **Projekt bauen**
   ```bash
   npm run build:prod
   ```

2. **Build-Ordner hochladen**
   - Navigiere zu `dist/portfolio/browser`
   - Lade alle Dateien per FTP/SFTP auf deinen Server
   - Zielordner: `/public_html/` oder `/htdocs/`

3. **`.htaccess` ist bereits konfiguriert**
   - Wird automatisch mit dem Build kopiert
   - Kümmert sich um URL-Routing
   - Aktiviert Caching & Compression

4. **Domain einrichten**
   - Stelle sicher, dass die Domain auf den richtigen Ordner zeigt

#### Für Nginx Server:

1. **Nginx Konfiguration**
   Erstelle/bearbeite `/etc/nginx/sites-available/portfolio`:

   ```nginx
   server {
       listen 80;
       server_name deine-domain.de;
       root /var/www/portfolio/browser;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Caching für statische Assets
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Gzip Compression
       gzip on;
       gzip_types text/css application/javascript image/svg+xml;
   }
   ```

2. **SSL mit Let's Encrypt** (optional aber empfohlen)
   ```bash
   sudo certbot --nginx -d deine-domain.de
   ```

---

## 📦 Build-Prozess

### Production Build erstellen:
```bash
npm run build:prod
```

### Build-Ausgabe:
- Ordner: `dist/portfolio/browser/`
- Dieser Ordner enthält alle optimierten Dateien
- Diese Dateien müssen auf den Server

### Was passiert beim Build?
- ✅ Code wird minimiert (minified)
- ✅ CSS wird optimiert
- ✅ Bilder werden komprimiert
- ✅ Alle Dateien bekommen Hash-Namen für Caching
- ✅ `.htaccess` wird kopiert

---

## 🔧 Wichtige Konfigurationsdateien

### Bereits erstellt:
- ✅ `.htaccess` - Apache Server Konfiguration
- ✅ `angular.json` - Build-Konfiguration
- ✅ `package.json` - Build-Scripts

### Optional (werden bei Bedarf erstellt):
- `netlify.toml` - Netlify Konfiguration
- `.github/workflows/deploy.yml` - GitHub Actions

---

## 🌐 Domain einrichten

### Bei GitHub Pages:
1. Settings → Pages → Custom domain
2. Deine Domain eintragen
3. DNS bei deinem Domain-Anbieter:
   - CNAME Record: `www` → `jstjonas1.github.io`
   - A Records für Apex Domain (optional)

### Bei Netlify/Vercel:
1. Domain Settings im Dashboard
2. Domain hinzufügen
3. Nameserver oder DNS-Einträge anpassen

---

## ✅ Deployment Checklist

- [ ] Production Build testen: `npm run build:prod`
- [ ] Alle Bilder optimiert?
- [ ] Links funktionieren?
- [ ] Formular (Formspree) getestet?
- [ ] Responsive Design auf verschiedenen Geräten getestet?
- [ ] Browser-Kompatibilität geprüft?
- [ ] Meta-Tags für SEO vorhanden?
- [ ] Favicon vorhanden?
- [ ] SSL/HTTPS aktiv?
- [ ] Google Analytics eingerichtet? (optional)

---

## 🆘 Troubleshooting

### Problem: 404 bei direktem Aufruf einer URL
**Lösung**: `.htaccess` (Apache) oder Nginx-Konfiguration prüfen

### Problem: Bilder werden nicht geladen
**Lösung**: Pfade in den Components prüfen (müssen relativ sein)

### Problem: Build-Fehler
**Lösung**: 
```bash
# Cache löschen und neu installieren
rm -rf node_modules package-lock.json
npm install
npm run build:prod
```

---

## 📊 Performance-Optimierung (Optional)

### Nach dem Deployment:
1. **Google PageSpeed Insights** testen
2. **Lighthouse** Report durchführen
3. Bilder in WebP konvertieren (optional)
4. Lazy Loading prüfen

---

## 🎯 Empfehlung für dich:

**Ich empfehle GitHub Pages oder Netlify:**

### GitHub Pages:
- Kostenlos
- Einfach
- Bereits mit deinem Repo verbunden
- URL: `jstjonas1.github.io/Portfolio`

### Netlify:
- Noch einfacher Setup
- Bessere Performance
- Eigene Domain kostenlos möglich
- Bessere Analytics

**Welche Option möchtest du nutzen? Ich kann dir dann die spezifische Konfiguration erstellen!**
