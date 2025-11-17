# Orymor

## First, some bit of explanations

Since I don't do many technical tests, and it's usually a hassle, I took the opportunity to explore some new tools and have a bit of fun 😁  
Here are my choices and why:

- Astro: heard a lot about it, used to do some SSG with Gatsby, but really wanted to try it out. Since the test is a product page I didn't want to go full SPA. So it was the obvious choice! Honestly it's a nice tool, but it takes some learning. The API Routes is a really nice feature, prevent any case of CORS issue, and works a bit like edge functions.
- Zustand: Same here, tried some state management libraries (MobX, Redux, Jotai mostly), this one was next in line. Very nice to use, a bit like Jotai.
- Bruno: Yep, still the same reason 😁 A bit nicer than postman, with the possibility to add files in the repository and just use it with the correct plugin (added in recommendations for the repository) or add tests on it.

The others are more basic choices.

- Storybook: This one is my default go to anytime I need to develop some UI. Nothing is better than it for this job. Even more with Figma integrated. The axe integration for a11y testing is very nice too.
- Vite, vitest: Vite is the default choice with Astro, but even without it, it trumps webpack on everything ES6. Same with vitest, config without astro is just a comment in vite.config, and even with a vitest.config its quite easy to setup and use.
- Atomic design: The UI is divided according to atomic design rules. I didn't add templates and pages, mostly because they were not very useful here. A template would have been nice to define how to organize the product grid + cart, but all that is done directly in the astro page. And one big warning.
- i18n: I started by handling locale in pathname, wanted to add some i18next for handling translations, but since I had like 3 entries.. It seemed like another waste of time. The pathname locale was fun though, since I never tried that before.
- Native CSS: Aside from mixins, native CSS can now do absolutely anything we need, so no reason to use anything else. And since I actually do like CSS, Tailwind is my nemesis.
- Responsive: Not much here, the approach is mobile first, with a reponsive grid and a hidden cart.
- MSW: Some mocking capabilities for local development. More of a showcase, api works fine.

In general, I tried to add a bit of everything in this project, I did quite a bit of rewriting as I progressed in my exploration of astro. All stores are not equal (only products has a separated query, partly due to its need in SSG and Client) 😅

## What's missing

The following are things I wanted to add but didn't have the time yet:

- E2E testing, playwright is setup though

---

## Introduction

Orymor is a modern web application built using [Astro](https://astro.build/) and React. It uses [Zustand](https://zustand-demo.pmnd.rs/) for state management and provides an e-commerce-like cart system.

---

## Astro

[Astro](https://docs.astro.build/)

Astro is a relatively new framework to handle server side generation. The usage is quite simple:

- `astro dev` is SSR for local development
- `astro build` is SSG with islands for deployment

The usage implies separating static and dynamic content. Mostly by setting the `client:xxx` directive on components which needs to be available on client.  
By default, everything is rendered on the server.

Astro uses the same principle as NextJS, with folder structure as path.

---

## Components organisation

The components are separated in 3 distinct parts:

- `src/ui` is used as a design system. Every component is first defined here, without business logic. It's simple HTML, CSS and local state.
- `src/components` is where the app lives. It's the components linked to the app state, and the ones to use. It should be divided between `src/components/react` and `src/components/astro`, but I didn't need any particular one for Astro.
- `src/pages` is the pages themselves. I could theoratically have defined pages in DS first, then just called them here, but since I had only one page..

### API Routes

Those are different kind of pages. Astro allows us to define some api calls with page. The main difference aside from being only typescript, is the `export const prerender = false` to tell Astro "do not pre render these at dev/build time".

---

## API Usage

Every api call is proxied in an Astro API Route. It helps keep data consistent with the frontend needs, and prevents any CORS errors. Quite helpful for the image header too.

### `/api/cart`

The cart logic is available via two main endpoints:

- `GET /api/cart`  
  Returns the current list of cart products. Used to populate the Zustand store on page reload.

- `POST /api/cart/update`  
  Updates the cart with the current items in the frontend store. This endpoint receives a payload of the shape `{ items: [{ id: string, quantity: number }] }`.

The store logic ensures updates to the cart are reflected on the server automatically.

### `/api/image`

- Usage: `/api/image?src=URL`
- Dynamically proxies and/or optimizes remote images as needed.
- Use this route to serve images, ensuring they're correctly handled by Astro's image system.

### `/api/products`

- `GET /api/products`
- Since we get every products (no pagination here) it replaces the need for a POST and serve all products.
- If needed, some pagination could be added here depending on the API capabilities. Either by caching all products and returning part, or setting a custom page path param.

> A query folder is available for shared resources. Astro cannot call its own endpoint during prerender. Products query is needed both in server and client.

> A `bruno` folder is available to document and test api calls.

---

## Zustand

Zustand is used as the state manager here. Its main purpose is to keep the global state of the app, and be usable either on server or client side.  
Stores are defined to be agnostic of framework, and a hook is defined specifically for React in each store.  
React context where not a good choice IMO since they require a provider every time. Zustand store can be used anywhere, in any components. Since Astro use islands and not a full mounted app, it was the best choice IMO.

> Didn't do much with the locale, it helped me learn what could go from server to client and how to use astro middleware. Not very useful as is. Could have been interesting with some i18n and langage selector.

---

## Scripts & Commands

> ⚠️ You need to configure your `.env` first if you want to use the app. A `.env.sample` is available for structure. `API_KEY` is the provided `x-api-key`, `BASE_URL` is the api url including `/dev`

Run these via `npm` (e.g., `npm run dev`):

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `dev`             | Start the Astro dev server         |
| `build`           | Build the production site          |
| `preview`         | Preview the built production site  |
| `storybook`       | Start Storybook for UI development |
| `build-storybook` | Build the Storybook static site    |
| `test`            | Run all tests (Vitest)             |
| `test:unit`       | Run only unit tests                |
| `test:storybook`  | Test Storybook components          |
| `astro`           | All-purpose Astro CLI              |

### Examples

- **Start the dev server**
  ```bash
  npm run dev
  ```
- **Open Storybook**
  ```bash
  npm run storybook
  ```
- **Run tests**
  ```bash
  npm test
  ```

---

## MSW

You can also use mocks if you want to test it offline, a `.env.sample` is provided with minimal configuration. For mocks, just set `USE_MOCK=true` and start the app.

---

## Notes

- For further information, see [Astro documentation](https://docs.astro.build/), [Zustand](https://zustand-demo.pmnd.rs/), or relevant code in `/src/stores/cart.ts`.
