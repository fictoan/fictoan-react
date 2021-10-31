# Contributing

## Issues

Issues are very valuable to this project.

* Ideas are a valuable source of contributions others can make
* Problems show where this project is lacking
* With a question you show where contributors can improve the user experience

Thank you for creating them.

## Pull Requests

Pull requests are, a great way to get your ideas into this repository.

When deciding if we merge in a pull request we look at the following things:

### Does it state intent?

You should be clear which problem you're trying to solve with your contribution.

For example:

`Add link to code of conduct in README.md`

Doesn't indicate the intent of why you're doing that

`Add link to code of conduct in README.md because users don't always look in the CONTRIBUTING.md`

Tells us the problem that you have found, and the pull request shows us the action you have taken to solve it.


### Is it of good quality?

* Changes are localized, i.e., modified only the files which require changes
* Follows the indentation and file structure followed in the repository
* Component docs and README are updated for your changes 

### Does it move this repository closer to its vision?

The aim of this repository is:

* To provide resusable components with good documentation for anyone to use in their projects
* The content is usable by someone who hasn't written something like this before
* Foster a culture of respect and gratitude in the open source community

### Does it follow the contributor covenant?

This repository has a [code of conduct](CODE_OF_CONDUCT.md), This repository has a code of conduct, PRs which do not respect it will be removed.

## Creating new components

You can generate a new component template with all files using command:

```shell
make component name=<component_name>
```

Make sure `<component_name>` starts with an uppercase letter and follow component naming conventions.

## How to write documentation for components?

This repository uses [Storybook](https://storybook.js.org/) to write markdown based documentation.

Each component folder contains the following files to write stories:

* `<component>.stories.tsx` - definitions for the various stories for which you’ll write documentation

* `<component>.stories.mdx` - your actual documentation written in markdown-like syntax; this is where you’ll present the stories you defined in previous file

### Defining stories

* Any React component you export from *.stories.tsx can be a story. Stories for fictoan-react will have type `FictoanStory<typeof <component>>` (eg. `FictoanStory<typeof Button>`). 

* A util function `createStoryFromTemplate(Template)` will create a new story given a base template. For this story, the `args` property will hold the props being passed to it.

* You won’t see it in the UI until you *present* it in your documentation. To do that, open `.stories.mdx` for that component and import the story you created. Then add story to documentation like this:

```js
import * as stories from './<component>.stories';
.
.
.
<Canvas>
    <Story story={stories.<story_object_name>} />
</Canvas>
```

### Advanced story patterns

We recommend going through all components and checking how they are rendered to get a better idea.

* You can check `Form/FormWrapper/FormWrapper.stories.tsx` to see how nested children inside a component can be specified.

* If your component needs a wrapper parent component or some sibling components, check out `ContentWrapper/ContentWrapper.stories.tsx`. Remember to give `displayName` to stories which are not created using `createStoryFromTemplate()`.
