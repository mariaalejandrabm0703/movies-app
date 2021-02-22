import { useState, useEffect } from 'react'
import { getData } from '../helpers/getData';


export const useFetch = ( mavie ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getData( mavie )
            .then( data => {
                
                setState({
                    data: data,
                    loading: false
                });
            })

    }, [mavie])

    return state;
}


