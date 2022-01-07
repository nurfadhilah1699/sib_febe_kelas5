class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError ("gagal mendapatkan data dari internet"), null);
            } 
            resolve(null, {name: "john", age: 18});
        }, 500);
    })
};

async function gettingUser() {
    try {
        const user = await fetchingUserFromInternet(false);
        return user.name;
    } catch(error) {
        return error.message;
    }
}
