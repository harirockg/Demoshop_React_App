// import logo from './logo.svg';
// import './App.css';
// import Item from './components/Item';
// import ItemDate from './components/ItemDate';
// import Card from './components/Card';

import React from 'react';
import NewProduct from './components/NewProduct';

import Products from './components/Products';


const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Surf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  // function printProductData(data) {
  //   console.log("i am inside APP.js")
  //   console.log(data)
  // }

  function printProductData(data) {
    console.log("i am inside APP.js")
    console.log(data)
  }

  return (
    <div>
      {/* <NewProduct pranay = {printProductData} /> */}
      <NewProduct printProduct={printProductData} />
      <Products items={products} />
    </div>
  );
}



//old


// function App() {
//   //2 method to parse
//   // const itemTwoName="SurfExcel"; // but we will not use here

//   const response=[
//     {
//       itemName:"Nirma",
//       itemDay:"301",
//       itemMonth:"June",
//       itemYear:"2025"
//     },

//     {
//       itemName:"Nirma2",
//       itemDay:"302",
//       itemMonth:"June2",
//       itemYear:"2026"
//     },

//     {
//       itemName:"Nirma3",
//       itemDay:"303",
//       itemMonth:"June3",
//       itemYear:"2027"
//     }

//   ]

//   return (
//     <div>
//       <Card>
//       <Item name={response[0].itemName} > 
//         Hello ji kaise ho sare jan 
//       </Item>
//       <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

//       <Item name={response[1].itemName} > </Item>
//       <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

//       <Item name={response[2].itemName} > </Item>
//       <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

//       <div className="App">Hello Bhai Log</div>

//       </Card>



//       {/* <Item name="Nirma" > </Item>
//       <ItemDate day="13" month="June" year="2002"></ItemDate>

//       {/* <Item name={itemTwoName} > </Item>
//       <Item name="Surf Excel" > </Item>
//       <ItemDate day="20" month="Aug" year="2008"></ItemDate>

//       <Item name="Wheel" > </Item>
//       <ItemDate day="05" month="Dec" year="2016"></ItemDate> */}

//     </div>
//   );
// }


export default App;
