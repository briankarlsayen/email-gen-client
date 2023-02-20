import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const products = [
    'Why Mailchimp?',
    'Product Updates',
    'Email Marketing',
    'Websites',
    'Transactional Email',
    'How We Compare',
    'GDPR Compliance',
    'Security',
    'Status',
    'Mobile App',
  ];
  return (
    <footer className='bg-secondary p-4 text-white x-padding'>
      <div className='pb-4 flex flex-row items-center flex-wrap justify-between'>
        <div className='p-6'>
          <p className='text-xl pb-4'>Products</p>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
        <div className='p-6'>
          <p className='text-xl pb-4'>Products</p>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
        <div className='p-6'>
          <p className='text-xl pb-4'>Products</p>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
        <div className='p-6'>
          <p className='text-xl pb-4'>Products</p>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
        <div className='p-6'>
          <p className='text-xl pb-4'>Products</p>
          <ul>
            {products.map((product, idx) => (
              <li key={idx}>{product}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className='py-4 flex gap-4'>
        <div className='flex gap-2'>
          <p>Follow us on:</p>
          <FaFacebookSquare size={42} />
          <FaInstagramSquare size={42} />
          <FaTwitter size={42} />
        </div>
        <p className='text-sm'>
          ©2001-2022 All Rights Reserved. Mailchimp® is a registered trademark
          of The Rocket Science Group. Apple and the Apple logo are trademarks
          of Apple Inc. Mac App Store is a service mark of Apple Inc. Google
          Play and the Google Play logo are trademarks of Google Inc. Privacy |
          Terms | Cookie Preferences
        </p>
      </div>
    </footer>
  );
};

export default Footer;
