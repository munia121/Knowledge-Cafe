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


  const handleMarkAsRead = time =>{
    setReadingTime(readingTime + time)
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
