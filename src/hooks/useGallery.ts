import { useContext } from 'react';
import { GalleryContext, GalleryContextType } from '@context/gallery';

const useGallery = () => useContext(GalleryContext) as GalleryContextType;

export default useGallery;
