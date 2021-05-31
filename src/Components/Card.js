import React from 'react';

const Card = ({ID,Name,Email}) => {
    //const{ID,Name,Email}=props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img src={`https://robohash.org/${ID}?set=set1&size=200x200`} alt="Robots"/> */}
            <img src={`https://robohash.org/${ID}?size=200x200`} alt="Robots"/>

            <div>
                 <h2>{Name}</h2>
                 <p>{Email}</p>
            </div>
        </div>
    );
};
export default Card;