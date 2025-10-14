# E-Mail Setup für das Kontaktformular

## Problem
Angular läuft im Browser und kann aus Sicherheitsgründen keine E-Mails direkt versenden. Wir benötigen einen Backend-Service.

## Lösung: Formspree (Kostenlos & Einfach)

### Schritt 1: Formspree Account erstellen
1. Gehe zu https://formspree.io
2. Klicke auf "Get Started" (kostenlos für bis zu 50 E-Mails/Monat)
3. Registriere dich mit deiner E-Mail (jstjonas@gmx.de)

### Schritt 2: Neues Formular erstellen
1. Nach dem Login klicke auf "+ New Form"
2. Gib deinem Formular einen Namen (z.B. "Portfolio Contact Form")
3. Bestätige, dass E-Mails an jstjonas@gmx.de gesendet werden sollen
4. Kopiere die "Form Endpoint URL" - sieht aus wie: `https://formspree.io/f/xyzabc123`

### Schritt 3: Endpoint in Code einsetzen
Öffne `src/app/main/contact/contact.ts` und ersetze:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

Mit deiner echten Formspree URL:
```typescript
const formspreeEndpoint = 'https://formspree.io/f/xyzabc123'; // Deine echte Form ID hier
```

### Schritt 4: Testen
1. Starte deine Anwendung: `npm start`
2. Fülle das Kontaktformular aus und sende es ab
3. Prüfe dein E-Mail-Postfach (jstjonas@gmx.de)
4. Du solltest eine E-Mail mit den Formular-Daten erhalten

## Alternative: EmailJS
Falls Formspree nicht funktioniert, kannst du auch EmailJS verwenden:

1. Registriere dich bei https://www.emailjs.com (kostenlos für 200 E-Mails/Monat)
2. Erstelle einen E-Mail Service (z.B. Gmail oder einen anderen SMTP)
3. Erstelle ein E-Mail Template
4. Installiere EmailJS: `npm install @emailjs/browser`
5. Verwende den EmailJS Code (siehe emailjs-example.ts im docs Ordner)

## Wichtig
- Die Form ID ist **öffentlich** und kann im Client-Code stehen
- Formspree verhindert automatisch Spam
- Du erhältst eine E-Mail-Bestätigung für jeden Absender
- Rate Limiting ist automatisch aktiv (verhindert Missbrauch)

## Was passiert jetzt?
1. Benutzer füllt Formular aus
2. Angular sendet Daten an Formspree
3. Formspree leitet die E-Mail an jstjonas@gmx.de weiter
4. Du erhältst die Nachricht in deinem Postfach
5. Du kannst direkt auf die E-Mail des Absenders antworten
