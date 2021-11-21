import React from "react";
import "./Modal.css";

function Modal({closeModal}) {
  return (
    <div className="modal--bg">
      <div className="modal--container">
          <button onClick={() => closeModal(false)} className="close--btn">X</button>
        <div className="modal--title">
            <h1>Tem certeza que quer continuar?</h1>
        </div>
        <div className="modal--body">
            <p> Ao clicar em CONFIRMAR você será redirecionado a outra página.</p>
        </div>
        <div className="modal--footer">
            <footer>
               <button className="btn-cancel" onClick={() => closeModal(false)}>Cancelar</button>
               <button className="btn-confirm">Confirmar</button>
            </footer>
        </div>
      </div>
    </div>
  );
}

export default Modal;
