// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import List from "./List";

// const ProductChange = (props) => {
//   const [deyer, hadise] = useState({ name: props.deyer, price: "20" });
//   const [deyer1, hadise1] = useState({ name: "Grand", price: "70" });
//   const newParfume = () => {
//     hadise({ name: "Lavye", price: "40" });
//     hadise1({ name: "Rose", price: "90" });
//   };
//   return (
//     <div>
//       <ol>
//         <List title={deyer.name} price={deyer.price} />
//         <List title={deyer1.name} price={deyer1.price} />
//       </ol>
//       <button onClick={newParfume}>new parfume</button>
//     </div>
//   );
// };

// ProductChange.defaultProps = {
//   deyer: "Sospiro",
// };

// const Counter =()=>{
//     const [count,setCount] = useState(0);
//     return(
//         <div className="mt-5 ms-5">
//             <button onClick={()=>{if(count>0){
//                 setCount(count -1)
//             }}} className="btn btn-danger me-3">-</button>
//             {count}
//             <button onClick={()=>setCount(count+1)} className="btn btn-success ms-3">+</button>
//         </div>
//     )
// }


class App extends React.Component{
    componentDidMount(){
        console.log('runing didmount...');
    }
    componentDidUpdate(){
        console.log('running update');
        document.querySelector('h1').innerHTML = "Hello";
    }
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
        console.log('constructor runnig...');
    }
    render(){
        return(
            <div>
                <h1>new</h1>
                <p>{this.state.count}</p>
                <button onClick={()=>{this.setState({
                    count: this.state.count +1
                })}}>add</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
