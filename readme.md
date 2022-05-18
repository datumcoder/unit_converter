# Diary

## 18/05/2022

- created new **Container** component and removed duplication from **Card** component with related styles
- **Container** is taking **children** props and render it
- added prop _variant_ to **Card** to render different card color themes
- implemented **map** function to render few components inside **Container** component and removed repetitive code from **Card**

## 11/05/2022

- new file **variables.scss** where moved styles from **App.scss**
- component rename from **Cube** to **Card** to keep more descriptive name
- removed **Card.scss** import from **App.scss** - styles are available directly in **Card.jsx** component
- BEM implementation (more [here](http://getbem.com/naming/))
- class refactor and code cleaning in **Card.scss** with implementation new class names in **Card.jsx**
