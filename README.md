# Online Library System

🔗 **GitHub Repository:** https://github.com/mcajoydeb/online-library

---

## Overview

The **Online Library System** is a modern React application that allows users to browse, search, and manage books. Users can explore different categories, view detailed information about books, and add new books to the library.

This project is built as part of a React assignment using **Vite, React Router, Redux Toolkit, and Tailwind CSS**.

---

## Features

### Home Page

* Welcome message and clean UI
* Book categories (Fiction, Non-Fiction, Sci-Fi)
* Popular books displayed as cards

### Browse Books

* View all books
* Filter by category (`/books/:category`)
* Search by title or author
* Responsive card layout

### Book Details

* Dynamic routing (`/book/:id`)
* Displays full book information
* Rating, category, and description
* Modern UI layout

### Add Book

* Add new books using a form
* Form validation
* Redux state management
* Redirect after submission

### Data Persistence

* Uses **localStorage**
* Data remains after page refresh

### 404 Page

* Handles invalid routes
* Displays incorrect URL
* Navigation back to home

---

## Tech Stack

* React (Vite)
* React Router DOM
* Redux Toolkit
* Tailwind CSS
* LocalStorage

---

##  Project Structure

```
src/
 ├── components/
 │    └── Navbar.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── BrowseBooks.jsx
 │    ├── BookDetails.jsx
 │    ├── AddBook.jsx
 │    └── NotFound.jsx
 ├── redux/
 │    ├── store.js
 │    └── bookSlice.js
 ├── data/
 │    └── books.js
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/mcajoydeb/online-library.git
cd online-library
```

### Install dependencies

```bash
npm install
```

### Run the project

```bash
npm run dev
```

Open: `http://localhost:5173`

---

## Screens (Optional)

You can add screenshots here for better presentation.

---

## Future Improvements

* Edit Book feature
* Delete Book feature
* Favorites system
* Dark mode
* Book images

---

## Author

**Joy**
🔗 https://github.com/mcajoydeb


## License

This project is for learning and assignment purposes.
