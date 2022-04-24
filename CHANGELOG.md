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
- Rename `Toast` to `ToastItem` for better consistency

### 0.37.0
- Add `Toast` component

### 0.36.4
- Add `horizontallyCentreThis`, `horizontallyCenterThis`, `verticallyCentreItems`, `verticallyCenterItems`, `pushItemsToEnds` as props instead of class names

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
- Rename `tabLS` to `tabletLandscape` and `tabPT` to `tabletPortrait` for more consistency with the naming scheme and less ambiguity.

### 0.35.3
- Fix focus states for checkbox, switch, radio and select

### 0.35.2
- Fix theme throwing error on colour overrides
- Add custom colours to ColorPropsType and export it from library
- Fix InputField element type

### 0.35.0
**General**
- Add Storybook for easy testing and documentation
  - Each component folder now contains a `<component_name>.stories.tsx` (to create stories) and `<component_name>.stories.mdx` (to write docs) file
- Add make commands for easy creation of components
- Remove `name` props from RadioGroup `options` type; Add `label` and `id`
- Remove `as` from RadioButton and CheckBox props
- Make `shadow` a global prop
- Make `shape` a global prop
- Add `ExpandableContent` component which implements details and summary tags
- Add `Tag` component
- Add `opacity` as a global prop
- HRule now supports custom background colors
  - Add `hr.default` to theme
- All colour props are now typed
  - Add command (`make color-props`) to generate colour props from default colors

**Form improvements**
- Remove `isAnswers` prop from FormItem
- Remove FormItemJointGroup component
  - Add `isJoint` prop to FormItemGroup
- Remove Extra spacing after FormItemGroup
- Add `fields` and `onFieldsChange` prop to FormWrapper to allow form creation using an array of config 🎉 
- RadioGroup and Select now use BaseInputComponent
- Add better and consistent help & error text for each form field
  - Make InputLabel atomic
- Add error text for FormWrapper which uses Callout component
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
Breaking changes

- Breadcrumbs
  - `BreadcrumbWrapper` renamed to `BreadcrumbsWrapper`
  - The `separator` is now configurable in the theme file

- Badge
  - `isLoading` class now works for `custom` kind buttons also
  - Fix padding inconsistencies
  - `with-loader` and `with-delete` classes renamed to `is-loading` and `has-delete`

- Form elements
  - `input` theme object is now `inputField`
  - `CheckBox`,  `RadioButton`, `Select` etc have been moved out from inside `input`

- InfoPanel
  - Dismiss button now styled differently, and does not interfere with the content

- Notifications
  - The `type` prop is now `kind` to be more consistent with the rest of the components
  - `onClose` is renamed to `onCloseCallback`
  - `NotificationWrapper` has a `order` prop to set the stacking order of `NotificationItem` children

- ProgressBar
  - `isThin` prop is deprecated in favour of a far more flexible `height` prop
  - `shape` prop is now available just like the `Badge`

- The theme object is now called `FictoanTheme`

### 0.33.7
- Fix types for `CodeBlock`, `BaseInputElement`, `ProgressBar`, `TextArea`, and `Select`.

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
- Replace `prism-react-renderer` and `prismjs` with `react-syntax-highlighter` which is more customizable and tree-shakable
- Add `@rollup/plugin-babel` to add /*#__PURE__*/ prefix to `React.forwardRef` which is required for tree-shaking
- Add CSS files for Normalize, Reset, Colours and Utility to move static styles out of JS. Injecting to head tag using `rollup-plugin-styles`
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
- Cap `sidePadding` and `sideMargin` for `Row` and `HRule` in ultra-wide res displays above 2400px

### 0.32.5
- Add @emotion/is-prop-valid as an optional dependency

### 0.32.3
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
- Add theme variables for `RadioButton`, `CheckBox` and `ToggleSwitch`

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
- Fix ToastItem theme issue for setting `borderRadius`

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
- Add `primary`, `secondary`, and `tertiary` props for the `HRule` element

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
  -  `links.default.text` is now `links.default.color`
  -  `links.onHover.text` is now `links.onHover.color`

### v0.28.2
- Fix Textarea styling bug
- Add `nano` and `micro` text sizes
- Text theme tweaks
  -  `size` object deprecated
  -  `size.default` is now `paras.size`
  -  `size.multiplier` is now `headings.multiplier`


### v0.27.0
- Add props for ProgressBar to display a label and value


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
