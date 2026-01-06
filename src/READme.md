# React DOM Fundamentals Demo

This is a small React project demonstrating **basic React concepts** including `useState`, event handling, props, forms, and conditional rendering. 
---

## Features / Components

## 1. App Component & Routing

The `App` component serves as the **main entry point** of the application.  
It uses **React Router** to handle client-side navigation and renders different demo components based on the URL.

### Key Responsibilities
- Wraps the application with `BrowserRouter`
- Displays a persistent navigation menu (`Nav` component)
- Renders demo components using `Routes` and `Route`
- Uses a flexible layout with a sidebar navigation and main content area

### 2. Counter
- Standalone counter component.
- Increment, decrement, and reset functionality.

### 3. Counter with Props
- Demonstrates passing state and functions from parent to child via props.
- Parent manages state; child triggers actions.

### 4. Color Toggle
- Changes background color between red and blue.
- Demonstrates conditional rendering and state toggling.

### 5. Form
- Registration form with `name`, `email`, and `password`.
- Displays success/error messages.
- Shows handling of controlled inputs.

### 6. List / Item
- Displays a list of items.
- Can add or remove items dynamically.

### 7. Show/Hide
- Toggles visibility of a message.
- Demonstrates conditional rendering.

### 8. Word Toggle
- Toggles a word between "Hello World!" and "Goodbye".
- Demonstrates state and toggle functionality.

## 9. Navigation (Nav Component)

- A reusable **Nav component** built with `react-router-dom`.
- Provides links to navigate between demo components.

## 10. Global Styles (CSS)

This stylesheet provides **global styling and layout** for the React demo application.

### Includes:
- CSS reset and global defaults
- Centered container layout with shadow and rounded corners
- Reusable button styles with hover effects
- Form styling with focus states
- List and item styling
- Sidebar navigation styles
- Custom modern scrollbar
- Basic responsive design for small screens

### 11. Context API + TypeScript Todo

- Simple todo app built with React Context API and TypeScript
- Add and remove todos
- Input validation prevents empty todos
- Todos persist across page reloads using sessionStorage
- Demonstrates state management without Redux

### 12. Redux + TypeScript Todo

- Simple todo app built with Redux Toolkit and TypeScript
- Add and remove todos
- Input validation prevents empty todos
- Todos persist across page reloads using sessionStorage
- Demonstrates state management with Redux using useSelector and useDispatch

### 13. Random Cat Generator

- Fetches a random cat image from The Cat API
- Uses Axios to request data from the API
- Displays a new cat image every time the user clicks the button
- Handles loading and error states
- Demonstrates event handling, useState, and dynamic rendering
- Cat images are displayed at a uniform size for a clean UI

### 14. React Testing with Jest & Testing Library

This project demonstrates unit and integration testing in a React + TypeScript application using Jest and React Testing Library.

#### Redux Todo Component

- Renders the Redux-powered Todo UI
- Adds a new todo via user interaction
- Uses @reduxjs/toolkit and react-redux provider

#### Context API Todo Component

- Renders todos from React Context
- Verifies addTodo is called on button click
- Uses a mocked Context Provider for isolation

#### FetchDemo Component

- Renders the fetch UI
- Mocks API requests using axios
- Confirms fetched data is displayed correctly

### 15. CI/CD – Vercel Deployment

This project uses GitHub Actions to implement a CI/CD pipeline that automatically tests and deploys the application to Vercel.

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/chuks2274/react-dom-fundamentals.git
cd react-dom-fundamentals