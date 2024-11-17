# CHANGELOG

## 1.7.0
- Add accessibility improvements for most components
- Extract `Pagination` component from `TablePagination` and make it more generic

## 1.6.0
#### ⚠️ BREAKING CHANGES ⚠️
- Colours now support opacity values
  - | Old               | New                        |
    |-------------------|----------------------------|
    | `--slate-dark-40` | `--slate-dark40`           |
    | `--red-light-20`  | `--red-light20`            |
    | —                 | `--red-light20-opacity90`  |
    | —                 | `--amber-dark20-opacity20` |
    | —                 | `--pistacho-opacity40`     |
    Basically you just have to remove the hyphen after the `light` and `dark` string for the new format, and it works on all props: `bgColour`, `textColour`, `var()` etc
  - This colour generation is now more robust, as its generated with TS, instead of SCSS.
- Removed CJS support, ESM only, because it’s 2024
- Remove Storybook, because we have configurators for each component that does the same job, but better
#### GENERIC CHANGES
- Add `Skeleton` component for loading states

## 1.5.0
- Rename `SelectWithSearch` to `ListBox` and add fuzzy search, multi-select, and custom entries capabilities

## 1.4.1
- Add `withDelete` and `onDelete` for the `Badge` component

## 1.4.0
- Add `Modal` with the new Popover API

## 1.3.12
- Add fuzzy search to `ListBox`

## 1.3.6
- Fix type checks and `useClient` directive for vite build

## 1.3.5
- Fix missing `Span` export

## 1.3.3
- Fix wrong theme values for `kbd`

## 1.3.1
- Remove exported themes to fallback to original CSS styling
- Update rendering logic for `CodeBlock`

## 1.3.0
- Remove `prism-react-renderer` dev dependency for CodeBlock
- Use `prism` with exported themes
- Fix `Accordion` toggle issue
- Update `vite.config.umd.js` to build a UMD version

## 1.2.9
- Update `ThemeProvider` to expose `setTheme` and `useTheme` functionality in any component via local storage
    - `const { theme, setTheme } = useTheme();`
- Remove the dependency of creating `RootClientSideLayout`
- Add a default theme for `CodeBlock`
- Update `vite.config.js` to retain `use client;` for Next 14+ support

## 1.2.7
- Add `button-font` for each `kind` too

## 1.2.6
- Fix `Button` active theme bug
- Add `button-font` via theme

## 1.2.5
- Fix text colour for lists
- Add `height` prop for `Divider`

## 1.2.4
- Add line numbers to `CodeBlock` component with `showLineNumbers` prop
- Add better token support
- Fix style overrides for `CodeBlock` component

## 1.2.3
- Remove `as` prop from `Heading`, so you can now use `Heading1`, `Heading2` etc

## 1.2.2
- Tweak `DropdownSelect` styles

## 1.2.1
- Add accessibility improvements for `Breadcrumbs`, and `Badge`

## 1.2.0
- Add new `Meter` component

## 1.1.1
- Fix `Breadcrumbs` style not loading
- Add resets for `Breadcrumbs` element

## 1.1.0
- Add `OptionCard` component

## 1.0.3
- Rename `HRule` to `Divider`

## 1.0.2
- Rename `ExpandableContent` to `OptionCard`

## 1.0.1
- Fix `Breadcrumbs` element type

## 1.0.0
#### GENERIC CHANGES
- Move to Vite
- Move to `pnpm` for package management
- Remove `styled-components` as a dependency
- Adopt plain CSS for styling
- Support twice as many `defaultColours`
- Use `rem` units for font sizes
- Ability to set `Element` as a flexbox/grid div using `layoutAsFlexbox` and `layoutAsGrid`
- Add `horizontalPadding`, `verticalPadding`, `horizontalMargin`, and `verticalMargin`
- Add generic block-level sectioning elements as custom components. Eg `<Div>`, `<Section>`, `<Article>` etc
- Add copy code to clipboard for `CodeBlock`
- Add `RadioTabGroup` component
- Convert all millisecond values to seconds

#### ⚠️ BREAKING CHANGES ⚠️
- Remove `ThemeProvider` and `theme` prop from all components
- Refactor `Row` and `Portion` to use CSS Grid and Flexbox both
- Import, usage and extension of `CodeBlock`
- Remove `defaultColours` object as exported
- Remove `InfoPanel` and extend `Drawer` with `position` prop
- Rename `sidePadding` and `sideMargin` to `horizontalPadding` and `horizontalMargin`
- Rename `para` to `paragraph` in CSS variables
- Rename `FormWrapper` to `Form`
- Rename `CheckBox` to `Checkbox`
- Add consistent `showWhen`, `closeWhen` and `secondsToShowFor` props for transitory components
---

