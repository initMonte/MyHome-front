import LOGO from './icons/logo.svg'; //<-- para importar cosas svg se hace asi
import GOOGLE from './icons/google.svg';
import GROUP from './icons/group.svg';
import SUCCESS from './icons/success.svg';

const IMAGES = {
  SVG: {
    LOGO, //<-- la que importamos mas arriba
    GOOGLE,
    GROUP,
    SUCCESS,
  },
  OTHERS: {
    //IMAGEN_CUALQUIERA_EXCEPTO_SVG : require ('./backgrounds/imagen.webp') <-- asi se importa cualquier tipo de imagen que no sea SVG
  },
};
export default IMAGES;
