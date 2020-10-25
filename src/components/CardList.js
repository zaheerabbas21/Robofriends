import React from 'react';
import Card from './Card';

// const CardList = ({ robots }) => {
//     // const cardArray = robots.map((robot,i) => {
//     //     return (
//     //         <Card 
//     //             key={robots[i].id} 
//     //             id={robots[i].id} 
//     //             name={robots[i].name} 
//     //             email={robots[i].email} 
//     //         />
//     //     );
//     // });
//     return (
//         // robots.map((robot) => {
//         //   return <Card id={robot.id} name={robot.name} email={robot.email}/>;  
//         // })
//         <div>
//             {/* {cardArray} */}
//             {
//                 robots.map((robot) => {
//                     return (
//                         <Card
//                             key={robot.id}
//                             id={robot.id}
//                             name={robot.name}
//                             email={robot.email}
//                         />
//                     );
//                 })
//             }
//         </div>
//     )
// }



const CardList = ({ robots }) => {
    // if(true){
    //     throw new Error("Nooooo!");
    // }
    return (
        <div>
            {
                robots.map((robot) => {
                    return (
                        <Card
                            key={robot.id}
                            id={robot.id}
                            name={robot.name}
                            email={robot.email}
                        />
                    );
                })
            }
        </div>
    )
}
export default CardList;