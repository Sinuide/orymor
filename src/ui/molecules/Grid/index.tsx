import { classNames } from 'src/utils/classNames'

import { Card, type CardProps } from '../Card'
import './grid.css'

export type GridProps = {
  items: CardProps[]
}

// Simplest solution to the test
// I hesitated doing a more complex function isLarge(index, rows, itemsPerRow)
// But IMO it's complicated for nothing in this case
// It would need to loop on lines to check if previous is large, etc..
// The other solution was to divide the grid in multiple grids
// Some small, some large, etc.. Could be easier, but still more complicated than this function
// Or finally, use some masonry, and let the image/card define its size and position, still not the simplest
const isLarge = (index: number): boolean => [4, 5, 14, 15].includes(index)

export const Grid: React.FC<GridProps> = ({ items }) => (
  <section className="grid" aria-label="Liste de produits">
    {items.map((item, index) => (
      <Card
        key={item.content.name}
        className={classNames('grid-item', {
          large: isLarge(index),
        })}
        {...item}
      />
    ))}
  </section>
)
