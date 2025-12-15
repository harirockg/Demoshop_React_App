import { useState } from 'react';
import './ProductForm.css'
import './ProductForm'

function ProductForm(){

    const[title,setTitle]=useState('');
    const[date,setDate]=useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log("Title change karna hai?");
        console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        console.log(event.target.value);
    }

    
    return(<form>
    <div className='new-product__control'>
        <div className='new-product__control'>
            <label>Title</label>
            <input type='text' onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product__control'>
            <label>Date</label>
            <input type='date'onChange={dateChangeHandler} min='2025-01-01' max='2025-12-12'></input>
        </div>
        <div className='new-product-button'>
            <button type='submit'>Add Product</button>
        </div>
    </div>

    </form>)
}

export default ProductForm;