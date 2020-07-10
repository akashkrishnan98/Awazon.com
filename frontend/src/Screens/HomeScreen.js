import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';

class Product extends React.Component {
    render() {
      return (
        this.props.products.map(product =>
          <li key={product._id}>
            <div className="product">
                <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="Product1"/>
                </Link>
                <div className="product-name">
                    <Link to={'/product/' + product._id}>
                        {product.name}
                    </Link>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
            </div>
        </li>
        )
      )
    }
}

function HomeScreen(props) {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("/api/products");
            setProduct(data)
        }
        fetchData();
        return () => {

        };
    }, []);

    return  <ul className="products">
                <Product products={products} />
            </ul>
}
export default HomeScreen;