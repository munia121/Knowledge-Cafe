import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark';
const BookMarkes = ({bookMarks, readingTime}) => {
    // console.log(bookMarks)
    return (
        <div className="md:1/3 bg-slate-300">
            <div>
                <h3 className='text-3xl text-center mt-5'>Readin Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center">Book Marked Blogs: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark =><BookMark key={bookMark.id} bookmark={bookMark}> </BookMark>)
            }
        </div>
    );
};


BookMarkes.propTypes= {
    bookMarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default BookMarkes;