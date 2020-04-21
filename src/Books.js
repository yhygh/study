import React from 'react'
import Book from './Book'

const bookList = [
  {title: 'The Power of Now'},
  {title: 'The 4 Hour Workweek'}
]

export default function Books() {



	       // <Book title={'The Power of Now'} />
	       // <Book title={'The 4 Hour Workweek'} />

	// return (
	//   <ul>
 //           {bookList.map(book => <Book title={book.title} />)}
	//   </ul>
	// )

    const [showBook, setShow] = React.useState(false);

    return (
         <div>
              {showBook && <Book title="Black Swan" />}
              <button onClick={() => setShow(true)}>
                  Show
              </button>
         </div>
    )


}