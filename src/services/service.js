import axios from 'axios'

const baseUrl = 'https://62125283f43692c9c6e7c136.mockapi.io/api/v1/books';

const getAll = async () => {
    const result = await axios.get(baseUrl)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return result;
}

const getById = async (id) => {
    const result = await axios.get(`${baseUrl}/${id}`)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return result;
}

const add = async (data) => {
    const result = await axios.post(`${baseUrl}`, data)
        .then((response) => {
            if (response.status !== 201) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return result;
}

const update = async (id, data) => {
    const result = await axios.put(`${baseUrl}/${id}`, data)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return result;
}

const remove = async (id) => {
    const result = await axios.delete(`${baseUrl}/${id}`)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                );
            }
            return response.data;
        })
        .catch((err) => {
            console.log(err.message);
        });
    return result;
}

export const bookService = {
    getAll,
    getById,
    add,
    update,
    remove
};