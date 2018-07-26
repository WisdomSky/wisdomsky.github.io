
import UnsplashService from './UnsplashService'


export default new class extends UnsplashService {

    getPhotos() {
        return this.get('users/wisdomsky/photos')
    }


    getPhoto(id) {
        return this.get(`photos/${id}`);
    }


}