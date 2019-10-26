import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'http://localhost:8163';

const agent = request.agent();

export const getApi = (url, params) => {
    return new Promise((resolve, reject) => {    
        return request.get(`${URL}/${url}`)
            .query(params)
            .responseType()
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                reject('GET | error found: ', err);
            });
    });
}

export const postApi = (url, body) => {
    return new Promise((resolve, reject) => {
        return request.post(`${URL}/${url}`)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            return resolve(res);
        })
        .catch(err => {
            reject('POST | error found: ', err);
        });
    });
}

export const putApi = (url, headers, body) => {
    return new Promise((resolve, reject) => {
        return request.put(`${URL}/${url}`)
            .set(headers)
            .send(body)
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                reject('PUT | error found: ', err);
            });
    })
}

export const deleteApi = (url, headers) => {
    return new Promise((resolve, reject) => {
        return request.delete(`${URL}/${url}`)
            .set(headers)
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                reject('CustomApi DELETE | error found: ', err);
            });
    })
}

export const externalApi = (url, method, responseType = null, headers = {}, body = {}) => {
    return new Promise((resolve, reject) => {
        if (url && method) {
            switch (method) {
                case 'GET': {
                    return request.get(url)
                    .responseType(responseType)
                    .set(headers)
                    .then(res => {
                        return resolve(res);
                    })
                    .catch(err => {
                        reject('CustomApi GET | error found: ', err);
                    });
                }

                case 'DELETE': {
                    return request.delete(url)
                    .set(headers)
                    .then(res => {
                        return resolve(res);
                    })
                    .catch(err => {
                        reject('CustomApi DELETE | error found: ', err);
                    });
                }

                case 'POST': {
                    return request.post(url)
                    .set(headers)
                    .send(body)
                    .then(res => {
                        return resolve(res);
                    })
                    .catch(err => {
                        reject('CustomApi POST | error found: ', err);
                    });
                }

                case 'PUT': {
                    return request.put(url)
                    .set(headers)
                    .send(body)
                    .then(res => {
                        return resolve(res);
                    })
                    .catch(err => {
                        reject('CustomApi PUT | error found: ', err);
                    });
                }

                default:
                    return null;
            }
        }

        return reject('no url or method specified');
    });
};
