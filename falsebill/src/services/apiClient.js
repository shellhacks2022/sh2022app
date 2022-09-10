class ApiClient {
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl;
    }

    /**
     * Standard request function used for any request into the API client
     */

    async request({endpoint, method = "GET", data = {}}) {
        const url = `${this.remoteHostUrl}${endpoint}`;

        const headers = {
            "Accept":"application/json, text/plain, /",
            "Content-Type": "application/json"
        }

        try {
            const res = await axios({url, method, data, headers});
            return {data: res.data, error: null};
        }
        catch (err) {
            console.error({ errorResponse: err.response });
            const message = err?.response?.data?.error?.message;
            return {data: null, error: message || String(err)}
        }
    }
}

export default new ApiClient(API_BASE_URL)