🧩 Dev Stack

Dev Stackis a responsive React web app that helps developers explore
frontend, backend, database, and tooling technologies, then build their own
personal "development stack" by picking the tools they want to use.

Browse a curated catalog of technologies, filter through cards with ratings
and difficulty levels, and add the ones you like to a live sidebar. Everything
updates instantly, with toast notifications confirming every action.

🛠️ Built With

- React (Vite) — component structure and state management
- Tailwind CSS v4 — utility-first styling and the shared gradient theme
- React-Toastify — toast alerts for add / remove / duplicate actions
- JSON — local data source for the technology catalog

✨ Features

1. Interactive stack builder** — add any technology to "Your Stack" with
   one click; duplicate adds are blocked with a warning toast, and added
   cards visually disable themselves ("✓ Added to Stack").
2. Fully responsive layout** — a 3-column technology grid on desktop,
   2 columns on tablet, and 1 column on mobile, with a collapsible hamburger
   navbar for small screens.
3. Single-source gradient theme** — the orange → pink → violet gradient
   used across the logo, hero heading, and primary buttons is defined once
   as a CSS variable, so the whole UI can be re-themed by changing one value.

🚀 Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

---

📚 React Questions

What is JSX, and why is it used in React?

JSX is a syntax extension that lets us write HTML-like markup directly inside
JavaScript. React uses it because it makes describing what a UI should look
like much easier to read and write than calling `React.createElement()` by
hand — it feels like writing plain HTML, but it's actually JavaScript under
the hood.

What is the difference between props and state?

Props are data passed into a component from its parent — the component
receiving them can't change them itself. State is data a component manages
internally and can update over time (for example, with `useState`). Props
flow down; state lives and changes inside the component that owns it.

What does the useState hook do, and where did you use it in this project?

`useState` lets a functional component hold and update its own piece of data,
and re-renders the component whenever that data changes. In this project I
used it in `App.jsx` to track the list of technologies, the loading state,
and the array of technologies the user has added to their stack.

What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs a side effect after a component renders — things like
fetching data, setting timers, or subscribing to events, which shouldn't
happen directly in the render itself. I used it in `App.jsx` to load the
technology data once when the app first mounts (with an empty dependency
array `[]`), and to briefly show a loading state before the data is ready.

Why does every item in a .map() list need a unique key prop?

React uses the `key` to tell list items apart between renders, so it knows
exactly which item was added, removed, or reordered. Without a stable unique
key, React can mix up items, re-render more than necessary, or cause bugs
when the list changes — I used each technology's `id` as the key.

What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. In `YourStack.jsx`, I check if
`stack.length === 0` — if it's empty, I show a friendly empty-state message;
otherwise, I render the list of added technologies.

How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data down to a child through props, e.g.
`<TechCard tech={tech} onAdd={handleAdd} />`. To send something back up, the
parent passes a *function* down as a prop, and the child calls that function
(usually with some data as an argument) when something happens — like
`onAdd(tech)` being called inside `TechCard` when its button is clicked. This
is often called "lifting state up."
