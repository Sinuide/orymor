import { useLocaleStore } from 'src/stores/locale'
import { classNames } from 'src/utils/classNames'
import { getPrice } from 'src/utils/price'

import './price.css'

export type PriceProps = {
  price: number
  className?: string
}

export const Price: React.FC<PriceProps> = ({ price, className }) => {
  const locale = useLocaleStore().locale

  return (
    <span className={classNames('price', className)}>
      {getPrice(price, locale)}
    </span>
  )
}
