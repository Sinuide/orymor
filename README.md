# Orymor

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

## Astro In a Few Words

[Astro](https://docs.astro.build/) is a modern, content-focused static site builder for the web. It lets you ship small, fast sites by default, and easily integrate your favorite frameworks (like React) for components that need interactivity. In Orymor, Astro powers the application shell, routing, and supports server/API endpoints.

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
