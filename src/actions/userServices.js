import Api from './../api.js'
export const userServices = {
    login
};

function login({username, password}) {
    const options = {
        ...Api.postOptions,
        body: JSON.stringify({ userName: username, password })
    };
    return fetch(Api.apiBaseUrl + Api.userLogin, options)
        .then(handleResponse)
        .then(res => res )
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}