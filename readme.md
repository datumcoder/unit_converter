# Diary

## 12/06/2022

- **Card** component optimisation:
  - new file **Card.helpers** to store data and logic for **Card** component
  - created **calculations** function to simplify **setUnits** usage
  - simplify props for input
- created foundations for **Switch** components (to change card variant)
<hr/>

## 08/06/2022

- implementation of **useEffect**
- added condition to prevent endless input value length
- states refactor - instead of many small states, used one object with collection of units
<hr/>

## 01/06/2022

- implemented **useState** to store conversion value
- used value fro useState as a input value (controlled component - [more](https://blog.logrocket.com/controlled-vs-uncontrolled-components-in-react/) about controlled and uncontrolled components)
- implemented method to change state dynamically - **onChange**
- added value conversion for length units (_however code need to be refactored_)
<hr/>

## 28/05/2022

- introduced **@extend** Sass rule (more [here](https://sass-lang.com/documentation/at-rules/extend))
- introduced **darken** Sass function (more [here](https://sass-lang.com/documentation/modules/color#darken))
- replaced **h1** with **input**
- used ternary operator to protect **Card** component in the case of a lack of props
<hr/>

## 25/05/2022

- object destructuring
<hr/>

## 18/05/2022

- created new **Container** component and removed duplication from **Card** component with related styles
- **Container** is taking **children** props and render it
- added prop _variant_ to **Card** to render different card color themes
- implemented **map** function to render few components inside **Container** component and removed repetitive code from **Card**
<hr/>

## 11/05/2022

- new file **variables.scss** where moved styles from **App.scss**
- renamed component from **Cube** to **Card** to keep more descriptive name
- removed **Card.scss** import from **App.scss** - styles are available directly in **Card.jsx** component
- BEM implementation (more [here](http://getbem.com/naming/))
- class refactor and code cleaning in **Card.scss** with implementation new class names in **Card.jsx**
