// Keeping this file as JS because TS was throwing errors in the build
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
    red       : { hue : 0, saturation : 84 },
    salmon    : { hue : 16, saturation : 100 },
    orange    : { hue : 30, saturation : 92 },
    amber     : { hue : 40, saturation : 97 },
    yellow    : { hue : 50, saturation : 100 },
    spring    : { hue : 65, saturation : 80 },
    pistachio : { hue : 78, saturation : 54 },
    green     : { hue : 148, saturation : 50 },
    teal      : { hue : 174, saturation : 62 },
    cyan      : { hue : 176, saturation : 78 },
    sky       : { hue : 194, saturation : 97 },
    blue      : { hue : 212, saturation : 100 },
    indigo    : { hue : 237, saturation : 66 },
    violet    : { hue : 258, saturation : 55 },
    purple    : { hue : 311, saturation : 47 },
    pink      : { hue : 336, saturation : 96 },
    crimson   : { hue : 340, saturation : 64 },
    brick     : { hue : 0, saturation : 68 },
    sienna    : { hue : 15, saturation : 56 },
    brown     : { hue : 24, saturation : 34 },
    slate     : { hue : 209, saturation : 12 },
    grey      : { hue : 0, saturation : 0 },
};

const levels = 10;
const alphaLevels = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90];
const prefixes = ["bg", "text", "border"];

function generateCSS() {
    let css = ":root {\n";
    css += "  --white: hsl(0, 0%, 100%); --black: hsl(0, 0%, 0%); --transparent: transparent;\n";
    alphaLevels.forEach(alpha => {
        const alphaValue = alpha / 100;
        css += `  --white-opacity${alpha}: hsla(0, 0%, 100%, ${alphaValue}); --black-opacity${alpha}: hsla(0, 0%, 0%, ${alphaValue});\n`;
    });

    Object.entries(colors).forEach(([colorName, { hue, saturation }]) => {
        for (let i = 1; i <= (
            2 * levels - 1
        ); i++) {
            const lightness = Math.round((
                i * 100
            ) / (
                2 * levels
            ));
            if (i < levels) {
                const level = (
                    levels - i
                ) * 10;
                const baseClassName = `${colorName}-dark${level}`;
                css += `  --${baseClassName}: hsl(${hue}, ${saturation}%, ${lightness}%);\n`;
                alphaLevels.forEach(alpha => {
                    const alphaValue = alpha / 100;
                    css += `  --${baseClassName}-opacity${alpha}: hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaValue});\n`;
                });
            } else if (i > levels) {
                const level = (
                    i - levels
                ) * 10;
                const baseClassName = `${colorName}-light${level}`;
                css += `  --${baseClassName}: hsl(${hue}, ${saturation}%, ${lightness}%);\n`;
                alphaLevels.forEach(alpha => {
                    const alphaValue = alpha / 100;
                    css += `  --${baseClassName}-opacity${alpha}: hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaValue});\n`;
                });
            } else {
                css += `  --${colorName}: hsl(${hue}, ${saturation}%, ${lightness}%);\n`;
                alphaLevels.forEach(alpha => {
                    const alphaValue = alpha / 100;
                    css += `  --${colorName}-opacity${alpha}: hsla(${hue}, ${saturation}%, ${lightness}%, ${alphaValue});\n`;
                });
            }
        }
    });
    css += "}\n\n";

    Object.entries(colors).forEach(([colorName, { hue, saturation }]) => {
        for (let i = 1; i <= (
            2 * levels - 1
        ); i++) {
            const lightness = Math.round((
                i * 100
            ) / (
                2 * levels
            ));
            let baseClassName = i < levels ? `${colorName}-dark${(
                    levels - i
                ) * 10}` :
                i > levels ? `${colorName}-light${(
                    i - levels
                ) * 10}` : colorName;

            prefixes.forEach(prefix => {
                css += prefix === "border" ?
                    `.${prefix}-${baseClassName} { border: solid var(--global-border-width) var(--${baseClassName}); }\n` :
                    `.${prefix}-${baseClassName} { ${prefix === "bg" ? "background-" : ""}color: var(--${baseClassName}); }\n`;

                alphaLevels.forEach(alpha => {
                    const className = `${baseClassName}-opacity${alpha}`;
                    css += prefix === "border" ?
                        `.${prefix}-${className} { border: solid var(--global-border-width) var(--${className}); }\n` :
                        `.${prefix}-${className} { ${prefix === "bg" ? "background-" : ""}color: var(--${className}); }\n`;
                });
            });
        }
    });

    prefixes.forEach(prefix => {
        css += `.${prefix}-white { ${prefix === "bg" ? "background-" : ""}color: var(--white); }\n`;
        css += `.${prefix}-black { ${prefix === "bg" ? "background-" : ""}color: var(--black); }\n`;
        css += `.${prefix}-transparent { ${prefix === "bg" ? "background-" : ""}color: var(--transparent); }\n`;

        alphaLevels.forEach(alpha => {
            css += `.${prefix}-white-opacity${alpha} { ${prefix === "bg" ? "background-" : ""}color: var(--white-opacity${alpha}); }\n`;
            css += `.${prefix}-black-opacity${alpha} { ${prefix === "bg" ? "background-" : ""}color: var(--black-opacity${alpha}); }\n`;
        });
    });

    return css;
}

function main() {
    const css = generateCSS();
    const outputPath = path.resolve(__dirname, "../styles/colours.css");
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive : true });
    }
    fs.writeFileSync(outputPath, css);
    console.log("Generated colours.css successfully!");
}

main();
