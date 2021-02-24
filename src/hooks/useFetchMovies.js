import { useState, useEffect } from 'react'
import { getMovieByName } from '../helpers/getData';


export const useFetch = ( mavie ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getMovieByName( mavie )
            .then( data => {
                
                setState({
                    data: data,
                    loading: false
                });
            })

    }, [mavie])

    return state;
}


