import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
export default function Home() {
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title">
                    Welcome to PaoShop
                </h1>
                <p>
                    Discover amazing product at great Prices.
                </p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="product-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.key}>
                            <img src={product.image} className="product-card-image"/>
                            <div className="product-card-content">
                                <h3 className="product-card-name">{product.name}</h3>
                                <p className="product-card-price">$ {product.price}</p>
                                <div className="product-card-actions"> 
                                    <Link className="btn btn-secondary">View Details</Link>
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}