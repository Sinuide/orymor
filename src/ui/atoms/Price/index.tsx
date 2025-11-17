import type { Locale } from 'src/config'
import { classNames } from 'src/utils/classNames'
import { getPrice } from 'src/utils/price'

import './price.css'

export type PriceProps = {
  price: number
  className?: string
  locale?: Locale
}

export const Price: React.FC<PriceProps> = ({
  price,
  className,
  locale = 'fr-FR',
}) => {
  return (
    <span className={classNames('price', className)}>
      {getPrice(price, locale)}
    </span>
  )
}
