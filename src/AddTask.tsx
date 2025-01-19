import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";


function AddTask() {
  //to get listname
  const location = useLocation();
  const findlistname = new URLSearchParams(location.search);
  const Listname = findlistname.get("Listname");

  //for opening and closing modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //for task detail

  interface Task {
    ttime: string;
    tname: string;
    tdescription: string;
  }
  var [AllTasks, setAllTasks] = useState<Task[]>([]);
  var [TaskTime, setTaskTime] = useState("");
  var [TaskName, setTaskName] = useState("");
  var [TaskDescription, setTaskDescription] = useState("");

  const handelTaskTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTime(event.target.value);
  };

  const handelTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handelTaskDesctiptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTaskDescription(event.target.value);
  };

  const addtask = (
    TaskTime: string,
    TaskName: string,
    TaskDescription: string
  ) => {
    const newtask: Task = {
      ttime: TaskTime,
      tname: TaskName,
      tdescription: TaskDescription,
    };
    if (isEditing) {
      setAllTasks((prevTasks) =>
        prevTasks.map((task, index) => (index === editindex ? newtask : task))
      );
      notEditing();
    } else {
      setAllTasks((prevTasks) => [...prevTasks, newtask]);
    }
    closeModal();
    setTaskTime("");
    setTaskName("");
    setTaskDescription("");
  };

  //for editing tasks
  const [isEditing, setisEditing] = useState(false);
  const [editindex, seteditindex] = useState(0);
  const Editing = () => setisEditing(true); // set when editing
  const notEditing = () => setisEditing(false); // set when not editing

  const EditModeSetter = (editingtask: Task, index: number) => {
    Editing();
    seteditindex(index);
    setTaskTime(editingtask.ttime);
    setTaskName(editingtask.tname);
    setTaskDescription(editingtask.tdescription);
    openModal();
  };

  //delete task
  const deletetask = (index: number) => {
    setAllTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };



  //for dragable and droapable divs
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow drop
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    dropIndex: number
  ) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);

    if (draggedIndex !== dropIndex) {
      setAllTasks((prevTasks) => {
        const updatedTasks = [...prevTasks];
        const [movedTask] = updatedTasks.splice(draggedIndex, 1);
        updatedTasks.splice(dropIndex, 0, movedTask);
        return updatedTasks;
      });
    }
  };

  //to save list
  const saveasjson = () => {
    const jsondata = JSON.stringify(AllTasks, null, 2);
    const blob = new Blob([jsondata], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const filename = Listname ? `${Listname}.json` : "newlist.json";

    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  //to open list
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const tasks = JSON.parse(e.target?.result as string);
      if (Array.isArray(tasks)) {
        setAllTasks(tasks);
      } else {
        alert("Invalid JSON format!");
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      {/* Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button type="button" className="btn btn-success" onClick={openModal}>
          Add Task
        </button>

        <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        style={{ display: "none" }} // Hide the file input
      />


        <button
          type="button"
          className="btn btn-info"
          onClick={handleButtonClick}
        >
          Upload Previous List
        </button>

        <button type="button" className="btn btn-warning" onClick={saveasjson}>
          Save List
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div>
          <div
            className="modal fade show"
            style={{ display: "block", background: "rgba(0,0,0,0.5)" }}
            onClick={closeModal}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">New Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="task-time" className="form-label">
                        Enter the Time of task:
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="task-time"
                        value={TaskTime}
                        onChange={handelTaskTimeChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="task-name" className="form-label">
                        Enter the Name of task:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="task-name"
                        value={TaskName}
                        onChange={handelTaskNameChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="task-description" className="form-label">
                        Enter the Description of task:
                      </label>
                      <textarea
                        className="form-control"
                        id="task-description"
                        rows={4}
                        style={{ resize: "none" }}
                        value={TaskDescription}
                        onChange={handelTaskDesctiptionChange}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      addtask(TaskTime, TaskName, TaskDescription);
                      closeModal();
                    }}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="list-group">
        {AllTasks.map((task, index) => (
          <div
            key={index}
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center shadow-sm mb-2 rounded"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <div>
              <h5 className="mb-1">{task.tname}</h5>
              <p className="mb-1 text-muted">{task.tdescription}</p>
              <small className="text-secondary">{task.ttime}</small>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary me-2"
                onClick={() => EditModeSetter(task, index)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => deletetask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddTask;
