// Products_list
import Product from "./Product";

function Products_list(){

    let products =[
        {id:1, name:"Levis Jeans", price:20000, url:"https://5.imimg.com/data5/ANDROID/Default/2023/6/318756666/SQ/XK/HF/145684826/product-jpeg.jpg"},
        {id:2, name:"Samsung M51", price:34000, url:"https://rukminim1.flixcart.com/image/850/1000/kfeamq80/mobile/y/s/f/samsung-galaxy-m51-sm-m515fzbd-original-imafvvgft9cgdrsz.jpeg?q=90"},
        {id:3, name:"Dell Monitor", price:10000, url:"https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2722qc/media-gallery/s2722qc_cfp_00000ff090_gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=804&qlt=100,1&resMode=sharp2&size=804,804&chrss=full"},
        {id:4, name:"SC-Headphone", price:15000, url:"https://variety.com/wp-content/uploads/2023/10/skullcandy-x-tmnt-gaming-headset.jpg?w=1024"},
        {id:5, name:"E-Pos Printer", price:25000, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxB3NN0X19LSWfUrxYG8VmeCRdOKGtx-kuw&usqp=CAU"}
    ]
return(
    <div className='products'>
        {
            products.map((product)=>{
            return(
                <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
            )
            })
        }
    </div>

);
}
export default Products_list;