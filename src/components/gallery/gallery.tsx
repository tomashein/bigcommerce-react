import { useEffect, useState } from 'react';
import classNames from 'classnames';
import ChevronLeft from '@assets/icons/chevron-left.svg';
import ChevronRight from '@assets/icons/chevron-right.svg';
import XMark from '@assets/icons/x-mark.svg';
import { GalleryType } from '@types';
import styles from './gallery.module.css';

const Gallery = ({ gallery, reset }: Props) => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);

  const { images, name } = gallery;

  useEffect(() => {
    if (images.length > 0) {
      setActive(true);
    }
  }, [images.length]);

  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const closeGallery = () => {
    if (active) {
      if (current !== 0) setCurrent(0);
      setActive(false);
      setTimeout(() => reset(), 300);
    }
  };

  const overlayClass = classNames(styles.overlay, active && styles.overlay_active);

  const thumbnailClass = (index: number) =>
    classNames(styles.thumbnail, current === index && styles.thumbnail_active);

  return (
    <div className={overlayClass}>
      <div className={styles.wrapper}>
        <div>
          <button onClick={prevImage} type="button">
            <ChevronLeft />
          </button>
        </div>
        <section className={styles.gallery}>
          <header>
            <h1 className={styles.title}>{name}</h1>
            <button className={styles.close} onClick={closeGallery} type="button">
              <XMark />
            </button>
          </header>
          <div
            className={styles.current}
            onClick={closeGallery}
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
          >
            {images.length > 0 && (
              <img alt={`product-${current + 1}`} src={images[current].url_zoom} />
            )}
          </div>

          {images.length > 1 && (
            <div className={styles.thumbnails}>
              {images.map((el, index) => (
                <button
                  className={thumbnailClass(index)}
                  key={el.id}
                  onClick={() => setCurrent(index)}
                  type="button"
                >
                  <img alt={`thumbnail-${el.id}`} src={el.url_thumbnail} />
                </button>
              ))}
            </div>
          )}
        </section>
        <div>
          <button onClick={nextImage} type="button">
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

type Props = {
  gallery: GalleryType;
  reset: () => void;
};
