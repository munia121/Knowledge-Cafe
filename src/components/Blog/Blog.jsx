import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';



const Blog = ({blog, handleAddToBookMArks, handleMarkAsRead}) => {

    
    const {id ,title,cover, reading_time, author_img, author,posted_date, hashtags} = blog
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-[700px]' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between p-4 space-y-4'>
                <div className='flex items-center gap-5'>
                    <img className='h-20 w-20 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMArks(blog)} className='ml-2 text-red-400 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p>{hashtags}</p>

            <button onClick={() =>handleMarkAsRead(id,reading_time)} className='text-purple-600 font-bold underline '>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMArks: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}

export default Blog;


    