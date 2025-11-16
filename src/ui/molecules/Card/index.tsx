import { useCartStore } from 'src/stores/cart'
import { useLocaleStore } from 'src/stores/locale'
import { Picture, type PictureProps } from 'src/ui/atoms/Picture'
import { Price } from 'src/ui/atoms/Price'
import { Typography } from 'src/ui/atoms/Typography'
import { classNames } from 'src/utils/classNames'
import { getPrice } from 'src/utils/price'

import './card.css'

export type CardProps = {
  id: string
  picture: PictureProps
  content: {
    name: string
    description: string
    price: number
  }
  className?: string
}

export const Card: React.FC<CardProps> = ({
  id,
  picture,
  content,
  className,
}) => {
  const locale = useLocaleStore().locale

  return (
    <article
      className={classNames('card', className)}
      // Keep tabIndex for a11y, keyboard navigation use it to display content
      tabIndex={0}
      // Opacity should be fine for screen readers, aria-label is just an addition
      aria-label={`${content.name} - ${getPrice(content.price, locale)}`}
      data-id={id}
    >
      <Picture
        id={id}
        alt={picture.alt ?? content.name}
        className="card-picture"
      />
      <section className="card-content">
        <div className="card-header">
          <Typography variant="h2" className="card-title" uppercase>
            {content.name}
          </Typography>
          <Price price={content.price} className="card-price" />
        </div>
        <Typography variant="p" className="card-description">
          {content.description}
        </Typography>
      </section>
    </article>
  )
}
