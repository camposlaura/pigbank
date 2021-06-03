import axios from 'axios'

const api = axios.create({
    baseURL:'https://economia.awesomeapi.com.br'
})

async function getData() {
    const res = await api.get('/json/all')
    console.log(res.data); // teste
    return res.data;
}

export { getData }