### 0.46.8
- Fix `focusFirstInputOnReset` prop behaviour to properly set focus on first input on reset

### 0.46.7
- Export custom `PinInputFieldElementType` for supporting custom ref types in TypeScript

### 0.46.5
- Add an imperative reset handler to reset `PinInputField` from the parent component with ref
- Add a `focusFirstInputOnReset` prop for the above change, to opt out of focusing on first input on reset

### 0.45.5
- Add Tab component label prop to be used as reactnode for custom label

### 0.45.4
- Fix PinInputField behaviour on paste or replace at position

### 0.45.3
- Add optional `isDismissable` prop for showing a close button for `Drawer` _(true by default)_

### 0.45.2
- Fix prop name for disable copy/paste to pasteFromClipboard which takes either enabled or disabled as parameters for
  `PinInput Field`

### 0.45.1
- Export props types for all components
- Fix excess margin issue for `Tabs` labels
- Add toggle for disabling copy/paste functionality in the `PinInputField` component

### 0.45.0
- Add support for defaultTabIndex props in `Tabs` component because by default it select first tab as active tab

### 0.44.0
- Rename `style` prop for `Heading` and `Text` to `fontStyle` since `style` is a reserved
  prop name in React and causes the react/style-prop-object eslint rule to complain in any
  project with basic react-app rules setup.

### 0.43.0
- Fix npm publish action workflow
- Fix unique key issue for `Tabs`

### 0.42.3
- Update command for installing dependencies and build in CI

### 0.42.2
- Fix broken npm publish action

### 0.42.1
- Fix styling issues in `Tabs`

### 0.42.0
- Padding and margin values can now be configured via the `globals` object in the theme
- Convert utility styles into JS file from plain CSS to access props
- Refactor `TablePagination` for better theme-ing
- Tweak `notification` theme object
- Add String() constructor to theme object values
- Fix a bunch of inconsistencies in theme values

### 0.41.27
- ⚠ Breaking change: add `style` prop for `Heading` and `Text` to select font style.

### 0.41.26
- Add support for passing additional items to the navbar for `Tabs`
- Update React peer dependency version

### 0.41.25
- Export styled-components also from the project to allow component-wide over-rides

### 0.41.24
- Convert `isMono`, `isSans` and `isSerif` to a `style` enum
- Fix `isSubtext` prop for text elements
- Fix cursor-pointer on hover for `ExpandableGroup`
- Add back the right margin bottoms for `FormItem` elements inside `FormItemGroup`
- Fix margin bottom for `Checkbox` and `Switch` inside a `Form`

### 0.41.23
- Remove `line-height` property from `body` and apply it more specifically to text elements only

### 0.41.22
- Add `InputField` invalid state text theme colour
- Rework text sizes progression
- Add reset styles for `picture`
- Add `weight` prop to `Element` to be used in `span` elements
- Add types for possible font weight values

### 0.41.19
- Fix `disabled` styling for `InputField`

### 0.41.18
- Remove style overrides in Tabs component

### 0.41.17
- Add `closeOnClickOutside` prop for `InfoPanel` & `Drawer`

### 0.41.16
- Fix wrong font value for links in theme file

### 0.41.15
- `Drawer` overlay is now theme-able and style-able with props

### 0.41.14
- Overhaul `Drawer` to now come with a page overlay

### 0.41.13
- Add span types for `Portion`

### 0.41.11
- Add `spacing` prop for `PinInputField`

### 0.41.10
- Add separate theme object for `Drawer`

### 0.41.9
- Allow controlling auto-focus behaviour for `PinInputField`

### 0.41.8
- Add ability to theme disabled states for `primary`, `secondary` and `tertiary` buttons separately

### 0.41.7
- Add different letter spacing values for empty and filled `input[type=password]`

### 0.41.6
- Fix `InputField` text colour dark theme bug

### 0.41.5
- Add `spacing` and `retainLayout` props for `FormItemGroup`

### 0.41.4
- Fix bug in `onChange` implementation for `PinInputField`

