import React from 'react'
import {Link} from 'react-router-dom';
export default function CartTotals({value}) {

const{cartSubTotal,cartTax,cartTotal,clearCart}= value;
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-10 text-capitalize">
<Link to='/'>
    <button className="btn btn-outline-danger" type="button"
    onClick={()=>{
        clearCart()
    }}>
        Clear Cart
    </button>
</Link>
    <h5>
        <span className="text-title">
            Subtotal:
        </span>
<strong>$ {cartSubTotal}</strong>
    </h5>
    <h5>
        <span className="text-title">
            Cart Tax:
        </span>
<strong>$ {cartTax}</strong>
    </h5>
    <h5>
        <span className="text-title">
            Cart Total:
        </span>
<strong>$ {cartTotal}</strong>
    </h5>


                </div>
            </div>
        </div>
        </>
    )
}
