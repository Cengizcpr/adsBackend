const users = [{ id: 1, username: 'admin', password: 'osiadmin' }];

module.exports = {
    authenticate,
};

async function authenticate({ username, password }) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

