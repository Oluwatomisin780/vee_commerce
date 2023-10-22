import { v2 } from 'cloudinary';
//import { CLOUDINARY } from './constants';
import { CLOUDINARY } from './constants/constant';
export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): void => {
    v2.config({
      cloud_name: 'dawd1afyx',
      api_key: '243522263953495',
      api_secret: 'SyGjMuaUlmLq22hRIai4tjDzVco',
    });
  },
};
