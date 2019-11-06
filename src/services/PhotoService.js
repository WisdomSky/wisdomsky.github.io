
import UnsplashService from './UnsplashService'


export default new class extends UnsplashService {

    getPhotos(page = 1) {
        return this.get('users/wisdomsky/photos', {
            per_page: 5,
            page
        })
    }


    getPhoto(id) {
        return this.get(`photos/${id}`);
    }


}