### 0.41.3
- Fix missing font family for `hepText` and `errorText`

### 0.41.2
- Replace `onComplete` with `onChange` callback for `PinInputField`

### 0.41.1
- Add `PinInputField` component

### 0.40.0
- Add `Drawer` component

### 0.39.3
- Rename `timeout` prop for `Drawer` and `NotificationItem` to `showFor`
- Fix `Select` border-radius bug

### 0.39.2
- Move `unit` prop in the `Meter` from being displayed via CSS to markup

### 0.39.1
- Tweak `Badge` padding values

### 0.39.0
- Fix `Badge` line height bug
- Fix `Switch` theme colour mismatch

### 0.38.3
- Tweak `Badge` padding values

### 0.38.2
- Fix `Badge` height bug

### 0.38.1
- Add opinionated defaults for `mark` element

### 0.38.0
- Add `Badge` component

### 0.37.1
- Rename `Toast` to `Drawer` for better consistency

### 0.37.0
- Add `Toast` component

### 0.36.4
- Add `horizontallyCentreThis`, `horizontallyCenterThis`, `verticallyCentreItems`, `verticallyCenterItems`,
  `pushItemsToEnds` as props instead of class names

### 0.36.3
- Fix `Select` border-radius inheritance bug
- Fix `SidebarItemText` hover state text colour

### 0.36.2
- Fix inconsistent `tabLS` and `tabPT` props

### 0.36.1
- Add types for `Element`’s `as` attribute

### 0.36.0
- Fix text colour for nested links in sidebar for better differentiation
- Fix typo in `portionProps`
- Refactor sidebar theme object hierarchy for links and sublinks, remove `linksWrapper` object
- Mention `styled-components` requirement in the README

### 0.35.4
- Rename `tabLS` to `tabletLandscape` and `tabPT` to `tabletPortrait` for more consistency with the naming scheme and
  less ambiguity.

### 0.35.3
- Fix focus states for checkbox, switch, radio and select

### 0.35.2
- Fix theme throwing error on colour overrides
- Add custom colours to ColorPropsType and export it from library
- Fix InputField element type

### 0.35.0
**General**
- Add Storybook for easy testing and documentation
    - Each component folder now contains a `<component_name>.stories.tsx` (to create stories) and
      `<component_name>.stories.mdx` (to write docs) file
- Add make commands for easy creation of components
- Remove `name` props from RadioGroup `options` type; Add `label` and `id`
- Remove `as` from RadioButton and Checkbox props
- Make `shadow` a global prop
- Make `shape` a global prop
- Add `ExpandableContent` component which implements details and summary tags
- Add `Tag` component
- Add `opacity` as a global prop
- Divider now supports custom background colors
    - Add `hr.default` to theme
- All colour props are now typed
    - Add command (`make color-props`) to generate colour props from default colors

**Form improvements**
- Remove `isAnswers` prop from FormItem
- Remove FormItemJointGroup component
    - Add `isJoint` prop to FormItemGroup
- Remove Extra spacing after FormItemGroup
- Add `fields` and `onFieldsChange` prop to Form to allow form creation using an array of config 🎉
- RadioGroup and Select now use BaseInputComponent
- Add better and consistent help & error text for each form field
    - Make InputLabel atomic
- Add error text for Form which uses Callout component
- Add sizes to Switch component
- Make Select chevron consistent with ExpandableContent
- Make required and disabled states consistent in form fields
- Remove `name` props from RadioGroup `options` type; Add `label` and `id`

**Sidebar improvements**
- Remove `isSticky` from Sidebar footer
- `sidebar.body.bg` is now `sidebar.bg` in theme
- Add sidebar width properties to theme; SidebarHeader, SidebarFooter and SidebarItem span 100% automatically
- Remove `isSticky` from SidebarFooter, it always sticks to bottom
- Remove SidebarLink, SidebarNestedLinks and SidebarLinksWrapper
- Make SidebarHeader and SidebarFooter sticky instead of fixed to get simpler and consistent sidebar layout
- Remove `sidebar.linksWrapper.marginTop` and `sidebar.linksWrapper.marginBottom` from theme
- Remove SidebarItemsGroup and SidebarItemsGroupHeader

**New components**
- Tooltip (very basic, might overflow screens)
- Callout
- ExpandableContent
- Tag

**Removed components**
- FormItemJointGroup
- SidebarLink
- SidebarNestedLinks
- SidebarLinksWrapper
- SidebarItemsGroup
- SidebarItemsGroupHeader

