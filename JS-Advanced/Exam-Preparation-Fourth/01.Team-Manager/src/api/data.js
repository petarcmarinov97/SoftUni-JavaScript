import * as api from './api.js';

const host='http://localhost:3030';
api.settings.host=host;

export const login=api.login;
export const register=api.register;
export const logout=api.logout;


//Implement application-specific requests

export async function getAllTeams() {
    return await api.get(host + "/data/teams");
}
export async function getAllMembers(id) {
    return await api.get(host + '/data/members?where=status%3D%22member%22');
}
export async function createCar(data) {
    return await api.post(host + '/data/cars', data);
}

export async function deleteCar(id) {
    return await api.del(host + '/data/cars/'+id);
}

export async function editCar(id, data){
    return await api.put(host + '/data/cars/'+id, data);
}

export async function getMyCars() {
    const userId=sessionStorage.getItem('userId')
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}