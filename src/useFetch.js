/* A custom hook MUST start with use - useFetch */
import {useState, useEffect} from 'react';


const useFetch = (url)=>{
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(()=>{
        fetch(url, {signal: abortCont.signal})
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error("Could not fetch the data for that resource.")
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err=>{
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                console.log(err.message);
                setIsPending(false);
                setError(err.message);}
            })
        }, 1000)

        return ()=> abortCont.abort()
    }, [url]);

    return {data, isPending, error}
}

export default useFetch;