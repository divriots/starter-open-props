[![backlight.dev](https://img.shields.io/badge/Open%20in-Backlight.dev%20editor-%23f8c307)](https://backlight.dev/preview/Tve1ObNsVqRX7NlkUnzD)
[![Github Repo](https://img.shields.io/github/last-commit/divriots/starter-open-props)](https://github.com/divriots/starter-open-props)

# Open Props Tech Sample <br/><small>_by_ ‹div›RIOTS</small>

This is a _Technology Sample_ you can rely on to build your own Design System, based on [Open Props](https://open-props.style/).

**Disclaimer**: _Technology Samples_ aren't comprehensive _Design Systems_ but showcases a given technology so you free to build you own solution upon it.

## Architecture

This _tech sample_ uses [Open Props](https://open-props.style/) to implement its components. Open Props is a comprehensive collection of CSS Custom Properties (also known as CSS variables), allowing you to access a set of pre-defined variables ready to be used, as well as redefining them for your own needs. You can also use them as a foundation for an advanced theming solution like [Tailwindcss](tailwindcss.com/).

The components in this Tech Sample use [Scss](https://sass-lang.com/) for their internal styles, relying on CSS Custom Properties for Tokens access.

### Tokens

The Tokens are split in different components, following the [Open Props structure](https://open-props.style/#overview):

- `colors`: colors and variants
- `gradients`: collection of pre-defined gradients
- `shadows`: inset and shadows
- `aspect-ratios`: collection of different ratios for your `box`-ed elements
- `sizes`: differents sizes in relative units

## Documentation

Documentation pages are using the [@divriots/dockit-core](https://github.com/divriots/dockit-core) documentation framework to preview the different tokens. See the `doc-layout` component.

---

## Resources

- [Open Props](https://open-props.style/)
- [@argyleink](https://twitter.com/argyleink): Creator of Open Props
- [Coding Design System - Open Props - Part.1](https://youtu.be/k5rnRNCKz_4): Live Coding session showing the implementation of this Starter Kit
