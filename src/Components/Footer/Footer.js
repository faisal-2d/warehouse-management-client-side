import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-dark py-3 mt-4 text-light'>
            <small>copyright &copy; FreshStock | {year}</small>
        </div>
    );
};

export default Footer;