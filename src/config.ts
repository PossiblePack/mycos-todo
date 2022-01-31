const config = {
    "development": {
        "baseURL": process.env.REACT_APP_DEV_API_URL,
        "port": "4000"
    },
    "production": {
        "baseURL": process.env.REACT_APP_API_URL
    }
};

export default function Config(): any {
    if (process.env.NODE_ENV === 'production') {
        return config.production;
    }
    else {
        return config.development;
    }
}