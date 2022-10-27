import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { loadMessageOverviews } from '../../../API/internal_datasources/Messages';
import SingleMessageCard from './SingleMessageCard';

const Messages = ({AdjustNavbar}) => {
    
    const [messageOverviewData, setMessageOverviewData] = useState([]);
    const [initialLoadDone, setInitialLoadDone] = useState(false);

    useEffect(() => {
        const props = {
            PageName: 'Messages',
            currentListElement: 'Messages',
        };
        
        AdjustNavbar(props, _=>_);
        DataReload();
    }, []);

    const DataReload = () =>{
        loadMessageOverviews(LoadData);
    };

    const LoadData = (data) =>{
        setMessageOverviewData(data);
        console.log(messageOverviewData);
        setInitialLoadDone(true);
    };

    return  (
        <>
        {!initialLoadDone ?
            <div> 
                Loading...
            </div>

            :
            <Container>
                {
                    messageOverviewData.map(message => 
                        <SingleMessageCard messageData={message} />
                    )
                }
            </Container>
        }
        </>
    ) 
}

export default Messages