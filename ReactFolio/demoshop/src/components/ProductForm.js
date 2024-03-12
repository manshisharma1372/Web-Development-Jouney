import { useState } from 'react';
import './ProductForm.css';


function ProductForm(props) {

    /*
const[fullProductInput, setFullProductInput]=useState(
    {
        title:'',
        date:''
    }
);

function titleChangeHandler(event, prevState) {
   let obj={...prevState, title: event.target.value};
   console.log(obj);
   return obj;
   
}
function dateChangeHandler(event) {
    //setDate(event.target.value);
    
}
*/

    const[newtitle,setTitle] = useState('');
    const[newdate, setDate] = useState('');

    function titleChangeHandler(event) {
        setTitle(event.target.value);
        console.log(event.target.value);
    }

    function dateChangeHandler(event) {
        setDate(event.target.value);
        console.log(event.target.value);
        
    }
   
    function submitHandler(event) {
        event.preventDefault();

        const productData = {
            title:newtitle,
            date:newdate
        };
        //console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-product_title'>
                <label>Title</label>
                <input type='text' value={newtitle} onChange={titleChangeHandler}></input>
            </div>

            <div className='new-product_date'>
                <label>Date</label>
                <input type='date' value={newdate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
            </div>
            <div className='new-product_button'>
                <button type='submit'>Add Product</button>
            </div>
        </form>
    );
}
export default ProductForm;