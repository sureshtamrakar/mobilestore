import React from 'react'


export default function CartItem({item,value}) {

    const {id,title,img,price,total,company,count}= item;
    const {increment,decrement,removeItem} = value;

    return (
        <div className="row my-1">
            <div className="col-md-10">
                <img src={img} style={{width:'5em',height:'5rem'}} className="img-fluid" alt="product">
                    </img>  
                    </div>
            <div className="col-md-10">
                <span className="d-lg-none">
                Product:
                </span>
                {title}
            </div>
            <div className="col-md-10">
                <span className="d-lg-none">
                Price:
                </span>
                {price}
            </div>
            <div className="col-md-10 my-10">
        <div className="d-flex justify-content">
<div>
    <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
-
    </span>
    <span className="btn btn-black mx-1">
{count}
    </span>
    <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
+
    </span>
</div>
            
        </div>


            </div>
            <div className="col-md-10">
            <div onClick={()=>{
                removeItem(id)
            }}>
                <i className="fas fa-trash" ></i>
            </div>
            </div>
            <div className="col-md-10">
                <strong>Item total: $ </strong>
                {total}
            </div>

        </div> 
    )
}
