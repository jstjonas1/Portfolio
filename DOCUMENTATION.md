# Portfolio Project - Complete Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Components](#components)
4. [Services](#services)
5. [Routing](#routing)
6. [Internationalization](#internationalization)
7. [Styling](#styling)
8. [Development](#development)

---

## 🎯 Project Overview

Modern, responsive portfolio website built with Angular 18 featuring:
- **Framework**: Angular 18 (Standalone Components)
- **Language Support**: German/English via ngx-translate
- **Responsive Design**: Mobile-first approach (390px, 768px, 1024px, 1440px breakpoints)
- **TypeScript**: Fully typed codebase with JSDoc documentation
- **SCSS**: Component-scoped styling with design tokens

### Key Features
- Smooth scroll navigation
- Responsive images and layouts
- Multi-language support (DE/EN)
- Contact form integration
- Project showcase
- Legal notice page
- Code health monitoring

---

## 🏗️ Architecture

### Application Structure
```
src/app/
├── app.ts                 # Root component with router-outlet
├── app.routes.ts          # Routing configuration
├── main/
│   ├── main-page.ts       # Home page container
│   ├── hero/              # Landing section
│   ├── why-me/            # Value proposition
│   ├── my-skills/         # Technical skills
│   ├── my-projects/       # Portfolio projects
│   ├── refs/              # Testimonials
│   └── contact/           # Contact form
├── legal-notice/          # Legal notice page
└── shared/
    ├── header/            # Navigation header
    ├── footer/            # Footer with links
    └── services/          # Application services
```

### Component Hierarchy
```
App (Root)
├── Header
│   ├── Logo
│   ├── Navbar
│   └── Language Switcher
├── Router Outlet
│   ├── MainPage (route: '/')
│   │   ├── Hero
│   │   ├── WhyMe
│   │   ├── MySkills
│   │   ├── MyProjects
│   │   ├── Refs
│   │   └── Contact
│   └── LegalNotice (route: '/legal-notice')
└── Footer
```

---

## 📦 Components

### Root Components

#### **App Component** (`app.ts`)
**Purpose**: Application entry point and layout structure

**Responsibilities**:
- Provides consistent header/footer across all pages
- Manages router outlet for dynamic content
- Initializes code health monitoring
- Registers all components for health checks

**Key Methods**:
- `ngOnInit()`: Registers components and runs initial health check
- `runHealthCheck()`: Manually triggers complete health check

---

#### **MainPage Component** (`main/main-page.ts`)
**Purpose**: Container for the main portfolio landing page

**Responsibilities**:
- Orchestrates all main content sections
- Maintains proper section ordering
- Manages section spacing

**Child Components**:
1. Hero - Introduction and CTA
2. WhyMe - Value proposition
3. MySkills - Technical skills
4. MyProjects - Portfolio showcase
5. Refs - Testimonials
6. Contact - Contact form

---

### Main Section Components

#### **Hero Component** (`main/hero/hero.ts`)
**Purpose**: Landing section with introduction

**Features**:
- Profile images (responsive variants)
- Developer name and title
- Primary call-to-action button
- Smooth scroll to next section

**Key Methods**:
- `scrollToNext()`: Smoothly scrolls to Why Me section

---

#### **WhyMe Component** (`main/why-me/why-me.ts`)
**Purpose**: Value proposition section

**Features**:
- Key strengths and differentiators
- Responsive layout (mobile breakpoint: 1300px)
- Bullet points with benefits

---

#### **MySkills Component** (`main/my-skills/my-skills.ts`)
**Purpose**: Technical skill showcase

**Features**:
- Skill icons with labels
- Technology stack display
- Proficiency indicators

---

#### **MyProjects Component** (`main/my-projects/my-projects.ts`)
**Purpose**: Portfolio project showcase

**Features**:
- Project previews with images
- Project descriptions
- Technology tags
- Live demo and GitHub links

**Notable Projects**:
- Join (Kanban Board)
- Pollo Loco (Browser Game)
- Sharkie (Underwater Game)

---

#### **Refs Component** (`main/refs/refs.ts`)
**Purpose**: Client testimonials and references

**Features**:
- Testimonial cards
- Client names and companies
- Rotating/carousel display

---

#### **Contact Component** (`main/contact/contact.ts`)
**Purpose**: Contact form and information

**Features**:
- Contact form with validation
- Email integration
- Social media links
- Privacy policy checkbox

---

### Shared Components

#### **Header Component** (`shared/header/header.ts`)
**Purpose**: Navigation header

**Child Components**:
- Logo: Brand identity
- Navbar: Navigation menu with smooth scroll links
- Language: DE/EN language switcher

**Features**:
- Fixed/sticky positioning
- Responsive mobile menu
- Active link highlighting

---

#### **Footer Component** (`shared/footer/footer.ts`)
**Purpose**: Footer with links and copyright

**Features**:
- Social media icons
- Legal notice link
- Copyright information
- Responsive layout

---

#### **LegalNotice Component** (`legal-notice/legal-notice.ts`)
**Purpose**: Legal notice and imprint page

**Features**:
- Imprint information
- Terms and conditions
- GDPR compliance
- Multi-language support
- HTML content rendering via innerHTML

**Content Sections**:
1. Imprint (contact details)
2. Acceptance of Terms
3. Scope and Ownership
4. Proprietary Rights
5. Use of the Product
6. Disclaimer of Warranties
7. Indemnity

---

## 🔧 Services

### **CodeHealthService** (`shared/services/code-health.service.ts`)

**Purpose**: Application health monitoring and diagnostics

**Features**:
- Component load tracking
- Responsive breakpoint validation
- Critical function testing
- Detailed health reporting

**Public Methods**:

```typescript
registerComponent(componentName: string): void
```
Registers a component as successfully loaded

```typescript
isAppHealthy(): boolean
```
Returns true if all required components are healthy

```typescript
getHealthReport(): Array<{component: string, status: boolean}>
```
Returns detailed health status for all components

```typescript
checkResponsiveDesign(): Array<{breakpoint: string, width: number, passed: boolean}>
```
Validates all responsive design breakpoints

```typescript
testCriticalFunctions(): Array<{functionName: string, passed: boolean, error?: string}>
```
Tests critical application functions (scroll, navigation, responsive layout)

```typescript
runCompleteHealthCheck(): void
```
Executes and logs complete health check to console

**Monitored Components**:
- Header
- Footer
- Hero
- WhyMe
- MySkills
- MyProjects
- Refs
- Contact

**Tested Breakpoints**:
- Mobile: 390px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1440px

---

## 🗺️ Routing

### Route Configuration (`app.routes.ts`)

| Path | Component | Title | Description |
|------|-----------|-------|-------------|
| `/` | MainPage | Jonas Stegner - Fullstack Developer | Main portfolio page |
| `/legal-notice` | LegalNotice | Legal Notice - Jonas Stegner | Legal notice and imprint |
| `/impressum` | *Redirect to /legal-notice* | - | German alias for legal notice |
| `/**` | *Redirect to /* | - | Catch-all fallback |

### Navigation
- **Header Navigation**: Smooth scroll to sections on main page
- **Footer Links**: Direct routing to legal notice
- **Browser History**: Full support for back/forward navigation

---

## 🌐 Internationalization (i18n)

### Implementation
- **Library**: ngx-translate v17.0.0
- **Loader**: @ngx-translate/http-loader v17.0.0
- **Translation Files**: `public/assets/i18n/{lang}.json`

### Supported Languages
- **German (DE)**: Default language
- **English (EN)**: Secondary language

### Translation Keys Structure
```json
{
  "hero": { "title": "...", "subtitle": "..." },
  "whyMe": { "headline": "...", "text": "..." },
  "skills": { "title": "...", "description": "..." },
  "projects": { ... },
  "refs": { ... },
  "contact": { "title": "...", "form": { ... } },
  "legalNotice": {
    "title": "...",
    "imprint": { ... },
    "acceptanceOfTerms": "...",
    ...
  }
}
```

### Usage in Components
```typescript
import { TranslateModule } from '@ngx-translate/core';

@Component({
  imports: [TranslateModule],
  ...
})

// In template:
<h1>{{ 'hero.title' | translate }}</h1>

// With HTML content:
<p [innerHTML]="'legalNotice.acceptanceOfTerms' | translate"></p>
```

---

## 🎨 Styling

### Architecture
- **Framework**: SCSS with component-scoped styles
- **Methodology**: Mobile-first responsive design
- **Design Tokens**: Centralized in `src/styles/_tokens.scss`

### Design Tokens
```scss
// Colors
$color-red: #E15544;        // Primary accent
$color-green: #3DCFB6;      // Secondary accent
$color-purple-dark: #1E0A7D; // Background
$color-purple-light: #2E1A8F; // Elevated surfaces

// Typography
$font-primary: 'Roboto Mono', monospace;
$font-secondary: 'Handjet', cursive;

// Breakpoints
$mobile: 390px;
$tablet: 768px;
$desktop: 1024px;
$large-desktop: 1440px;
```

### Responsive Breakpoints
```scss
// Mobile: 390px - 767px
@media (max-width: 768px) { ... }

// Tablet: 768px - 1023px
@media (min-width: 769px) and (max-width: 1024px) { ... }

// Desktop: 1024px - 1439px
@media (min-width: 1024px) { ... }

// Large Desktop: 1440px+
@media (min-width: 1440px) { ... }
```

### Special Considerations

#### Angular ViewEncapsulation
For dynamic HTML content (innerHTML), use `::ng-deep`:
```scss
:host ::ng-deep .dynamic-content {
  strong {
    color: $color-red !important;
  }
}
```

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm 9+
- Angular CLI 18+

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
# Runs on http://localhost:4200
```

### Build
```bash
npm run build
# Output in dist/
```

### Testing
```bash
npm test
```

### Code Health Check
The application automatically runs health checks on startup. Check browser console for:
- ✅ Component load status
- 📱 Responsive breakpoint validation
- ⚙️ Critical function tests

Manual trigger via App component's `runHealthCheck()` method.

---

## 📝 JSDoc Documentation Standards

### Component Documentation Template
```typescript
/**
 * Component Name
 * 
 * @component
 * @standalone
 * @selector app-component-name
 * 
 * @description
 * Detailed description of component purpose and features.
 * 
 * @example
 * <app-component-name></app-component-name>
 */
```

### Method Documentation Template
```typescript
/**
 * Method description
 * 
 * @public/@private/@protected
 * @param {Type} paramName - Parameter description
 * @returns {Type} Return value description
 */
```

### Service Documentation Template
```typescript
/**
 * Service Name
 * 
 * @service
 * @providedIn root
 * 
 * @description
 * Service purpose and features.
 * 
 * @example
 * constructor(private serviceName: ServiceName) {}
 */
```

---

## 🚀 Deployment

### Build for Production
```bash
ng build --configuration production
```

### Deployment Checklist
- [ ] Update environment variables
- [ ] Test all routes
- [ ] Verify responsive layouts
- [ ] Check translation completeness
- [ ] Run health check
- [ ] Validate SEO meta tags
- [ ] Test contact form
- [ ] Verify legal notice content

---

## 📞 Support

For questions or issues, contact:
- **Email**: [Contact through portfolio contact form]
- **GitHub**: Check repository issues

---

## 📄 License

This project is proprietary. Design owned by Developer Akademie GmbH.

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Angular Version**: 18.x
