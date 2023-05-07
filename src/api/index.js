

export const createRequestApi=()=>{
    return fetch("https://api.npoint.io/d0fe9a5513208c354c52").then(resp=>resp.json())
}

export const searchFlightApi=()=>{
    return fetch("https://api.npoint.io/4829d4ab0e96bfab50e7").then(resp=>resp.json())
}