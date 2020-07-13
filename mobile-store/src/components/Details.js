import React, { Component } from 'react'
import {ProductConsumer} from '../Context'
import {Link} from 'react-router-dom'
import {ButttonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
          <ProductConsumer>
              {(value)=>{
                 const {id,company,info,img,price,title,inCart} = value.detailProduct
             
                return(
                    <div className="container py-5">
                      <div className="row">
                        <div className="col-md-10 mx-auto my-5">
                           <h1>
                               {title}
                           </h1>
                            </div>    
                    </div>  
                    <div className="row">
                        <div className="col-md-6 mx-auto my-3">

                    <img src={img} className="img-fluid"></img>

                        </div>
                        <div className="col-md-6 mx-auto my-3 text-capitalize">

                        <h2>
                            Model: {title}
                        </h2>
<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                Made By : <span className="text-uppercase">{company}</span>
</h4>
<h4 className="text-blue">
    <span> Price:
        ${price}
    </span>
</h4>

<p className="text-capitalize font-weight-bold mt-3 mb-0">
Some Information About Product:
</p>
<p className="text-muted">
    {info}
</p>

<div>
    <Link to='/'>
        <ButttonContainer>
            Back To Product
        </ButttonContainer>
    </Link>
    <ButttonContainer cart
    disabled={inCart?true:false}
    onClick={()=>{
        value.addToCart(id);
        value.openModal(id);
    }}>
        {inCart?"inCart":"Add to Cart"}
    </ButttonContainer>
</div>
                        </div>
                    </div>
                    </div>
                )
             }}
          </ProductConsumer>
        )
    }
}
