import React from "react"
import { data } from "./books"
import Book from "./Book"
import { greeting } from "../testing/testing"

function BookList() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

export default BookList
