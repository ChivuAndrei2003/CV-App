# CV-App

## Assignment

### Project Setup
- Spin up a fresh React project.
- Under `src/`, add a `components/` directory for your React components.
- Under `src/`, add a `styles/` directory for your CSS files and import them inside the components that need them.

### Application Structure
- `General Information` section for name, email, and phone number.
- `Educational Experience` section for school name, title of study, and date of study.
- `Practical Experience` section for company name, position title, main responsibilities, and employment dates (from / until).

### Form Behaviour
- Provide `Edit` and `Submit` controls (either per section or globally).
- `Submit` hides the inputs and renders the submitted values inside plain HTML elements.
- `Edit` restores the inputs with the previously submitted values pre-filled so the user can make changes and submit again.

### Implementation Notes
- You will rely heavily on React state and props, so make sure those concepts are clear before you dive in.

## React Topics To Review
- Functional components vs. class components (focus on functional components for this project).
- Passing props between parent and child components.
- Managing state with `useState`, including updating nested state.
- Controlled form inputs and handling `onChange` / `onSubmit` events.
- Conditional rendering to toggle between edit mode and display mode.
- Rendering lists with `Array.map` and using the `key` prop correctly.
- Lifting state up when multiple components need to share the same data.
