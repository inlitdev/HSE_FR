import http from '@/api/http-common';
import http_multipart from '@/api/http-common';

class ObservationService {

    // Categories
    getAllCategories(){
        return http.get('api/categories');
    } 
    getCategoriesByName(id){
        return http.get('api/categories/'+id);
    }
    getCategoriesById(id){
        return http.get('api/admin/categories/byid/'+id);
    }
    postDataCategories(data){
        return http.post('api/categories',data);
    }
    updateDataCategories(data){
        return http.post('api/admin/categories/update',data);
    } 
    deleteDataCategories(id){
        return http.post('api/admin/categories/delete/'+id);
    }
    
    // Location
    getAllLocation(){
        return http.get('api/locations');
    }
    postDataLocation(data){
        return http.post('api/locations',data);
    }
    getLocationByName(id){
        return http.get('api/locations/'+id);
    }
    updateDataLocation(data){
        return http.post('api/admin/locations/update',data);
    }
    deleteDataLocation(id){
        return http.post('api/admin/locations/delete/'+id);
    }

    // Observation
    PostObservation(data){
        return http_multipart.post('api/admin/observations/tambah/',data);
    }
} export default new ObservationService();