# 📤 FileZilla Upload-Anleitung für deinen Server

## ✅ Was du hochladen musst:

### Ordner mit allen Dateien:
```
C:\vsprojects\portfolio\portfolio\dist\portfolio\browser\
```

### Inhalt dieses Ordners:
```
.htaccess          ← WICHTIG! Muss mit hochgeladen werden!
index.html
favicon.ico
main-IJSYZUXQ.js
polyfills-5CFQRCPP.js
styles-OU5JCQBS.css
assets/            ← Ganzer Ordner mit allen Unterordnern
```

---

## 🚀 Schritt-für-Schritt mit FileZilla:

### 1. **FileZilla öffnen**
   - Verbinde dich mit deinem Server
   - Host: `ftp.deine-domain.de` (oder IP)
   - Benutzername: dein FTP-User
   - Passwort: dein FTP-Passwort
   - Port: 21 (oder 22 für SFTP)

### 2. **Richtigen Ordner auf dem Server finden**
   Navigiere auf dem Server (rechte Seite) zu einem dieser Ordner:
   - `/public_html/` (meistens)
   - `/htdocs/`
   - `/html/`
   - `/www/`
   
   **💡 Tipp:** Das ist der Ordner, wo normalerweise die `index.html` liegt

### 3. **Dateien hochladen**
   
   **Lokal (linke Seite):**
   - Navigiere zu: `C:\vsprojects\portfolio\portfolio\dist\portfolio\browser\`
   
   **Server (rechte Seite):**
   - Sollte im Root-Ordner sein (z.B. `/public_html/`)
   
   **Hochladen:**
   - Markiere ALLE Dateien und Ordner im `browser` Ordner
   - Rechtsklick → "Upload" (oder einfach rüberziehen)
   - Warte bis alles hochgeladen ist

### 4. **Wichtig: .htaccess prüfen**
   - Die `.htaccess` Datei MUSS mit hochgeladen werden!
   - Manchmal ist sie versteckt
   - In FileZilla: `Server` → `Erzwinge Anzeige versteckter Dateien`
   - Prüfe auf dem Server, ob `.htaccess` vorhanden ist

---

## 📁 Dateistruktur auf dem Server:

Nach dem Upload sollte es so aussehen:

```
/public_html/
├── .htaccess           ← MUSS da sein!
├── index.html
├── favicon.ico
├── main-IJSYZUXQ.js
├── polyfills-5CFQRCPP.js
├── styles-OU5JCQBS.css
└── assets/
    ├── i18n/
    │   ├── de.json
    │   └── en.json
    └── img/
        └── (alle deine Bilder)
```

---

## ✅ Nach dem Upload testen:

1. **Website aufrufen:**
   - Gehe zu deiner Domain: `http://deine-domain.de`
   - Du solltest dein Portfolio sehen

2. **Navigation testen:**
   - Klicke auf die verschiedenen Menüpunkte
   - Alle sollten funktionieren (dank `.htaccess`)

3. **Direkter Link testen:**
   - Versuche: `http://deine-domain.de/legal-notice`
   - Sollte funktionieren (wenn nicht: `.htaccess` fehlt)

---

## 🆘 Fehlerbehebung:

### ❌ Problem: "404 Not Found" beim Aufrufen
**Lösung:** 
- Dateien liegen im falschen Ordner
- Verschiebe sie in den Root-Ordner (`/public_html/`)

### ❌ Problem: "403 Forbidden"
**Lösung:**
- Dateirechte prüfen
- In FileZilla: Rechtsklick auf `index.html` → Dateiattribute
- Setze auf: `644` (für Dateien) und `755` (für Ordner)

### ❌ Problem: Navigation funktioniert nicht (404 bei Unterseiten)
**Lösung:**
- `.htaccess` fehlt oder wird ignoriert
- Prüfe ob `.htaccess` auf dem Server ist
- Falls dein Server Nginx verwendet, brauchst du eine andere Konfiguration (sag Bescheid!)

### ❌ Problem: Bilder werden nicht angezeigt
**Lösung:**
- `assets/` Ordner fehlt
- Lade den ganzen `assets/` Ordner mit allen Unterordnern hoch

### ❌ Problem: Seite ist weiß/leer
**Lösung:**
- JavaScript-Dateien fehlen
- Lade ALLE `.js` Dateien nochmal hoch
- Browser-Cache leeren (Strg + F5)

---

## 🔄 Updates hochladen:

Wenn du später Änderungen machst:

1. **Lokal:**
   ```bash
   npm run build:prod
   ```

2. **FileZilla:**
   - Lösche ALLE alten Dateien auf dem Server
   - Lade die neuen Dateien aus `dist/portfolio/browser/` hoch
   - ODER: Überschreibe einfach alle Dateien

**💡 Tipp:** Die JavaScript-Dateien bekommen neue Namen (z.B. `main-NEUER-HASH.js`), daher am besten alles neu hochladen.

---

## 📊 Checkliste:

Bevor du hochlädst:
- [ ] `npm run build:prod` ausgeführt
- [ ] Build erfolgreich (keine roten Fehler)
- [ ] Ordner `dist/portfolio/browser/` existiert

Beim Hochladen:
- [ ] Mit Server verbunden
- [ ] Im richtigen Ordner (`/public_html/` o.ä.)
- [ ] ALLE Dateien markiert
- [ ] Upload gestartet
- [ ] `.htaccess` ist auf dem Server sichtbar

Nach dem Upload:
- [ ] Website lädt
- [ ] Navigation funktioniert
- [ ] Bilder werden angezeigt
- [ ] Kontaktformular funktioniert
- [ ] Mobile Ansicht funktioniert

---

## 🎯 Zusammenfassung:

1. ✅ Build erstellt: `npm run build:prod`
2. 📁 Ordner: `C:\vsprojects\portfolio\portfolio\dist\portfolio\browser\`
3. 📤 FileZilla: Alle Dateien nach `/public_html/` hochladen
4. ✅ Testen: `http://deine-domain.de`

**Das war's! Deine Website sollte jetzt online sein! 🎉**

Hast du Fragen oder läuft etwas nicht? Sag Bescheid!
