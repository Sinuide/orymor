import { classNames } from 'src/utils/classNames'

import './picture.css'

export type PictureProps = {
  src?: string
  id?: string
  alt?: string
  loading?: 'lazy' | 'eager'
  className?: string
}

// Not very useful at the moment, it's just an img with lazy loading
// Could be used to define a <picture> with <sources> if multiple images are available
// Mostly helpful for responsive
export const Picture: React.FC<PictureProps> = ({
  id,
  src,
  alt,
  loading = 'lazy',
  className,
}) => (
  <img
    className={classNames('picture', className)}
    src={src ?? `/api/image/${id}`}
    alt={alt}
    loading={loading}
  />
)
