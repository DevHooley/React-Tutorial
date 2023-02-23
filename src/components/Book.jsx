export const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    alert("hello world")
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img className='img' src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h2>{author}</h2>
      <button className='btn' type='button' onClick={clickHandler}>
        reference example
      </button>
      <button className='btn' type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

export default Book
