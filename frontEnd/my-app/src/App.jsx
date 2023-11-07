import React, { useEffect, useState } from 'react';
import UpdateModal from './components/Modals/UpdateModal.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({
    anime: '',
    character: '',
  });
  const [selectedData,setSelectedData] = useState({});
  const [activeModal, switchActiveModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3333/api/anime/getAnimeTest');
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log('we have a problem to obtain the data');
      }
    };

    getData();
  }, []);

  const postHandler = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/api/anime/postAnimeTest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        console.log('Data posted successfully');
        window.location.reload();
      } else {
        console.log('we have a problem');
      }
    } catch (error) {
      console.log('we have a problem');
    }
  };

  const updateHandler = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3333/api/anime/updateAnimeTest/${editingData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        console.log('Data updated successfully');
        closeModal(); // Cierra el modal después de la actualización
      } else {
        console.log('we have a problem');
      }
    } catch (error) {
      console.log('we have a problem');
    }
  };


  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:3333/api/anime/deleteAnimeTest/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Data eliminated successfully');
        const updatedData = data.filter((item) => item._id !== id);
        setData(updatedData);
      } else {
        console.log('we have a problem');
      }
    } catch (error) {
      console.log('we have a problem');
    }
  };

  const close = () => {

    switchActiveModal(false)
  }

  return (
    <div>
      {activeModal && <UpdateModal data={selectedData} isOpen={true} onUpdate={ updateHandler} onClose={close}/>}
      <h1>Render</h1>
      <form onSubmit={postHandler}>
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

      <div>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Anime</th>
              <th>Actions</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tbody key={item._id}>
              <th>{item.character}</th>
              <th>{item.anime}</th>
              <th>
                {'     '}
                <button className="btn btn-warning" onClick={switchActiveModal(true)}>EDIT</button>
                {'     '}
                <button onClick={() => deleteHandler(item._id)} className="btn btn-danger">
                  DELETE
                </button>
              </th>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