## BREAKING CHANGES ⚠️
- Inside theme:
    - `inputField.default.helpText` is now `inputField.onFocus.helpText`
    - `inputField.isInvalid.helpText` is now `inputField.isInvalid.errorText`
    - `sidebar.body.bg` is now `sidebar.bg`
    - `sidebar.linksWrapper.marginTop` and `sidebar.linksWrapper.marginBottom` have been removed
- Remove `isSticky` from SidebarFooter
    - It always sticks to bottom
- Remove FormItemJointGroup
    - Use `isJoint` prop inside FormItemGroup instead
- Remove SidebarLink, SidebarNestedLinks and SidebarLinksWrapper
- Remove SidebarItemsGroup and SidebarItemsGroupHeader
    - Use ExpandableContent component instead
- Default Switch size now `medium` which is larger than before
    - Set to size `small` for old size

### 0.34.0
- Replace `react-syntax-highlighter` with `prism-react-renderer`
- Add simple wrappers for `prism-components` to import specific languages from `prismjs`
- Fix CodeBlock erratic output issue

### 0.33.15
- Fix `spinner` padding

### 0.33.14
- Add `Spinner` component

### 0.33.12
- Remove `Element` props being passed to all HTML elements as attributes
- Fix Badge `is-loading` colours

### 0.33.11
- Fix transition for `SidebarHeader`

### 0.33.10
- Add `isSticky` prop for `SidebarHeader` and `SidebarFooter`
- Add new component `SidebarLinksWrapper` to better manage `SidebarHeader` and `SidebarFooter`

### 0.33.9
- Fix `polished` imports

### 0.33.8
## BREAKING CHANGES ⚠️
- Breadcrumbs
    - `BreadcrumbWrapper` renamed to `Breadcrumbs`
    - The `separator` is now configurable in the theme file

- Badge
    - `isLoading` class now works for `custom` kind buttons also
    - Fix padding inconsistencies
    - `with-loader` and `with-delete` classes renamed to `is-loading` and `has-delete`

- Form elements
    - `input` theme object is now `inputField`
    - `Checkbox`, `RadioButton`, `Select` etc have been moved out from inside `input`

- InfoPanel
    - Dismiss button now styled differently, and does not interfere with the content

- Notifications
    - The `type` prop is now `kind` to be more consistent with the rest of the components
    - `onClose` is renamed to `onCloseCallback`
    - `NotificationWrapper` has a `order` prop to set the stacking order of `NotificationItem` children

- Meter
    - `isThin` prop is deprecated in favour of a far more flexible `height` prop
    - `shape` prop is now available just like the `Badge`

- The theme object is now called `FictoanTheme`

### 0.33.7
- Fix types for `CodeBlock`, `BaseInputElement`, `Meter`, `TextArea`, and `Select`.

### 0.33.6
- Add autoprefixer to add vendor styles to CSS

### 0.33.5
- Fix `alignText` styling for `Table` 😬

### 0.33.4
- Add `alignText` prop for `Table`

### 0.33.3
- Fix npm publish bug

### 0.33.2
- Fix CSS overrides for all components

### 0.33.1
- Support heading in `InfoPanel`

### 0.33.0
- Replace lodash with lodash-es for tree shaking
- Bump rollup to 2.52.7
- Replace `prism-react-renderer` and `prismjs` with `react-syntax-highlighter` which is more customizable and
  tree-shakable
- Add `@rollup/plugin-babel` to add /_#**PURE**_/ prefix to `React.forwardRef` which is required for tree-shaking
- Add CSS files for Normalize, Reset, Colours and Utility to move static styles out of JS. Injecting to head tag using
  `rollup-plugin-styles`
- Programmatically generate Colours.styled.tsx classes (To be added to build flow soon)

### 0.32.14
- Fix crash in tabs component

### 0.32.13
- Simplify TablePagination component (breaking)

### 0.32.10
- Add TablePagination component

### 0.32.9
- Fix `InfoPanel` close button fixed position bug

### 0.32.7
- Cap `sidePadding` and `sideMargin` for `Row` and `Divider` in ultra-wide res displays above 2400px

### 0.32.5
- Add @emotion/is-prop-valid as an optional dependency

### 0.32.
- Add ability to set Sidebar logo width via the theme

### 0.32.1
- Add Tabs component

