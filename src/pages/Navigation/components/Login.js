import React from 'react';
import "./Login.css";

const Modal = props => {
   
        return (
            <div className="modal">
                <header className="modal_header"><h1>{props.title}</h1></header>
                <section className="modal_content">
                    {props.children}
                </section>
                <section className="modal_action">
                    {props.canCancel && <button className="btn cancel" onClick={props.canCancel}>Cancel</button>}
                    {props.canConfirm && <button className="btn book" onClick={props.canConfirm} >Login</button>}
                </section>
            </div>
            )
  
}
export default Modal;