# Diary

## 28/05/2022

- introduced **@extend** Sass rule (more [here](https://sass-lang.com/documentation/at-rules/extend))
- introduced **darken** Sass function (more [here](https://sass-lang.com/documentation/modules/color#darken))
- replaced _h1_ with _input_
- used ternary operator to protect component in the case of a lack of props

## 25/05/2022

- object destructuring

## 18/05/2022

- created new **Container** component and removed duplication from **Card** component with related styles
- **Container** is taking **children** props and render it
- added prop _variant_ to **Card** to render different card color themes
- implemented **map** function to render few components inside **Container** component and removed repetitive code from **Card**

## 11/05/2022

- new file **variables.scss** where moved styles from **App.scss**
- renamed component from **Cube** to **Card** to keep more descriptive name
- removed **Card.scss** import from **App.scss** - styles are available directly in **Card.jsx** component
- BEM implementation (more [here](http://getbem.com/naming/))
- class refactor and code cleaning in **Card.scss** with implementation new class names in **Card.jsx**
