import { useState } from "react";

function Test() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={openModal}>
        Open modal for @mdo
      </button>

      {/* Modal */}
      {isModalOpen && (
        <>
          <div
            className="modal fade show"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="false"
            style={{ display: "block" }}  // To show the modal
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
                    data-dismiss="modal"
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
                      />
                    </div>
                    
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={closeModal} // Close on click
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Send message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Backdrop */}
          <div className="modal-backdrop fade show" onClick={closeModal}></div>
        </>
      )}
    </>
  );
}

export default Test;
