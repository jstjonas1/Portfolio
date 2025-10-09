# ngx-translate Integration Guide

## Übersicht
Das Portfolio verwendet jetzt **ngx-translate** für die Mehrsprachigkeit (Deutsch/Englisch).

## Was wurde bereits implementiert?

### 1. Installation
```bash
npm install @ngx-translate/core @ngx-translate/http-loader --save
```

### 2. Konfiguration (app.config.ts)
- TranslateService ist global konfiguriert
- Standard-Sprache: Englisch (EN)
- Übersetzungsdateien: `public/assets/i18n/en.json` und `de.json`

### 3. Übersetzungsdateien
- **EN**: `public/assets/i18n/en.json`
- **DE**: `public/assets/i18n/de.json`

Alle Texte sind bereits übersetzt und strukturiert nach:
- nav (Navigation)
- hero (Hero Section)
- whyMe (Why Me Section)
- skills (Skills Section)
- projects (Projects Section)
- references (References Section)
- contact (Contact Section)
- footer (Footer)

### 4. Language Toggle (funktioniert bereits)
- Die Language-Komponente speichert die gewählte Sprache in localStorage
- Beim Neuladen wird die gespeicherte Sprache automatisch geladen

### 5. Beispiel: Navbar (bereits implementiert)
```html
<a href="#why-me" class="menu-link">{{ 'nav.whyMe' | translate }}</a>
```

## Wie man Übersetzungen in anderen Komponenten verwendet

### Schritt 1: TranslateModule importieren
In der TypeScript-Datei der Komponente:

```typescript
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-your-component',
  imports: [TranslateModule], // Hier hinzufügen!
  templateUrl: './your-component.html',
  styleUrl: './your-component.scss'
})
export class YourComponent { }
```

### Schritt 2: Translation Pipe im Template verwenden

#### Einfacher Text:
```html
<h2>{{ 'whyMe.title' | translate }}</h2>
```

#### Text mit HTML (innerHTML):
```html
<p [innerHTML]="'skills.challengeText' | translate"></p>
```

#### In Attributen:
```html
<img [alt]="'hero.name' | translate">
<button [title]="'hero.letsTalk' | translate">
```

## Beispiele für jede Section

### Hero Section
```html
<!-- hero.html -->
<div class="job-title-mobile">{{ 'hero.title' | translate }}</div>
<h1 class="hero-name">{{ 'hero.name' | translate }}</h1>
<a href="#contact" class="hero-btn">{{ 'hero.letsTalk' | translate }}</a>
```

```typescript
// hero.ts
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule],
  ...
})
```

### Why Me Section
```html
<!-- why-me.html -->
<h2 class="why-me-headline">{{ 'whyMe.title' | translate }}</h2>
<p class="about-text">{{ 'whyMe.description' | translate }}</p>
<span class="i-am-label">{{ 'whyMe.iAm' | translate }}</span>
<span class="location-text" [innerHTML]="'whyMe.location' | translate"></span>
<span class="relocation-text" [innerHTML]="'whyMe.relocation' | translate"></span>
<span class="remote-text" [innerHTML]="'whyMe.remote' | translate"></span>
<a class="why-me-btn">{{ 'whyMe.button' | translate }}</a>
```

### Skills Section
```html
<!-- my-skills.html -->
<h2 class="section-title">{{ 'skills.title' | translate }}</h2>
<span class="skill-name">{{ 'skills.angular' | translate }}</span>
<span class="skill-name">{{ 'skills.typescript' | translate }}</span>
<!-- Challenge Text mit HTML -->
<div class="mobile-challenge-text" [innerHTML]="'skills.challengeText' | translate"></div>
<a class="mobile-lets-talk-btn">{{ 'skills.letsTalk' | translate }}</a>
```

### Projects Section
```html
<!-- my-projects.html -->
<h2 class="section-title">{{ 'projects.title' | translate }}</h2>

<!-- Join Project -->
<h3 class="project-title">{{ 'projects.join.title' | translate }}</h3>
<p class="project-description">{{ 'projects.join.description' | translate }}</p>
<span class="project-tech">{{ 'projects.join.technologies' | translate }}</span>
<a class="project-link">{{ 'projects.github' | translate }}</a>
<a class="project-link-primary">{{ 'projects.liveTest' | translate }}</a>
```

### References Section
```html
<!-- refs.html -->
<h2 class="refs-headline">{{ 'references.title' | translate }}</h2>

<!-- Noah Mueller -->
<h3 class="reference-name">{{ 'references.noah.name' | translate }}</h3>
<p class="reference-project">{{ 'references.noah.project' | translate }}</p>
<p class="reference-text">{{ 'references.noah.text' | translate }}</p>
```

### Contact Section
```html
<!-- contact.html -->
<h2 class="contact-title">{{ 'contact.title' | translate }}</h2>
<h3 class="contact-subtitle">{{ 'contact.subtitle' | translate }}</h3>
<p class="contact-description">{{ 'contact.description' | translate }}</p>
<p class="need-developer" [innerHTML]="'contact.needDeveloper' | translate"></p>

<!-- Form -->
<input [placeholder]="'contact.form.name' | translate">
<input [placeholder]="'contact.form.email' | translate">
<textarea [placeholder]="'contact.form.message' | translate"></textarea>
<label [innerHTML]="'contact.form.privacy' | translate"></label>
<button>{{ 'contact.form.send' | translate }}</button>

<!-- Errors -->
<span class="error">{{ 'contact.errors.nameRequired' | translate }}</span>
```

### Footer
```html
<!-- footer.html -->
<a>{{ 'footer.imprint' | translate }}</a>
<a>{{ 'footer.privacy' | translate }}</a>
```

## Wichtige Hinweise

1. **innerHTML für HTML-Content**: Wenn der Übersetzungstext HTML enthält (z.B. `<br>` Tags), verwende `[innerHTML]`:
   ```html
   <span [innerHTML]="'whyMe.location' | translate"></span>
   ```

2. **TranslateModule muss importiert werden**: In jeder Komponente, die Übersetzungen verwendet!

3. **localStorage**: Die gewählte Sprache wird automatisch gespeichert und beim Neuladen wiederhergestellt.

4. **Neue Übersetzungen hinzufügen**: 
   - Bearbeite `public/assets/i18n/en.json` und `de.json`
   - Verwende die gleiche Struktur wie die bestehenden Übersetzungen

## Nächste Schritte

Aktualisiere die folgenden Komponenten:
1. ✅ Navbar (bereits fertig)
2. ⏳ Hero
3. ⏳ Why Me
4. ⏳ My Skills
5. ⏳ My Projects
6. ⏳ References
7. ⏳ Contact
8. ⏳ Footer

Für jede Komponente:
1. `TranslateModule` in `imports` hinzufügen
2. Texte durch `{{ 'key' | translate }}` ersetzen
3. Testen mit DE/EN Toggle
