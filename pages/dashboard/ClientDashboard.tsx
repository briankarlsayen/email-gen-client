import Router from "next/router";
import React from "react";
import {
  FaRandom,
  FaTasks,
  FaEnvelope,
  FaChartArea,
  FaWallet,
} from "react-icons/fa";
import EmailGenerator from "./email-generator";

const ClientDashboard = ({ children }: any) => {
  // const showContent = () => {
  //   switch() {
  //     case "":
  //   }
  // };
  console.log("Router", Router.pathname.split("/"));
  return (
    <div className="bg-base-200">
      <div
        id="sidebar"
        className="h-screen w-20 menu bg-neutral text-white px-4 flex items-center nunito fixed shadow justify-center"
      >
        <ul className="list-reset ">
          <li
            className="my-2 md:my-0"
            onClick={() => Router.push("/dashboard/email-generator")}
          >
            <a
              href="#"
              className="flex align-middle text-white no-underline hover:text-indigo-400"
            >
              <FaRandom size={25} />

              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Generate
              </span>
            </a>
          </li>
          <li
            className="my-2 md:my-0"
            onClick={() => Router.push("/dashboard/email-send")}
          >
            <a
              href="#"
              className="flex align-middle text-white no-underline hover:text-indigo-400"
            >
              <FaEnvelope size={25} />
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Messages
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className="flex align-middle text-white no-underline hover:text-indigo-400"
            >
              <FaChartArea size={25} />
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Analytics
              </span>
            </a>
          </li>
          <li className="my-2 md:my-0">
            <a
              href="#"
              className=" align-middle text-white no-underline hover:text-indigo-400"
            >
              <FaWallet size={25} />
              <span className="w-full inline-block pb-1 md:pb-0 text-sm">
                Payments
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="h-56">
        <div className="flex h-full border-b border-gray-300">
          <div className="px-32"></div>
          <nav className="w-full flex items-center">
            <h2>Page Title</h2>
          </nav>
        </div>
        <div className="w-full  border-gray-300"></div>
      </div>
      <div id="content" className="flex h-[calc(100vh-14rem)]">
        <div className="flex h-full w-full pb-12">
          <div className="px-32 "></div>
          {children}
          <div className="px-20"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
