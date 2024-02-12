<p align="center" style="color: #343a40">
    <a href="https://fictoan.io"><img src="fictoan-icon.svg" alt="emotion" height="150" width="150"></a>
</p>

<h1 align="center">Fictoan-React</h1>
<p align="center" style="font-size: 1rem;">
    React version of the Fictoan framework<br>
    Fictoan is an intuitive framework for designers looking to code and rapidly iterate on UI.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/fictoan-react">
        <img src="https://img.shields.io/npm/v/fictoan-react"/>
    </a>
    <a href="https://www.npmjs.com/package/fictoan-react">
        <img src="https://img.shields.io/bundlephobia/min/fictoan-react"/>
    </a>
    <a href="LICENSE">
        <img src="https://img.shields.io/github/license/fictoan/fictoan-react"/>
    </a>
</p>

---

## Features

- Simple, straight-forward React custom props, exactly like setting properties in Figma or Sketch.
- All attributes are intuitive and in plain English.
- Most attributes and values are the same across different components.

## Getting started
1. Read the [Docs](https://fictoan.io/).

2. Install fictoan in your project

    Using `pnpm`, `yarn` or `npm`:

    ```sh
    pnpm add fictoan-react
    # or
    yarn add fictoan-react
    # or
    npm install fictoan-react
    ```

3. Start using!

    ```jsx
    import { Card } from "fictoan-react";
    
    const MyComponent = props => {
        return (
            <Card shape="rounded" bgColour="white" borderColour="slate-20" shadow="soft">
                My awesome card
            </Card>
        );
    }
    ```

---

## Storybook
Start development server for storybook

```sh
yarn storybook
```

---

## License
Licensed under the [MIT License](LICENSE).

