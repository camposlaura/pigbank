import {useState} from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/json/all'
})

export default function GetData() {
    const [info, setInfo] = useState(null)
    axios.get(api.baseURL).then(res => setInfo(res));
    console.log(info); // teste
    return info;
}

// export {api}