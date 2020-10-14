<p align="center" style="color: #343a40">
  <a href="https://fictoan.io"><img src="fictoan-logo.svg" alt="emotion" height="150" width="150"></a>
  <h1 align="center">FICTOAN-React</h1>
</p>
<p align="center" style="font-size: 1.2rem;">React version of the FICTOAN framework</p>
<p align="center">
<a href="https://www.npmjs.com/package/fictoan-react"><img src="https://img.shields.io/npm/v/fictoan-react"/></a>
<a href="https://www.npmjs.com/package/fictoan-react"><img src="https://img.shields.io/bundlephobia/min/fictoan-react"/></a>
<a href="LICENSE"><img src="https://img.shields.io/github/license/fictoan/fictoan-react"/></a>
</p>

FICTOAN is an intuitive framework for designers looking to code interfaces.

## Features
- Simple, straight-forward React custom props, exactly like setting properties in a design app.
- All Attributes are intuitive and in plain English.
- Most attributes are also the same across different components.

## Getting Started
Install using `yarn`:
```sh
yarn add fictoan-react
```
Or `npm`:
```sh
npm install fictoan-react
```

And start using!
```jsx
import { Card } from "fictoan-react";

const MyComponent = props => {
    return (
        <Card shape="rounded" bgColour="white" borderColour="slate-20" shadow="soft">
            My Awesome Card
        </Card>
    );
}
```

## License
Licensed under the [MIT License](LICENSE).

