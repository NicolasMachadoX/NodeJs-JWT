import React,{useState,useEffect} from "react";

function UpdateModal(data,onClose,onUpdate,isOpen){
  const [newData,setNewData] = useState({character:"",anime:""});

  

 return(
    <div>
         <form onSubmit={()=> {onUpdate; onClose}}>
        <h5>Post new Anime Character:</h5>
        <br />
        <span>Character</span>
        <input
          type="text"
          onChange={(e) => setNewData({ ...newData, character: e.target.value })}
        />
        <br />
        <span>Anime</span>
        <input
          type="text"
          onChange={(e) => setNewData({ ...newData, anime: e.target.value })}
        />
        <input type="submit" value="Submit" />
      </form>

    </div>
 )   
};

export default UpdateModal;