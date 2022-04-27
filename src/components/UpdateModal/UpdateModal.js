import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");


//don't worry its just a package for modal. just go and explore https://www.npmjs.com/package/react-modal

export default function UpdateModal({ id, setIsReload, isReload }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log("hello");
    const userName = event.target.userName.value;
    const textData = event.target.textData.value;

    // console.log(userName, textData);
    if (userName) {
      fetch(`https://boiling-badlands-47507.herokuapp.com/note/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName }),
      })
        .then((res) => res.json())
        .then((data) => setIsReload(!isReload));
    }

    if (textData) {
      fetch(`https://boiling-badlands-47507.herokuapp.com/note/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ textData }),
      })
        .then((res) => res.json())
        .then((data) => setIsReload(!isReload));
    }

  };



  
  return (
    <div>
      <button onClick={openModal} className="button-update btn-sm btn px-4 rounded-pill">
        {" "}
        Update
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="btn btn-sm btn-warning mb-3">
          close
        </button>
        <div>Please insert your text</div>
        <div className=" p-3 input-form px-5 py-5">
          <form className="container " onSubmit={handleUpdate}>
            <div className="input-group mb-3 mt-5 ps-5">
              <input
                type="text"
                className="form-control-lg px-4 pe-5"
                placeholder="Your name"
                aria-label="Username"
                name="userName"
              />
            </div>

            <div className="input-group px-5">
              <textarea
                className="form-control-lg px-5 py-5"
                aria-label="With textarea"
                name="textData"
                placeholder="Write your note here"
                ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="submit" className="btn btn-outline-info px-3 ms-5" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
