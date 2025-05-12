module.exports.config = {
    tests: './*_test.js',
    timeout: 10000,
    output: './output',
    helpers: {
        Playwright: {
            url: 'http://0.0.0.0:8000',
            show: false,
            chrome: {
                args: [
                    '--disable-web-security',
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                ],
            },
        },
        FileSystem: {},
        MockRequestHelper: {
            require: '../index.js'
        },
    },
    include: {},
    bootstrap: false,
    mocha: {},
    name: 'acceptance',
};