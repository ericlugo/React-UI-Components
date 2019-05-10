import React from 'react';
import './Footer.css';

let retweetNumber = 6;
let likeNumber = 4;

const Footer = () => {
  return (
    <footer className='card-footer'>
      <div className='button'>
        <i className='far fa-comment' />
      </div>
      <div className='button retweet'>
        <i className='fas fa-retweet' />
        <span>{retweetNumber}</span>
      </div>
      <div className='button like'>
        <i className='far fa-heart' />
        <span>{likeNumber}</span>
      </div>
      <div className='button'>
        <i className='far fa-envelope' />
      </div>
    </footer>
  );
};

export default Footer;
