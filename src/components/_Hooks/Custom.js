import axios from "axios";
import useSWR from "swr";



const fetcher = (url) => axios.get(url).then(result => result.data);

const useGet = (url, id = 0) => {

    let finalUrl = url;
    if(id > 0) {
        finalUrl += ("/" + id);
    }

    const {data, error, mutate} = useSWR(finalUrl, fetcher);

    return {
        data: data,
        error: error,
        isLoading: !error && !data,
        mutate: mutate
    }
}

const usePut = (url, id) => {
    const finalUrl = url + "/" + id;
    return (data, successFn) => {
        axios.put(finalUrl, data).then(result => {
            if(result.data) {
                successFn();
            }
        })
    }
}

const usePost = (url) => {

    return(data, successFn) => {
        axios.post(url, data).then(result => {
            if(result.data) {
                successFn(result.data);
            }
        })
    }
}

const useDelete = (url, id) => {

    const finalUrl = url + "/" + id;

    return (successFn) => {
        axios.delete(finalUrl).then(result => {
            if(result.data) {
                successFn();
            }
        })
    }
}


export { useGet, usePut, usePost, useDelete };