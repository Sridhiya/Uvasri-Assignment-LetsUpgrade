// product
function Product(props){
    return(
        <div className="product">
            <img className="img" src={props.url}></img>
            <h2>{props.name}</h2>
            <p>{props.price}Rs</p>
        </div>
    );
}
export default Product;