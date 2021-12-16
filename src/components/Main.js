import React, {useState, useEffect} from 'react';
import './Main.css';
import instagram from '../assets/owner/instagram.png';
import twitter from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';

const Main = ({selectedPunk, punkListData}) => {
    const [ activePunk, setActivePunk ] = useState(punkListData[0]);
    useEffect(()=> {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk]);
    
    return (
        <div className='main'>
            <div className='mainContent'>
                <div className='punkHighlight'>
                    <div className='punkContainer'>
                        <img className='selectedPunk' src={activePunk?.image_original_url} alt='' />
                    </div>
                </div>
                <div className='info'>
                    <div className='punkDetails' style={{ color: '#FFF'}}>
                        <div className='title'>{activePunk.name}</div>
                        <span className='itemNumber'>#{activePunk.token_id}</span>
                    </div>
                    <div className='owner'>
                        <div className='ownerImageContainer'>
                            <img src={activePunk.owner.profile_img_url} alt='' />
                        </div>
                        <div className='ownerDetails'>
                            
                                <div className='ownerNameAndHandle'>
                                    <div className='ownerAddress'>{activePunk.owner.address}</div>
                                    <div className='ownerHandle'>@xtcpunks</div>
                                </div>
                                <div className='ownerLink'>
                                    <img src={instagram} alt='' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={twitter} alt='' />
                                </div>
                                <div className='ownerLink'>
                                    <img src={moreIcon} alt='' />
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
 