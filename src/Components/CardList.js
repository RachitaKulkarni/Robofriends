import React from 'react';
// import {robots} from './robots';
import Card from './Card';

const CardList = ({robots}) =>{
    return(
        <div>
            {
                robots.map( (user,i)=>{
                    return <Card key={i} ID={robots[i].id}  Name={robots[i].name}  Email={robots[i].email}/>
                })
            }
        </div>
    );
}


// const CardList = ({robots}) =>{
//     const cardArray = robots.map( (user,i)=>{
//             return <Card key={i} ID={robots[i].id}  Name={robots[i].name}  Email={robots[i].email}/>
//         }    
//     );

//     return(
//         <div>
//             {cardArray};
//         </div>
//     );
// }
export default CardList;