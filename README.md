# Full Stack Open — Part 1

My exercise submissions for [Full Stack Open](https://fullstackopen.com/en/part1) by the University of Helsinki.

## Projects

### 📚 Course Info (`part1/courseinfo`) — Exercises 1.1–1.5

A course outline display built by progressively refactoring a single component into a clean component tree.

| Exercise | What was done |
|----------|---------------|
| 1.1 | Split App into `Header`, `Content`, `Total` components |
| 1.2 | Extracted a reusable `Part` component inside `Content` |
| 1.3 | Refactored parts into objects `{ name, exercises }` |
| 1.4 | Grouped parts into an array, passed as a single prop |
| 1.5 | Wrapped everything into one `course` object |

---

### ☕ Unicafe (`part1/unicafe`) — Exercises 1.6–1.11

A feedback collection app for a fictional café. Users click Good / Neutral / Bad and see live statistics.

| Exercise | What was done |
|----------|---------------|
| 1.6 | Three feedback buttons with `useState` counters |
| 1.7 | Added computed statistics: total, average, positive % |
| 1.8 | Extracted a `Statistics` component |
| 1.9 | Extracted a reusable `StatisticLine` component |
| 1.10 | Hide statistics until at least one vote is cast |
| 1.11 | Displayed statistics in an HTML table |

---

### 💬 Anecdotes (`part1/anecdotes`) — Exercises 1.12–1.14

A random quote display app where users can vote for their favourite anecdote.

| Exercise | What was done |
|----------|---------------|
| 1.12 | Display a random anecdote on button click |
| 1.13 | Vote button with immutable array state updates |
| 1.14 | Display the anecdote with the most votes |

---

## Tech Stack

- [React](https://react.dev) with hooks (`useState`)
- [Vite](https://vitejs.dev) for project setup and dev server
- JavaScript (ES6+)

## Project Structure

```
part1/
  courseinfo/
    src/
      App.jsx
      main.jsx
    index.html
    package.json
  unicafe/
    src/
      App.jsx
      main.jsx
    index.html
    package.json
  anecdotes/
    src/
      App.jsx
      main.jsx
    index.html
    package.json
```

## Running Locally

Each project is a standalone Vite app. To run any of them:

```bash
cd part1/courseinfo   # or unicafe / anecdotes
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Course

- **Course:** [Full Stack Open](https://fullstackopen.com/en)
- **University:** University of Helsinki
- **Part:** Part 1 — Introduction to React
- **Exercises completed:** 14 / 14
