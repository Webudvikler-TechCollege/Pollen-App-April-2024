# Pollen-App-April-2024
Bygget i HTML, SCSS og Javascript.

## Javascript Modules
Sitet bruger javascript modules. Det betyder at du kan eksportere og importere enkelte funktionskomponenter.

Det kræver at du tilføjer en attribut til javascript referencen i din html.

Eksempel:
```html
<script src="./assets/js/bundle.js" type="module" />
```
## SCSS
Sitet kører også med scss. Det betyder at du skal have installeret en SASS compiler i din VS Code og slå Watch SASS til når du koder.

## Filstruktur
Her følger en forklaring til filstrukturen.

| Mappe     | Forklaring |
|-----------|-------|
| /Assets    | Bruges til  at organisere og opbevare ressourcer såsom billeder, ikoner, skrifttyper, scripts og css filer. |
| /Assets/js     | Mappe til alle vores javascript filer    |
| /Assets/js/Components | Genbrugelige kodeblokke eller byggesten, der indeholder både udseende og funktionalitet.    |
| /Assets/js/Utils/ | Forkortelse for *utilities* og er hjælpefunktioner eller værktøjer, der gør det lettere at udføre bestemte opgaver. Eksempelvis dato og api funktioner.
| /Assets/js/bundles.js | Samling af JS moduler. Betyder at man kun skal kalde en fil fra sin HTML side.
