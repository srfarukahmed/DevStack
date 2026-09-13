# Name of the project is "DevStack"

# Description about the project

Dev Stack is a React with TypeScript project where users can explore different development technologies from the "components technologies" folder, such as technology cards, grid, and stack sidebar. Users can also create their own tech stack by adding or removing technologies. The project also has a Navbar, Hero section, Footer, and a custom loading animation. It is built using Vite and Tailwind CSS.

# Technologies Used

1. React.js
2. Tailwind CSS
3. TypeScript
4. React-Toastify (NPM Package)
5. JSON (for technology data)
6. Vite (build tool)

# Features

1. Technology Explorer – Users can view different frontend, backend, and development technologies and see useful information about each technology. The technology information comes from JSON data.

2. Technology Comparison – Users can compare different technologies side by side to see their differences and decide which technology is suitable for their project.

3. Responsive & Modern UI – The website is made with React, TypeScript, and Tailwind CSS. It works properly on both desktop and mobile screens.

# React Questions & Answers

1. What is JSX, and why is it used in React?
JSX allows us to write HTML-like code inside JavaScript. It makes React code easier to understand and helps us create UI components.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. Where State is used to store and update data inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState is used to store and update data in a React component. I used it to store and manage the selected technologies in my stack.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code when a component loads or when specific data changes. I used it to load the technology data from the JSON file when the page starts.

5. Why does every item in a `.map()` list need a unique key prop?
React uses the unique key to identify each item in a list. It helps React know which item was changed, added, or removed.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something only when a specific condition is true.

For example, when there are no technologies in the stack, I show an empty stack message:

{stack.length === 0 && (
  <p>Your stack is empty. Add some technologies!</p>
)}

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
We can pass data from the parent to the child using props.

<TechnologyCard technology={technology} />

If the child needs to send something back to the parent, the parent can pass a function as a prop. The child calls that function when an action happens.

jsx
<TechnologyCard onAdd={handleAdd} />

This allows the child component to send information or trigger an action in the parent component.
