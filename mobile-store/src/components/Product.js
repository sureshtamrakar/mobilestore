import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';



export default class Product extends Component {
    render() {

        const {id,title,img,price,inCart}
        =this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto my-3">
                
               <div className="card">
                   <ProductConsumer>

                {(value)=>(

                   <div className="img-container p-5" onClick={() => 
                    value.handelDetail(id)
}>
        <Link to="/details">
            <img src={img} alt="product" className="card-img-top">
            </img>
        </Link>
        <button className="card-btn" disabled=
        {inCart?true:false} onClick={()=>{
            value.addToCart(id);
            value.openModal(id);

        }
        }>
        {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="fas fa-cart-plus"></i>)}
        </button>
                   </div>
                   )}
                   </ProductConsumer>
            <div className="card-footer d-flex justify-content-between">
            <p className="mb-0 align-self-center">
{title}
            </p>
            <h5 className="text-blue mb-0">
    <span className="mr-1">${price}</span>
            </h5>
            </div>
               </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04 rem solid rgba(0,0,0,2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
.card-footer{
    background: rgba(247,247);
}
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.card-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlue);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    transform: translate(100%,100%);
    transition: all 1s linear;

}
.img-container:hover .card-btn{
    transform: translate(0,0);

}
`;