import React from 'react';
import UpdateModal from '../UpdateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
};

const NoteCard = ({ note, handleDelete,isReload,setIsReload }) => {
  // console.log(note);

  return (
    <div className="col mt-5 border rounded-pill px-2 px-3" style={{ position: "relative" }}>
      <div className="rounded h-100 note-card">
        <div
          className=" note-header rounded-circle mx-auto mt-2"
          style={customStyles}
        >
          <p className="text-center p-2  fs-2 fw-bold text-dark">
            {" "}
            {note.userName.substring(0, 1)}
          </p>
        </div>

        <div className="card-body mt-5">
          <h5 className="card-title"><span className='text-decoration-underline author-name'>Author</span> : <span className='author-name'>{note.userName}</span><hr /></h5>
          
          <h5 className="card-title"><span className='text-decoration-underline author-name'>Topic</span> : <span className='author-name'>{note.topicName}</span></h5>

          <p className="card-text lh-base pt-2">{note.textData}</p>
        </div>

        <div className="card-footer d-flex justify-content-center">
          <div className='position-absolute bottom-0'>
            <button
              onClick={() => handleDelete(note._id)}
              className="button-delete me-3 px-4 rounded-pill btn btn-sm mx-2 "

            >
              delete
            </button>
          </div>
          {/* <button>update</button> */}
          <UpdateModal setIsReload={setIsReload} isReload={isReload} id={note._id}/>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;