// import React,{Component} from 'react';
import React from 'react';
import './Hello.css';


// class Hello extends Component{
//     render(){
//         return(
//             <div className="f1 tc">
//             <h1>Hello World</h1>
//             <p>
//                     Welcome to React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae deleniti et! Voluptatem iure nisi aut accusantium eos doloremque fugiat consequatur magni, tenetur dolore. Labore vero praesentium dicta magni quam!
//             </p>
//             <p>
//                 {this.props.greeting}
                
//                 {this.props.name}
//             </p>
//             </div>
//         );
//     }
// }

const Hello = (props) =>{
    return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            <p>
                Welcome to React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae deleniti et! Voluptatem iure nisi aut accusantium eos doloremque fugiat consequatur magni, tenetur dolore. Labore vero praesentium dicta magni quam!
            </p>
            <p>
                {props.name} {props.greeting}
            </p>
        </div>
    );
}


export default Hello;