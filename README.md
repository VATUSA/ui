# VATUSA UI
A Vue 3 app designed with a modern interface and maximum interactivity.

## Tooling
For better or worse, we are using Typescript. 

## Reference
Anytime you see a `@` in a file path, the compiler underneath resolves that to `/src`.

## Nested Rendering
The initial nested rendering of `App -> Root -> <Layout> -> View` can be confusing at first, so it is explained here.


When Vue is initialized, it renders the `App.vue` component in `@/views/app`, which in turn renders `Root.vue`, which is the higher-order component that handles the initial 'loading' of the application (getting user data, pre-fetching assets, etc). Once boostrapped, `Root.vue` finally renders the layout component that is defined for the particular route set (contains the stuff that doesn't change on a page-to-page basis, like the header, footer, etc), which then renders the component that has the actual page content.

## Styleguide (CSS)
1. At all costs, avoid using "pure" colors (`#fff`, `#000`, `#f00`, etc). They are typically very harsh and displeasing. Use the Tailwind colors `gray-900` in place of black and `gray-50` in place of white.

## Code Style
In general, ESLint has been configured to handle code style. Ensure you have the ESLint extension for your favorite editor/IDE and have it set to "Fix on Save".