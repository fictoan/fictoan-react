### 0.31.12
Add `font-family` to tables, and inherit from body font.

### 0.31.11
Remove improper colour override for dark sidebar theme.

### 0.31.10
Move React & styled-components to peerDependencies

### 0.31.8
Switch to useState & useEffect for merging theme

### 0.31.7
Fix Card theme issue for setting `borderRadius`.

### 0.31.6
Fix broken builds (0.31.2 - 0.31.5)

### 0.31.2
- Set ThemeType to recursive optional typeof RFTheme.

### 0.31.1
- Export `StaticGlobalStyles`.

### 0.31.0
- Add support for passing `refs`.

### 0.30.14
- Upgrade `styled-components` from `5.0.1` to `5.1.1` for Jest reasons.

### 0.30.13
- Add `tertiary` button.

### 0.30.12
- Add `transparent` as a `defaultColour`.

### 0.30.11
- Fix incorrect centering rule.

### 0.30.10
- Make `borderRadius` themeable for cards and input fields.

### 0.30.9
- Rename `baseColors` to `defaultColours`, and `mainColors` to `customColours`.

### 0.30.8
- Memoize theme prop in ThemeProvider.

### v0.30.7
- Add missing props for theming some elements.

### v0.30.6
- Add merge to reduce size of custom overrides.

### v0.30.5
- Fix `a` tag hover colour bug.

### v0.30.4
- Fix type bug that wouldn’t let `paras` inherit `font-family`. 

### v0.30.3
- Fix lodash `merge` speed issue. 

### v0.30.0
- Remove static CSS classes from `GlobalStyles`.

### v0.29.3
- Rename `Textarea` to `TextArea`.

### v0.29.2
- Add media queries for `InfoPanel` below `1200px` to handle `width` prop.

### v0.29.1
- Add `primary`, `secondary`, and `tertiary` props for the `HRule` element.

### v0.29.0
- Add `bgColour`, `textColour`, `borderColour`, `strokeColour` and `fillColour` props with British English.

### v0.28.7
- Add `spring`, `brick` and `sienna` colour values.

### v0.28.5
- Fix `FormItem` margin bottom bug inside `FormItemGroup`. 

### v0.28.4
- Add `nano` and `micro` sizing for Text.

### v0.28.3
- Tweak links theme styling
  -  `links.default.text` is now `links.default.color`.
  -  `links.onHover.text` is now `links.onHover.color`.

### v0.28.2
- Fix Textarea styling bug
- Add `nano` and `micro` text sizes.
- Text theme tweaks
  -  `size` object deprecated.
  -  `size.default` is now `paras.size`.
  -  `size.multiplier` is now `headings.multiplier`.


### v0.27.0
- Add props for ProgressBar to display a label and value.


### v0.23.8
- Remove all SCSS files.
- Remove unused svg icon.
- Move `theme` to `styles` folder.


### v0.23.7
- Use relative path everywhere.


### v0.23.6
- Generate typings.


### v0.23.5
- Upgrade all packages.


### v0.21.2
- Update styled components.
- Remove unused component `EventHandler`.
- Fix rollup dependencies.


### v0.21.1
- Add `onCloseButtonClick` prop in `NotificationItem`.


### v0.21.0
- Code cleanup.
