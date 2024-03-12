
import './App.css';
import React from 'react';
import Products from './components/Products';
import NewProduct from './components/NewProduct';

const App= () => {

  const products =[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date:new Date(2021,8,10),
    },

    {
      id:'p2',
      title:'Surf Excel',
      amount:200,
      date:new Date(2022,2,20),
    },
    {
      id:'p3',
      title:'Tide',
      amount:300,
      date:new Date(2031,3,30),
    },
    {
      id:'p4',
      title:'Arial',
      amount:400,
      date:new Date(2024,4,40),
    },
  ]

  function printProductData(data) {
    console.log("inside app");
    console.log(data);
    
  }
  return (
<div>
<NewProduct printProduct= {printProductData}/>
<Products items={products} />
</div>
  );
 
}

export default App;
