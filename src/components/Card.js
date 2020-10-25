import React from 'react';


const Card = (props) =>{
    const {name,email,id}=props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 hover- pointer:hover: pointer'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

// const Card = (props) => {
//     const { name, email, id } = props;
//     return[
//         <img src={`https://robohash.org/${id}?200x200`} alt="robots" />,
//         <h2>{name}</h2>,
//         <p>{email}</p>

//     ]; 
// }

// const Card = (props) => {
//     const { name, email, id } = props;
//     return (
//         <React.Fragment>
//         <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
//         <h2>{name}</h2>
//         <p>{email}</p>
//         </React.Fragment>
//     );
// }

export default Card