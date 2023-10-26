import LOGO from './icons/logo.svg'; //<-- para importar cosas svg se hace asi
import GOOGLE from './icons/google.svg';
import GROUP from './icons/group.svg';
import SUCCESS from './icons/success.svg';
import FAV_BUTTON_ADDED from './icons/favButtonAdded.svg';
import FAV_BUTTON_NOT_ADDED from './icons/favButtonNotAdded.svg';
import DOOR from './icons/door.svg';
import SHOWER from './icons/shower.svg';
import BED from './icons/bed.svg';
import RULER from './icons/ruler.svg';

const IMAGES = {
  SVG: {
    LOGO, //<-- la que importamos mas arriba
    GOOGLE,
    GROUP,
    SUCCESS,
    FAV_BUTTON_ADDED,
    FAV_BUTTON_NOT_ADDED,
    DOOR,
    SHOWER,
    BED,
    RULER,
  },
  OTHERS: {
    //IMAGEN_CUALQUIERA_EXCEPTO_SVG : require ('./backgrounds/imagen.webp') <-- asi se importa cualquier tipo de imagen que no sea SVG
    TEMPORAL_IMAGE: require('./icons/temporal_image.png'),
    TEMPORAL_IMAGE_LOGO: require('./icons/temporal_image_logo.png'),
  },
};
export default IMAGES;
