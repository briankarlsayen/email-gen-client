import React from "react";
import Dashboard from "../index";
import Editor from "./Editor";

const EmailSend = () => {
  return (
    <Dashboard>
      <div className="flex flex-grow bg-base-200 gap-4 h-full pt-4">
        <div className="w-full max-w-xs bg-base-100 p-4 rounded-md">
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Design</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                required
                defaultValue={"basic"}
              >
                <option>Basic</option>
                <option>Business</option>
                <option>Casual</option>
              </select>
            </div>
            <button className="btn mt-12 btn-primary float-right">
              Generate
            </button>
          </form>
        </div>
        <div className="w-full bg-base-100 h-full flex flex-col p-4 rounded-md">
          <h3 className="pb-2">Result</h3>
          <div className=" border border-slate-200 h-full rounded-md">
            <Editor />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default EmailSend;
