module.exports = {
    devServer : {
        port:8081,
        proxy : {
            '/api2' : {
                target : 'http://localhost:3000',
                changeOrigin : true
            },
            '/api' : {
                target : 'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}
