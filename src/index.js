import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const firstBook = {
  author: 'Krisin Hannah',
  title: 'The Women: A Novel',
  img: 'https://m.media-amazon.com/images/I/81oydfRzeBL._AC_UY327_FMwebp_QL65_.jpg',
}
const secondBook = {
  author: 'James Clear',
  title: 'Atomic Habits',
  img: 'https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg',
}
const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      ></Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      ></Book>
    </section>
  )
}
const Book = ({ img, title, author, children }) => {
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}
// const Image = () => {

//   return <img className="image" src={img} alt={title} />
// }
// const Title = () => {
//   return <h2>{title}</h2>
// }

// const Author = () => {
//   return <h4>{author}</h4>
// }
root.render(<Booklist />)
