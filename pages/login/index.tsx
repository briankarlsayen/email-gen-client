import Image from 'next/image';
import spaceImg from '../../public/space.jpg';
import Router from 'next/router';

const Login = () => {
  const submitHandler = (e: any) => {
    e.preventDefault();
    Router.push('/dashboard');
  };
  return (
    <div className='flex w-screen h-screen flex-grow relative'>
      <div
        id='login-left'
        className='bg-base-100 w-full max-w-xl items-center flex flex-col justify-center'
      >
        <div className='flex flex-col gap-4 w-full items-center max-w-lg px-2'>
          <div className='pb-8 w-full relative'>
            <h1 className='pb-4'>Login</h1>
            <p>
              Need an account?
              <span
                className='text-blue-500 cursor-pointer pl-2 hover:underline'
                onClick={() => Router.push('/signup')}
              >
                Create an account
              </span>
            </p>
          </div>
          <form
            className='flex flex-col gap-4 w-full items-center'
            onSubmit={submitHandler}
          >
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Username or Email</span>
              </label>
              <input type='text' className='input input-bordered w-full' />
            </div>
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input type='text' className='input input-bordered w-full' />
            </div>
            <button type='submit' className='btn btn-primary w-full mt-4'>
              Login
            </button>
          </form>
          <div className='flex items-center justify-between w-full'>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <input type='checkbox' className='checkbox' />
                <span className='label-text pl-2'>Remember me</span>
              </label>
            </div>
            <p
              className='text-blue-500 cursor-pointer hover:underline'
              onClick={() => Router.push('/forgot-password')}
            >
              Forgot password?
            </p>
          </div>
        </div>

        <div className='bottom-0 absolute px-2 text-xs pb-2'>
          <p>
            ©2001–2023 All Rights Reserved. Mailchimp® is a registered trademark
            of The Rocket Science Group, LLC. Cookie Preferences, Privacy, and
            Terms
          </p>
        </div>
      </div>
      <div id='id-right' className='bg-blue-700 w-full md:block hidden'>
        <Image className='h-full object-cover' src={spaceImg} alt='space' />
      </div>
    </div>
  );
};

export default Login;
