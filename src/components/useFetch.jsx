import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Fetched data doesn't exist")
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log("fetch aborted")
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }

}

export default useFetch;