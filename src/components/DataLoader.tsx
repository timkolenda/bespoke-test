import React, { useState, useEffect, ReactNode } from 'react';
import axios from 'axios';


export const DataLoader = (props: {children?: ReactNode, apiUrlEndpoint: string}) => {
    const { children, apiUrlEndpoint } = props;
    const [ apiData, setApiData ] = useState<ReactNode>(null);

    useEffect(() => {
        (async () => {
            const result = await axios.get(`${apiUrlEndpoint}`);
            setApiData(result.data);
            console.log(apiData)
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

return  apiData ? (
        <>
        {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child as React.ReactElement<any>, { list: apiData })
            } else {
                return child
            }
        })}
        </>
    ) : ( <p>Loading...</p> )
}


