var PROXY_CONFIG = [
    {
        context: [
            "/api",
            "/auth",
            "/test",
            "/user",
            "/logout",
            "/login",
            "/create"
        ],
        target: "http://localhost:3000",
        secure: false
    }
];
module.exports = PROXY_CONFIG;
