import React, { Component } from 'react'

const ProductDetails = ({match}) => {
  return (
    <div>ProductDetails:{match.params.id}</div>
  )
}

export default ProductDetails

// class App extends Component{
//     render(){
//         return(
//             <h1>Hello</h1>
//         )
//     }
// }

// function App(){
//     return(
//         <h1>Hello</h1>
//     )
// }

// const App =function(){
// return(
//     <h1>Hello</h1>
// )
// }

// const App =()=>{
//     return(
//         <h1>Hello1</h1>
//     )
// }