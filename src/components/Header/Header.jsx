
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container flex justify-between mx-auto items-center border-b-2 p-4'>
             <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
             <img src={profile} alt="" />

        </div>
    );
};

export default Header;