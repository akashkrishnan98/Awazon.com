import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function ProductScreen(props) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data)
            console.log(data);
        }
        fetchData();
    }, []);
    const product = products.find(x => x._id == props.match.params.id);
    return  <div>
                {/* <div>
                    <Link to="/">Back to Products</Link>
                </div>
                <div className="details">
                    <div className="details-image">
                        <img src={product.image}></img>
                    </div>

                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{product.name}</h4>
                            </li>
                            <li>
                                {product.brand}
                            </li>
                            <li>
                                <b>${product.price}</b>
                            </li>
                        </ul>
                    </div>

                    <div className="details-action">
                        <ul>
                            <li>
                                Price: ${product.price}
                            </li>
                            <li>
                                Qty: <select defaultValue="1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                <button>Add to cart</button>
                            </li>
                        </ul>
                    </div>
            
                </div> */}
            </div>
}

export default ProductScreen;