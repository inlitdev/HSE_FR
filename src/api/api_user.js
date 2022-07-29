import http from '@/api/http-common';

class UserService {

    // User
    getAllUser(){
        return http.get('api/admin/user/index');
    }
    getUserByID(id){
        return http.get('api/admin/user/index/'+id);
    }
    postUser(data){
        return http.post('api/admin/user/tambah',data);
    } 
    updateUser(data){
        return http.post('api/admin/user/update',data);
    }
    deleteUser(data){
        return http.post('api/admin/user/delete/'+data);
    } 

} export default new UserService();