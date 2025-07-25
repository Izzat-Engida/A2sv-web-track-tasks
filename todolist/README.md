To-Do List React Component

A simple, clean, and interactive To-Do List application built with React and TypeScript. It allows users to add, edit, delete, and reorder tasks easily.
Features

    Add tasks: Enter a task in the input field and click "Add" to append it to the list.

    Edit tasks: Click the "Edit" button next to a task to modify it, then save your changes.

    Delete tasks: Remove tasks from the list with the "Delete" button.

    Reorder tasks: Move tasks up or down in the list with the "☝️" (upvote) and "👇" (downvote) buttons.

    Responsive and simple styling using inline styles.

Getting Started
Prerequisites

    Node.js installed

    React environment setup (e.g., created with create-react-app or Next.js)

    TypeScript configured in your React project

Installation

    Copy the To_do_list component code into your project file, e.g., To_do_list.tsx.

    Import and use the component in your app:

import React from "react";
import To_do_list from "./To_do_list";

function App() {
  return (
    <div>
      <To_do_list />
    </div>
  );
}

export default App;

    Run your React project:

npm start
# or
yarn start

Usage

    Type a task in the input box and press Add or Enter to add it to the list.

    To edit a task, click Edit; modify the text, then click Save.

    Use Delete to remove a task.

    Use the upvote (☝️) and downvote (👇) buttons to reorder tasks by moving them up or down the list.

Component Breakdown

    tasks — State array holding all tasks (strings).

    task — State holding the current input value.

    editingIndex — State to track which task is currently being edited.

    editedTask — State for the input value when editing a task.

Handlers

    handleChange — Updates the current input value.

    taskInput — Handles adding a new task.

    handleRemoval — Deletes a task by index.

    handleUpvote and handleDownvote — Reorder tasks by swapping their positions.

    handleEditClick — Initiates editing mode for a task.

    handleSaveClick — Saves edited task and exits editing mode.

Styling

Inline styles are used for quick styling, including:

    Buttons with different background colors for Add, Edit, Delete, Save, and reorder actions.

    A responsive container with max width and padding.

    List items styled with borders, padding, and flexible layout.
    
<img width="594" height="777" alt="Screenshot 2025-07-25 085637" src="https://github.com/user-attachments/assets/8c223c4a-8ba5-49fa-88a9-a53da86d62af" />
<img width="836" height="619" alt="Screenshot 2025-07-25 090212" src="https://github.com/user-attachments/assets/e414c579-7c32-4247-97cd-9a5e0f313108" />
<img width="1081" height="736" alt="Screenshot 2025-07-25 090227" src="https://github.com/user-attachments/assets/4f2d3327-486f-41a7-ad64-368729e4837b" />
<img width="860" height="656" alt="Screenshot 2025-07-25 090245" src="https://github.com/user-attachments/assets/6e6406b7-f8c7-47d9-966c-725a974962d4" />

<img width="1038" height="811" alt="Screenshot 2025-07-25 090238" src="https://github.com/user-attachments/assets/7a6248da-1106-482a-bc6b-16bf6df797fa" />
<img width="860" height="656" alt="Screenshot 2025-07-25 090245" src="https://github.com/user-attachments/assets/ddbed370-b560-4d0a-bcb1-a6a88402cb76" />





