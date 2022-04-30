const bcrypt = require('bcryptjs');

const encryptString = async (cadena) => {
    const salt = bcrypt.genSaltSync();
    return await bcrypt.hashSync(cadena, salt);
}

module.exports = encryptString;