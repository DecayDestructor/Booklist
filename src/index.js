import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
const books = [
  {
    author: 'Krisin Hannah',
    title: 'The Women: A Novel',
    img: 'https://m.media-amazon.com/images/I/81oydfRzeBL._AC_UY327_FMwebp_QL65_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
    id: 2,
  },
]

const Booklist = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id}></Book>
      })}
    </section>
  )
}
const Book = ({ img, title, author }) => {
  console.log(img, author, title)
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}
const EventExamples = () => {
  const handleFormInput = (e) => {
    // console.log(e.target.value)
    console.log('handle form input')
  }
  const handleButtonClick = (e) => {
    alert(e.target.value)
  }
  const handleFormSubmission = (e) => {
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}
root.render(<Booklist />)
