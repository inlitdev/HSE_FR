import http from '@/api/http-dash';

class DashService {

    // Slide
    getAllSlide(){
        return http.get('api/dashboard/slide/index');
    }
    
    // Work Program
    getAllPrograms(){
        return http.get('api/dashboard/schedule_weekly');
    }

} export default new DashService();