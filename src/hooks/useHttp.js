import axios from "axios"
import { useState } from "react"


const useHttp = (url) => {

    const [response, setResponse] = useState()
    
    const getHttp = () =>{
        axios.get(url)
        .then(res => setResponse(res.data))
        .catch(err => console.log(err))
    }

    return [response, getHttp]
}

export default useHttp