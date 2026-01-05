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

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/chuks2274/react-dom-fundamentals.git
cd react-dom-fundamentals