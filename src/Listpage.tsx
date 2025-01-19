import { useLocation } from "react-router-dom";
import AddTask from "./AddTask";
function listpage(){

    const location=useLocation();
    const findlistname= new URLSearchParams(location.search);
    const Listname=findlistname.get("Listname");


    return(
        <>
        The name of the list is {Listname}
        <div>
           <AddTask/>
        </div>
        </>

    );

}

export default listpage;