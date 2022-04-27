import React from "react";

const inputForm = ({ handlePost }) => {
  return (
    <div className=" p-3 input-form py-5">
      <form className="container " onSubmit={handlePost}>
        <div className="input-group mb-3 mt-5">
          <span className="input-group-text">Author</span>
          <input
            type="text"
            className="form-control py-2"
            placeholder="Your name"
            aria-label="Username"
            name="userName"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Your notes</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="textData"
            placeholder="Write you note"
          ></textarea>
        </div>
        <div className="mt-4">
          <input type="submit" value="submit" className="btn button-submit px-5 py-2 mt-2" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;