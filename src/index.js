import React from 'react'
import ReactDOM from 'react-dom/client'
import { books } from './books'
import './styles.css'
import Book from './Book'
const root = ReactDOM.createRoot(document.getElementById('root'))

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={book.id} number={index}></Book>
      })}
    </section>
  )
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     // console.log(e.target.value)
//     console.log('handle form input')
//   }
//   const handleButtonClick = (e) => {
//     alert(e.target.value)
//   }
//   const handleFormSubmission = (e) => {
//     e.preventDefault()
//     console.log('form submitted')
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   )
// }
root.render(<Booklist />)
