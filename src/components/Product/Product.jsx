import React, {useState,useEffect} from 'react'
import "./product.css";
import {RotatingTriangles} from "react-loader-spinner";



export default function Product () {
    const [products, setProducts] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        try{
            setLoading(true);
            fetch("https://shoppingapiacme.herokuapp.com/shopping")
            .then((res)=> res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);

            })
        } catch(error){
            setLoading(false)
            console.log(error)
        }
    }, [])

  return (
    <div>
        <h1>Featured Products</h1>
        <div className="item-container">
            {loading ?(
                <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
                />
            ) : (
                products?.map((product)=>(
                    <div className="card" key={product.id}>
                        <img src={product.image} alt={product.item} />
                        <h3>{product.item}</h3>
                        <p>{product.color}</p>
                        <p>
                            <b>{product.price}</b>
                        </p>
                    </div>
                ))
            )
        }
        </div>
    </div>
  )
}

