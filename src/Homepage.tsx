import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Listname,setListname]=useState("New List");

  const handelListnamechange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setListname(event.target.value);
  }


  const openModal = () => setIsModalOpen(true); // Show the modal
  const closeModal = () => setIsModalOpen(false); // Hide the modal

  const navigate=useNavigate();

  const redirecttoListpage=(Listname:string)=>{
      navigate(`/listpage?Listname=${encodeURIComponent(Listname)}`);
  }
  
  return (
    <>
      <div
        className="w-100 p-3"
        style={{
          height: "75vh",
          background: "linear-gradient(to bottom left, #6a11cb, #2575fc)",
        }}
      >
        <p className="text-center fw-bold h1">ToDoList Creator</p>

        <div className="d-flex justify-content-center">
          <h1 className="display-3" style={{color: "white"}}>
            Create your ToDo List
          </h1>
        </div>

 <div className="d-flex justify-content-center">
 <h1 className="display-6" style={{color: "white"}}>
           Organize your Day, Organize your Life
          </h1>
</div>

        <div className="d-flex justify-content-center">
        <button
        type="button"
        className="btn btn-primary btn-lg"
        style={{ backgroundColor: "#28A745", borderColor: "#28A745" }}
        onClick={openModal}
      >
        Create a ToDoList Now
      </button>

      <div
        className={`modal fade ${isModalOpen ? "show" : ""}`}
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!isModalOpen}
        style={{
          display: isModalOpen ? "block" : "none",
        }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New List
              </h5>
              <button
                type="button"
                className="close"
                onClick={closeModal} // Close on click
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Enter the title of your list:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={Listname}
                    onChange={handelListnamechange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={closeModal} // Close on click
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  redirecttoListpage(Listname);
                  console.log("Redirecting to the list page...");
                }}
              >
                Create List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal backdrop (conditionally rendered) */}
      {isModalOpen && (
        <div
          className="modal-backdrop fade show"
          onClick={closeModal}
          style={{ position: "fixed" }}
        ></div>
      )}
      
        </div>
      </div>
    </>
  );
}

export default Homepage;
