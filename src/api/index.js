import axios from 'axios';
import {useEffect, useState} from "react";

// Create an Axios instance with a base URL and default configurations
const api = axios.create({
    baseURL: 'http://43.198.80.191:3000',  // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',  // Request body is JSON
        'Accept': 'application/json',        // Expect response to be JSON
    },
    responseType: 'json',  // This tells Axios to parse the response as JSON
});

const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const fetchUsers = () => {
        api.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }
    useEffect(() => {
        fetchUsers()
    }, []);
    return { users, error  }
}

export { useGetUsers }
export default api;
