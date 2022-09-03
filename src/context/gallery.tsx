import { createContext, useCallback, useMemo, useState } from 'react';
import Gallery from '@components/gallery';
import { GalleryType, Image } from '@types';

export const GalleryContext = createContext<GalleryContextType | null>(null);

const GalleryProvider = ({ children }: Props) => {
  const [gallery, setGallery] = useState<GalleryType>({ name: '', images: [] });

  const showGallery = useCallback(
    (name: string, images: Image[]) => () => {
      const sortedImages: Image[] = [...images].sort(
        (a, b) => Number(b.is_thumbnail) - Number(a.is_thumbnail)
      );
      setGallery({ name, images: sortedImages });
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      showGallery
    }),
    [showGallery]
  );

  return (
    <GalleryContext.Provider value={contextValue}>
      <Gallery gallery={gallery} reset={() => setGallery({ name: '', images: [] })} />
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;

export type GalleryContextType = {
  showGallery: (name: string, images: Image[]) => () => void;
};

type Props = {
  children: React.ReactNode;
};
