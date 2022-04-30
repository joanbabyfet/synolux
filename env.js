module.exports = {
    dev: { 
        NODE_ENV: 'dev',                //开发环境
        BASE_API: 'http://api.sienergy.local'   //开发服务器接口地址
    },
    test: { 
        NODE_ENV: 'testing',            //测试环境
        BASE_API: 'http://testapi.synolux.com' //测试服务器接口地址
    },
    pro: { 
        NODE_ENV: 'production',         //生产环境
        BASE_API: 'http://api.synolux.com'     //生产服务器接口地址
    }
}