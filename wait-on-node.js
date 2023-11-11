module.exports = {
    validateStatus: function (status) {
        return status == 405 || (status >= 200 && status < 300);
    },
};