import React from 'react';
import Router from 'next/router';

const Signup = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    Router.push('/login');
  };
  return (
    <div className='flex w-screen h-screen flex-grow relative'>
      <div
        id='signup-left'
        className='bg-base-100 w-full justify-center flex flex-col items-center'
      >
        <div className='flex flex-col gap-4 w-full items-center max-w-xl'>
          <div className='pb-8 w-full relative'>
            <h1 className='pb-4'>Signup</h1>
            <p>
              Create a free account or
              <span
                className='text-blue-500 pl-2 cursor-pointer hover:underline'
                onClick={() => Router.push('/login')}
              >
                login
              </span>
            </p>
          </div>
          <form className='flex flex-col gap-4 w-full' onSubmit={submitHandler}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full'
                required
              />
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                className='input input-bordered w-full'
                required
              />
            </div>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <input type='checkbox' className='checkbox' />
                <span className='label-text pl-2 text-sm'>
                  I don't want to receive emails about Mailchimp and related
                  Intuit product and feature updates, marketing best practices,
                  and promotions from Mailchimp.
                </span>
              </label>
            </div>
            <p className='text-sm'>
              By creating an account, you agree to our
              <span className='underline pl-2'>Terms</span> and have read and
              acknowledge the <span>Global Privacy Statement</span>.
            </p>
            <button type='submit' className='btn btn-primary w-full mt-4'>
              Signup
            </button>
          </form>
        </div>
        <div className='bottom-0 absolute px-2 text-xs left-0 pb-2'>
          <p>
            ©2001–2023 All Rights Reserved. Mailchimp® is a registered trademark
            of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and
            Terms
          </p>
        </div>
      </div>
      <div id='signup-right' className='bg-secondary w-full max-w-xl'></div>
    </div>
  );
};

export default Signup;
