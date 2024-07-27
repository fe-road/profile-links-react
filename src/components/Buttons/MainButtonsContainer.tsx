import Button from './Button';

import './main-buttons-container.css';

const MainButtonsContainer = () => {
    return (
        <section className='links-container'>
            <Button
                url='https://frontendroad.com'
                label='About Us'
            />
            <Button
                url='https://frontendroad.com'
                label='Join our Community'
            />
        </section>
    );
};

export default MainButtonsContainer;