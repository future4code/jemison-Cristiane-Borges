import  { useState, useEffect } from "react";
import axios from "axios";


const useRequestData = (url) => {

    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, {

            headers: {

                auth:localStorage.getItem("token")
            }
        })
            .then((response) => {
                setIsLoading(false)
                setData(response.data)
            }).catch((error) => {
                setIsLoading(false)
                setError(error)
                console.log(error.data)
            })
    }, [url])
    return [data, isLoading, error]
}
export default useRequestData;