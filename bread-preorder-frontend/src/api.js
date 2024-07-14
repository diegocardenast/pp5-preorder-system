import axios from 'axios';


// Here the baseURL is stored
const api = axios.create({
    baseURL: 'https://8000-diegocarden-pp5preorder-01sol8fjcbf.ws.codeinstitute-ide.net',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;
