import http from '@/api/http-common';
import http_multipart from '@/api/http-common';

class PictureService {

    // Images
    getAllPicture(){
        return http.get('api/slide/index');
    }
    publishPicture(id, order){
        return http.post('api/slide/publish/'+id,order);
    }
    unpublishPicture(id){
        return http.post('api/slide/unpublish/'+id);
    }
    uploadPicture(data){
        return http_multipart.post('api/slide/post/',data);
    }
    deletePicture(data){
        return http.post('api/slide/hapus/'+data);
    }

    
} export default new PictureService();