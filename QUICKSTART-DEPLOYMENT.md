# 🚀 Quick Deployment Guide

## Schnellstart: Wähle deine Hosting-Option

### Option 1: GitHub Pages (Empfohlen - Kostenlos & Automatisch)

1. **GitHub Pages aktivieren:**
   - Gehe zu: https://github.com/jstjonas1/Portfolio/settings/pages
   - Unter "Build and deployment" → Source: **GitHub Actions** auswählen

2. **Deployment-Dateien committen:**
   ```bash
   git add .
   git commit -m "Add deployment configuration"
   git push origin main
   ```

3. **Fertig!**
   - GitHub Actions baut und deployed automatisch
   - Nach ca. 2-3 Minuten ist deine Site live unter:
   - **https://jstjonas1.github.io/Portfolio/**

4. **Status prüfen:**
   - Gehe zu: https://github.com/jstjonas1/Portfolio/actions
   - Sieh dir den Deployment-Status an

---

### Option 2: Netlify (Am einfachsten)

1. **Netlify Account erstellen:**
   - https://app.netlify.com/signup
   - Mit GitHub anmelden

2. **Repository verbinden:**
   - "Add new site" → "Import an existing project"
   - GitHub authorisieren
   - Repository "Portfolio" auswählen

3. **Build-Einstellungen:**
   - Netlify erkennt `netlify.toml` automatisch
   - Oder manuell eingeben:
     - Build command: `npm run build:prod`
     - Publish directory: `dist/portfolio/browser`

4. **Deploy:**
   - "Deploy site" klicken
   - Fertig! Du bekommst eine URL wie: `your-portfolio.netlify.app`

5. **Eigene Domain (optional):**
   - Domain settings → Add custom domain
   - DNS-Einträge wie angezeigt konfigurieren

---

### Option 3: Eigener Server (Apache/Shared Hosting)

1. **Production Build erstellen:**
   ```bash
   npm run build:prod
   ```

2. **Dateien hochladen:**
   - Gehe zum Ordner: `dist/portfolio/browser`
   - Lade ALLE Dateien per FTP auf deinen Server
   - Zielordner: `/public_html/` oder `/htdocs/` oder `/html/`

3. **Wichtig:**
   - `.htaccess` muss mit hochgeladen werden
   - Alle Dateien müssen im Root-Verzeichnis oder einem Subdomain-Ordner sein

4. **Domain prüfen:**
   - Rufe deine Domain auf
   - Falls 404 Fehler: `.htaccess` prüfen
   - Falls mod_rewrite nicht aktiv: Hoster kontaktieren

---

## 🔄 Updates deployen

### GitHub Pages / Netlify:
```bash
# Einfach pushen - Deployment erfolgt automatisch
git add .
git commit -m "Update content"
git push origin main
```

### Eigener Server:
```bash
# 1. Neu bauen
npm run build:prod

# 2. Per FTP hochladen
# Oder mit rsync:
rsync -avz dist/portfolio/browser/ user@server:/var/www/html/
```

---

## ✅ Was wurde bereits vorbereitet:

- ✅ `.htaccess` - Apache Server Konfiguration
- ✅ `netlify.toml` - Netlify Konfiguration
- ✅ `.github/workflows/deploy.yml` - GitHub Actions
- ✅ `package.json` - Build Script `build:prod`
- ✅ `angular.json` - Build-Optimierungen

---

## 🧪 Vor dem Deployment testen:

```bash
# 1. Production Build testen
npm run build:prod

# 2. Build-Ordner prüfen
# Sollte sein: dist/portfolio/browser/

# 3. Lokal testen (optional)
npx http-server dist/portfolio/browser -o
```

---

## 📱 Nach dem Deployment prüfen:

- [ ] Website lädt auf Desktop
- [ ] Website lädt auf Mobile
- [ ] Navigation funktioniert
- [ ] Alle Links funktionieren
- [ ] Kontaktformular funktioniert
- [ ] Bilder werden geladen
- [ ] Sprache EN/DE wechselbar
- [ ] Impressum/Privacy erreichbar

---

## 🆘 Probleme?

**404 beim direkten Aufruf einer Unterseite:**
→ `.htaccess` fehlt oder mod_rewrite nicht aktiv

**Bilder werden nicht geladen:**
→ Pfade prüfen, sollten relativ sein

**Build-Fehler:**
```bash
rm -rf node_modules
npm install
npm run build:prod
```

**GitHub Actions schlägt fehl:**
→ Actions Tab prüfen, Fehler lesen, ggf. Node-Version anpassen

---

## 🎯 Empfehlung:

Starte mit **GitHub Pages** - es ist bereits alles vorbereitet!

Nächster Schritt:
1. Die neuen Dateien committen und pushen
2. GitHub Pages in den Settings aktivieren
3. 2-3 Minuten warten
4. Fertig!

Brauchst du Hilfe bei einem bestimmten Schritt? Frag einfach!
