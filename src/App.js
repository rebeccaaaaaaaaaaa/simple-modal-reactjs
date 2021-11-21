import './App.css';
import Modal from './components/Modal'
import {useState} from 'react'

function App() {
 
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="main">
      <button className="open-modal" onClick={() => setOpenModal(true)}>
        Abrir modal
      </button>
     {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
