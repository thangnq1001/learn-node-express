const getEnvConfig = () => {
    switch (process.env.NODE_ENV) {
        case 'dev':
            return './dev.env.json';
        case 'prod':
            return './prod.env.json';
        default:
            return './dev.env.json';
    }
};

module.exports = require(getEnvConfig());