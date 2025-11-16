# Orymor

## First, some bit of explanations

Since I don't do many technical tests, and it's usually a hassle, I took the opportunity to explore some new tools and have a bit of fun 😁  
Here are my choices and why:

- Astro: heard a lot about it, used to do some SSG with Gatsby, but really wanted to try it out. Since the test is a product page I didn't want to go full SPA. So it was the obvious choice! Honestly it's a nice tool, but it takes some learning. The API Routes is a really nice feature, prevent any case of CORS issue, and works a bit like edge functions.
- Zustand: Same here, tried some state management libraries (MobX, Redux, Jotai mostly), this one was next in line. Very nice to use, a bit like Jotai.
- Bruno: Yep, still the same reason 😁 A bit nicer than postman, with the possibility to add files in the repository and just use it with the correct plugin (added in recommendations for the repository)

The others are more basic choices.

- Storybook: This one is my default go to anytime I need to develop some UI. Nothing is better than it for this job. Even more with Figma integrated. The axe integration for a11y testing is very nice too.
- Vite, vitest: Vite is the default choice with Astro, but even without it, it trumps webpack on everything ES6. Same with vitest, config without astro is just a comment in vite.config, and even with a vitest.config its quite easy to setup and use.
- Atomic design: The UI is divided according to atomic design rules. I didn't add templates and pages, mostly because they were not very useful here. A template would have been nice to define how to organize the product grid + cart, but all that is done directly in the astro page.
- i18n: I started by handling locale in pathname, wanted to add some i18next for handling translations, but since I had like 3 entries.. It seemed like another waste of time. The pathname locale was fun though, since I never tried that before.
- Native CSS: Aside from mixins, native CSS can now do absolutely anything we need, so no reason to use anything else. And since I actually do like CSS, Tailwind is my nemesis.
- Responsive: Not much here, the approach is mobile first, with a reponsive grid and a hidden cart.

In general, I tried to add a bit of everything in this project, I did quite a bit of rewriting as I progressed in my exploration of astro. All stores are not equal 😅

## What's missing

The following are things I wanted to add but didn't have the time yet:

- Github Actions for testing
- E2E testing, playwright is setup though
- Testing-library same as playwright
- Netlify for some nice deployment

---

## Introduction

Orymor is a modern web application built using [Astro](https://astro.build/) and React. It uses [Zustand](https://zustand-demo.pmnd.rs/) for state management and provides an e-commerce-like cart system.

---

## What’s Inside?

- **Astro**: The core framework used for rendering the site and integrating with React components.
- **React**: Used for dynamic and interactive UI elements (like the cart).
- **Zustand**: State management for the cart and shared UI state.
- **Bruno**: API request collection and testing tool. Prebuilt workspace files allow you to query endpoints easily, using the same environment keys as the API routes.
- **API Endpoints**: Custom endpoints for cart manipulation and image handling:
  - `/api/cart` (`/api/cart/get`, `/api/cart/update`)
  - `/api/image`
- **Storybook**: UI component explorer and documentation.
- **Testing**: Vitest + Testing Library for unit and component testing.
- **Prettier & ESLint**: Code formatting and linting.

---

## Astro

[Astro](https://docs.astro.build/)

---

## API Usage

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

---

## Scripts & Commands

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
| `test:watch`      | Watch mode for tests               |
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

## Notes

- For further information, see [Astro documentation](https://docs.astro.build/), [Zustand](https://zustand-demo.pmnd.rs/), or relevant code in `/src/stores/cart.ts`.
