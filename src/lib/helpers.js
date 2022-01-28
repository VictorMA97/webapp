const bcrypt = require('bcryptjs');
const helpers = {};

helpers.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const finalpass = await bcrypt.hash(password, salt);
    return finalpass;
};

helpers.matchPassword = async(password, savedPassword) => {
    try {
        await bcrypt.compare(password, savedPassword);
    } catch (e) {
        console.log(e);
    }
};

module.exports = helpers;