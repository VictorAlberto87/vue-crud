import Services from './config'

const services = {}

services.createUser = (user) => {
    return Services.post('/users', user).then(res => res.data)
}

services.getUsers = () => {
    return Services.get('/users').then(res => res.data)
}

services.updateUser = (user) => {
    return Services.put(`/users/${user.id}`, user).then(res => res.data);
}

services.deleteUser = (id) => {
    return Services.delete(`/users/${id}`).then(res => res.data);
}

export default services;