### 0.31.22
- Remove opinionated `ul`, `ol`, and `li` styles

### 0.31.21
- Add opinionated version of Normalize.css

### 0.31.20
- Remove Normalize.css

### 0.31.19
- Add theme variables for `RadioButton`, `Checkbox` and `ToggleSwitch`

### 0.31.18
- Upgrade to React 17.0.1
- Tweak colour and font family for other input elements

### 0.31.17
- Change `fontFamily` to `font` for `Badge` component
- Fix font fallback styling inconsistency for labels, tables, and links

### 0.31.16
- Rework Notification component

### 0.31.15
- Fix `bg` of `SidebarWrapper`

### 0.31.13
- Add `size` property for `SidebarItemIcon` to be picked from theme file

### 0.31.12
- Add `font-family` to tables, and inherit from body font

### 0.31.11
- Remove improper colour override for dark sidebar theme

### 0.31.10
- Move React & styled-components to peerDependencies

### 0.31.8
- Switch to useState & useEffect for merging theme

### 0.31.7
- Fix Drawer theme issue for setting `borderRadius`

### 0.31.6
- Fix broken builds (0.31.2 - 0.31.5)

### 0.31.2
- Set ThemeType to recursive optional typeof RFTheme

### 0.31.1
- Export `StaticGlobalStyles`

### 0.31.0
- Add support for passing `refs`

### 0.30.14
- Upgrade `styled-components` from `5.0.1` to `5.1.1` for Jest reasons

### 0.30.13
- Add `tertiary` button

### 0.30.12
- Add `transparent` as a `defaultColour`

### 0.30.11
- Fix incorrect centering rule

### 0.30.10
- Make `borderRadius` themeable for cards and input fields

### 0.30.9
- Rename `baseColors` to `defaultColours`, and `mainColors` to `customColours`

### 0.30.8
- Memoize theme prop in ThemeProvider

### v0.30.7
- Add missing props for theming some elements

### v0.30.6
- Add merge to reduce size of custom overrides

### v0.30.5
- Fix `a` tag hover colour bug

### v0.30.4
- Fix type bug that wouldn’t let `paras` inherit `font-family`

### v0.30.3
- Fix lodash `merge` speed issue

### v0.30.0
- Remove static CSS classes from `GlobalStyles`

### v0.29.3
- Rename `Textarea` to `TextArea`

### v0.29.2
- Add media queries for `InfoPanel` below `1200px` to handle `width` prop

### v0.29.1
- Add `primary`, `secondary`, and `tertiary` props for the `Divider` element

### v0.29.0
- Add `bgColour`, `textColour`, `borderColour`, `strokeColour` and `fillColour` props with British English

### v0.28.7
- Add `spring`, `brick` and `sienna` colour values

### v0.28.5
- Fix `FormItem` margin bottom bug inside `FormItemGroup`

### v0.28.4
- Add `nano` and `micro` sizing for Text

### v0.28.3
- Tweak links theme styling
    - `links.default.text` is now `links.default.color`
    - `links.onHover.text` is now `links.onHover.color`

### v0.28.2
- Fix Textarea styling bug
- Add `nano` and `micro` text sizes
- Text theme tweaks
    - `size` object deprecated
    - `size.default` is now `paras.size`
    - `size.multiplier` is now `headings.multiplier`

### v0.27.0
- Add props for Meter to display a label and value

### v0.23.8
- Remove all SCSS files
- Remove unused svg icon
- Move `theme` to `styles` folder

### v0.23.7
- Use relative path everywhere

### v0.23.6
- Generate typings

### v0.23.5
- Upgrade all packages

### v0.21.2
- Update styled components
- Remove unused component `EventHandler`
- Fix rollup dependencies

### v0.21.1
- Add `onCloseButtonClick` prop in `NotificationItem`

### v0.21.0
- Code cleanup


- TODO: Make Fictoan more accessible
- TODO: ⚠️ Remove style tag in CodeBlock
- TODO: Fix Dismiss Button in NotificationItem
- TODO: Add mask design to PinInputField
- TODO: Fix Sidebar scrolling issue
- TODO: Revamp BreadCrumbs?
- TODO: Add Tooltip component
- TODO: Drag and drop file upload component
- TODO: Date picker
- TODO: Button size medium padding value

~~TODO: ⚠️ Fix TS issue in Select and SWS~~
~~TODO: ⚠️ Fix Meter height issue)~~
