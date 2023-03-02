import React from 'react';
import Router from 'next/router';

const ForgotPass = () => {
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
        <div className='flex flex-col gap-4 w-full items-center max-w-xl px-2'>
          <div className='pb-8 w-full relative'>
            <h1 className='pb-4'>Reset password</h1>
            <p>
              Fear not. We'll email you instructions to reset your password.
            </p>
          </div>
          <form className='flex flex-col gap-4 w-full' onSubmit={submitHandler}>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                className='input input-bordered w-full'
                required
              />
            </div>
            <div className='flex items-center mt-4 gap-4'>
              <button type='submit' className='btn btn-primary'>
                Reset password
              </button>
              <p
                className='text-blue-500 hover:underline cursor-pointer'
                onClick={() => Router.push('/login')}
              >
                Return to login
              </p>
            </div>
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
      <div
        id='signup-right'
        className='bg-secondary w-full max-w-xs lg:max-w-lg md:block hidden'
      ></div>
    </div>
  );
};

export default ForgotPass;
