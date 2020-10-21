import React from 'react';
import Card from './Card';

const CardList = ({ robots }) =>{
    // const cardArray = robots.map((robot,i) => {
    //     return (
    //         <Card 
    //             key={robots[i].id} 
    //             id={robots[i].id} 
    //             name={robots[i].name} 
    //             email={robots[i].email} 
    //         />
    //     );
    // });
    return(
        // robots.map((robot) => {
        //   return <Card id={robot.id} name={robot.name} email={robot.email}/>;  
        // })
        <div>
            {/* {cardArray} */}
            {
                robots.map((robot, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    )
}

export default CardList