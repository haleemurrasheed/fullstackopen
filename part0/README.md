# Part 0: Fundamentals of Web Apps

This repository contains my solutions for the exercises in Part 0 of the [Full Stack Open](https://fullstackopen.com/) course. These exercises focus on understanding the fundamental concepts of how web browsers and servers communicate.

## Exercises

### 0.4: New Note
**Objective:** Visualize the sequence of events when adding a new note in the traditional example application.
* **Key Concept:** The browser uses an HTTP `POST` request to submit form data, followed by a `302` redirect from the server, which triggers a full page reload.

### 0.5: Single Page App (SPA)
**Objective:** Visualize the sequence of events when loading the Single Page Application version of the notes page.
* **Key Concept:** The browser fetches the initial HTML, CSS, and a specific JavaScript file (`spa.js`). Unlike the traditional app, the JavaScript handles fetching the data via `JSON` and renders it directly into the `DOM` without page reloads.

### 0.6: New Note in SPA
**Objective:** Visualize the sequence of events when adding a new note in the SPA version.
* **Key Concept:** The browser sends the note data as `JSON` via an HTTP `POST` request. The server responds with a `201 Created` status code. Because it is an SPA, the browser does not reload; instead, it updates the interface dynamically using JavaScript.

## How to use these exercises
These exercises are meant to be completed by drawing sequence diagrams. I tried to view in a `.md` file extension by typing 
` ```mermaid` in the first line. Another useful options to view are  [WebSequenceDiagrams](https://www.websequencediagrams.com/) and  [Mermaid](https://mermaid.js.org/).
