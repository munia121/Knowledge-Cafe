// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarkes from './components/BookMarkes/BookMarkes'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookMArks = (blog) =>{
    console.log(blog)
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  } 


  const handleMarkAsRead = (id,time) =>{
    setReadingTime(readingTime + time)
    // remove the read blog from bookmark
    // console.log('remove book mark id', id)
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(remainingBookMarks)
  }


  return (
    <>
      
     <Header></Header>
     <div className='md:flex container mx-auto'>
        <Blogs handleAddToBookMArks= {handleAddToBookMArks} handleMarkAsRead = {handleMarkAsRead} ></Blogs>
        <BookMarkes bookMarks = {bookMarks} readingTime={readingTime}></BookMarkes>
     </div>
    </>
  )
}

export default App
