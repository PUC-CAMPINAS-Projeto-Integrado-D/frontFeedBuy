import { AutoComplete } from 'antd';

const axios = require('axios').default;

export function axiosPost(url, params, bearer = null){
    let Authorization;
    if(bearer != null){
        Authorization = `Bearer ${bearer}`;
    }
    return new Promise((resolve, reject) => {
        axios.post(url, params, {
            headers: {
                Authorization 
            }
        })
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

export function axiosGet(url, bearer = null){
    let config;
    if(bearer != null){
        config = {
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        };
    }
    return new Promise((resolve, reject) => {
        axios.get(url, config)
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

export function axiosDelete(url, params, bearer = null){
    let config;
    if(bearer != null){
        config = {
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        };
    }
    return new Promise((resolve, reject) => {
        axios.delete(url, params, config)
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

export function axiosPut(url, params, bearer = null){
    let config;
    if(bearer != null){
        config = {
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        };
    }
    return new Promise((resolve, reject) => {
        axios.put(url, params, config)
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}

export function axiosPatch(url, params, bearer = null){
    let config;
    if(bearer != null){
        config = {
            headers: {
                Authorization: `Bearer ${bearer}`
            }
        };
    }
    return new Promise((resolve, reject) => {
        axios.patch(url, params, config)
        .then(function (response) {
            resolve(response)
        })
        .catch(function (error) {
            reject(error);
        });
    });
}
