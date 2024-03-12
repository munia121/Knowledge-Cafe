import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarkes from './components/BookMarkes/BookMarkes'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      
     <Header></Header>
     <div className='md:flex'>
        <Blogs></Blogs>
        <BookMarkes></BookMarkes>
     </div>
    </>
  )
}

export default App
