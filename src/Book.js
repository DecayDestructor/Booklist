export const Book = ({ img, title, author, number }) => {
  // console.log(img, author, title, getBook, id)
  return (
    <article className="book">
      <img className="image" src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${number + 1}`}</span>
    </article>
  )
}
export default Book
