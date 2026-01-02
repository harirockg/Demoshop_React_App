import './NewProduct.css'

import ProductForm from './ProductForm';


function NewProduct(props){

    function saveProduct(product){
        console.log("i am inside NewProduct.js");
        console.log(product);

        //calling the function passed from App.js
        props.printProduct(product);
    }

    return(<div className='new-product'>
        <ProductForm onSaveProduct={saveProduct}/>
    </div>)
}

export default NewProduct;