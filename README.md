# React Pixelate

This repo is to pixelate **Images** and **HTML Element** for React.

> This repo is inspired by [react-pixelify](https://github.com/nikoferro/react-pixelify). ImagePixelated is a typescript version of Pixelify.

## Components

- ImagePixelated
- ElementPixelated

## Installation

Using npm:
```bash
npm install react-pixelate
```

OR using yarn:
```bash
yarn add react-pixelate
```

## Demo
* Play with codesandbox:
[![Edit react-pixelate-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-pixelate-example-w80ew?fontsize=14&hidenavigation=1&theme=dark)
## Usage

Import components

```jsx
import { ImagePixelated, ElementPixelated } from "react-pixelate"
```

1. ImagePixelated Usage

```jsx
// Import image you want to pixelate
// import src from "./img.png"

<div className="App">
  <ImagePixelated src={src} width={500} height={300} fillTransparencyColor={"grey"} />
</div>
```
###### Properties

Property             | Type   |Default Value|Description                               |Required
---------------------|--------|-------------|------------------------------------------|--------
src                  | String |             | Source of the image                       |Yes
width                | Int    | Image original width| Prop to override the original width| No
height               | Int    | Image original height| Prop to override the original height| No
pixelSize            | Int    | 5                     | Size of the pixel in the new pixelated image| No 
centered             | Bool   | false                 | If true, the pixels grid will be centered vertically and horizontally. Example: You choose a pixelSize of 10, but your image width or height cant be divided by an exact grid of 10x10 pixels. Setting this prop as **true** will set an offset that keeps the grid centered | No
fillTransparencyColor| String | white                 | For images with transparency (e.g png image), you can set a value for the places where the image is transparent| No  


2. ElementPixelated

```jsx
<div className="App">
  <ElementPixelated pixelSize={5}>
    <div style={{ height: 200, width: 1000 }}>
      Text here, or any child element (including image)
    </div>
  </ElementPixelated>
</div>
```

###### Properties

Property             | Type   |Default Value|Description                               |Required
---------------------|--------|-------------|------------------------------------------|--------
children             |  JSX.Element | element inside body of ElementPixelated component | Element want to be pixelated                       |No
width                | Int    | Original offsetWidth of children| Prop to override the original width| No
height               | Int    | Original offsetHeight of children| Prop to override the original height| No
pixelSize            | Int    | 5                     | Size of the pixel in the new pixelated element| No 
centered             | Bool   | false                 | If true, the pixels grid will be centered vertically and horizontally. Example: You choose a pixelSize of 10, but your image width or height cant be divided by an exact grid of 10x10 pixels. Setting this prop as **true** will set an offset that keeps the grid centered | No 
