import type { PropsWithChildren } from 'react'

import { classNames } from 'src/utils/classNames'

import './typography.css'

export type TypographyProps = PropsWithChildren & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  uppercase?: boolean
  className?: string
  bold?: boolean
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  uppercase,
  className,
  bold,
}) => {
  const TagName = variant || 'p'

  return (
    <TagName
      className={classNames('typography', className, {
        uppercase,
        bold,
      })}
    >
      {children}
    </TagName>
  )
}
