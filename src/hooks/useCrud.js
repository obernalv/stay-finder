import axios from "axios"
import { useState } from 'react'
import getConfigToken from '../services/getConfigToken'

const useCrud = () => {

    const [response, setResponse] = useState()

    const getHttp = (url) =>{
        axios.get(url, getConfigToken())
            .then(res => setResponse(res.data))
            .catch(err => console.log(err))
    }

    const postHttp = (url, data) =>{
        axios.post(url, data, getConfigToken())
            .then(res =>{
                console.log(res.data);
                setResponse(response ? [...response, res.data] : [res.data])
            })
            .catch(err => console.log(err))
    }

    const deleteHttp = (url, id) =>{
        axios.delete(url, getConfigToken())
        .then(res =>{
            console.log(res.data);
            setResponse(response.filter(e =>e.id !==id))
        })
        .catch(err => console.log(err))
    }

    const updateHttp = (url, data, id) =>{
        axios.put(url, data, getConfigToken())
        .then(res =>{
            
            setResponse(response.map(e => e.id == id ? res.data : e))
        })
        .catch(err => console.log(err))
    }

    return [response, getHttp, postHttp, deleteHttp, updateHttp]
}

export default useCrud