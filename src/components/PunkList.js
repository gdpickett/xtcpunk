import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css';

const PunkList = ({ punkListData, setSelectedPunk }) => {
    return (
        <div className='punkList'>
        {punkListData.map(punk => (
            
                <div onClick={()=> setSelectedPunk(punk.token_id)}>
                    <CollectionCard 
                        key={punk.token_id}
                        id={punk.id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_thumbnail_url}
                    />
                </div>
            
        ))}
            
            
        </div>
    )
}

export default PunkList
