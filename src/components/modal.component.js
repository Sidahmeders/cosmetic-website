import React, { useContext } from 'react';
import '../styles/modal/modal.css'
import { ContextConsumer } from '../context';


function Modal() {

    const context = useContext(ContextConsumer);

    return (
        <div>
            {context.modal ? 
              (
                context.cart.map(product => {
                    return (
                        <div key={product.id} className="modal">
                            <h1>{product.type}</h1>
                        </div>
                    );
                })
              ) :
              (
                null
              )
            }
        </div>
    );
}

export default Modal;
