import moment from 'moment';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <div>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center'> Journalism Without Fear or Favour</p>
            <p className='text-center'> {moment().format("dddd, MMMM Do, YYYY")} </p>
        </div>
    );
};

export default Header;