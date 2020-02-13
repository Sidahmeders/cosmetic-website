import React from 'react';
import '../styles/modal/modal.css'
import { ProductsConsumer } from '../context';


function Modal() {

    return (
        <ProductsConsumer>
            {(value) => {
                if(value.modal) {
                     return value.cart.map(product => {
                         return (
                             <div key={product.id} className="modal">
                                 <h1>{product.type}</h1>
                             </div>
                         );
                     });
                } else {
                    return  null;
                }
               
            }}
        </ProductsConsumer>
    );
}

export default Modal;
