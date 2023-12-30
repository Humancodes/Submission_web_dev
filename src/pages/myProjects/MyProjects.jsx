import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [download_url, setUrl] = useState("");
  const [author, setAuthor] = useState("");

 

  const handleAddProject = () => {
    if (download_url && author) {
      setShowPopup(false);
      setUrl("");
      setAuthor("");
    } else {
      alert("Please provide both URL and author name.");
    }
  };

  return (
    <>
      <div className="text-[40px] font-bold mt-10 ml-14">My Projects</div>
      <div className="flex flex-col bg-white justify-center items-center w-[404px] h-[265px] m-12 border-[1px] shadow-md rounded-lg">
        <button onClick={() => setShowPopup(true)}>
          <img
            className="flex w-[360px] h-[180px]"
            src="/upload.png"
            alt="upload"
          />
          <div className="text-[16px] py-[10px] font-semibold">
            Create a new Project
          </div>
        </button>

        <div className="text-[12px] font-semibold">
          or try a{" "}
          <Link to="/sample-projects">
            <span className=" text-orange-500">sample project</span>
          </Link>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
            <label className="block mb-2">URL:</label>
            <input
              type="text"
              value={download_url}
              onChange={(e) => setUrl(e.target.value)}
              className="border p-2 mb-4 w-full"
            />

            <label className="block mb-2">Author:</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border p-2 mb-4 w-full"
            />

            <div className="flex justify-end">
              <button
                onClick={handleAddProject}
                className="bg-orange-500 text-white px-4 py-2 rounded-md"
              >
                Add Card
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyProjects;
