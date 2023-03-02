import Router from 'next/router';
import React from 'react';
import {
  FaRandom,
  FaTasks,
  FaEnvelope,
  FaChartArea,
  FaWallet,
} from 'react-icons/fa';
import pugImg from '../../public/pug.jpg';

import { useSidebarStore } from '@/store/useSidebarStore';
import Image from 'next/image';

const ClientDashboard = ({ children }: any) => {
  const pathname = Router.pathname.split('/');
  const currentPath = pathname.pop();
  const sidebar = useSidebarStore();
  const { isExpand, miniSidebar, expandSidebar } = sidebar;
  return (
    <div className='bg-base-200'>
      <div
        id='sidebar'
        className={`h-screen w-20 menu bg-secondary text-white px-4 flex items-center nunito fixed shadow justify-center sidebar ${
          isExpand && 'sidebar-expand'
        }`}
        onMouseEnter={expandSidebar}
        onMouseLeave={miniSidebar}
      >
        <ul className='list-reset '>
          <li
            className='my-2 md:my-0'
            onClick={() => Router.push('/dashboard/email-generator')}
          >
            <label
              className={`flex align-middle text-white no-underline hover:text-indigo-400 ${
                currentPath === 'email-generator' && 'text-indigo-400'
              }`}
            >
              <FaRandom size={25} />

              <span className='w-full inline-block pb-1 md:pb-0 text-sm'>
                Generate
              </span>
            </label>
          </li>
          <li
            className='my-2 md:my-0'
            onClick={() => Router.push('/dashboard/email-send')}
          >
            <label
              className={`flex align-middle text-white no-underline hover:text-indigo-400 ${
                currentPath === 'email-send' && 'text-indigo-400'
              }`}
            >
              <FaEnvelope size={25} />
              <span className='w-full inline-block pb-1 md:pb-0 text-sm'>
                Messages
              </span>
            </label>
          </li>
          <li className='my-2 md:my-0'>
            <label className='flex align-middle text-white no-underline hover:text-indigo-400'>
              <FaChartArea size={25} />
              <span className='w-full inline-block pb-1 md:pb-0 text-sm'>
                Analytics
              </span>
            </label>
          </li>
          <li className='my-2 md:my-0'>
            <label className=' align-middle text-white no-underline hover:text-indigo-400'>
              <FaWallet size={25} />
              <span className='w-full inline-block pb-1 md:pb-0 text-sm'>
                Payments
              </span>
            </label>
          </li>
          <li className='my-2 md:my-0'>
            <div className='float-right dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-10 rounded-full'>
                  <Image
                    className='h-full object-cover'
                    src={pugImg}
                    alt='pug'
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='h-56'>
        <div className='flex h-full border-b border-gray-300'>
          <div className='px-32'></div>
          <nav className='w-full flex items-center'>
            <h2>Page Title</h2>
          </nav>
          <div className='px-20'></div>
        </div>
        <div className='w-full  border-gray-300'></div>
      </div>
      <div id='content' className='flex h-[calc(100vh-14rem)]'>
        <div className='flex h-full w-full pb-12'>
          <div className='px-32 '></div>
          {children}
          <div className='px-20'></div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
