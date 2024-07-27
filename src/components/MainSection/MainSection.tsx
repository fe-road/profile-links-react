import logo from '../../assets/logo.png';

import './main-section.css';

const MainSection = () => {
    return (
        <>
            <section className='image-container'>
                <img src={logo} alt='Logo' className='profile-image' />
            </section>
            <h1 className='title'>Frontend Road</h1>
            <p className='slogan'>We help you find your <span className='important-text'>first job</span> as a Web Developer</p>
        </>
    );
};

export default MainSection;