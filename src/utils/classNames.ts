export type ClassName =
  | string
  | null
  | undefined
  | Record<string, boolean | undefined>
  | ClassName[]

// Simple classNames helper to concat, etc.. CSS classes
export const classNames = (...classes: ClassName[]): string =>
  classes
    .reduce((cn: string[], current: ClassName) => {
      if (typeof current === 'string') {
        cn.push(current)
      } else if (Array.isArray(current)) {
        cn.push(...classNames(...current).split(' '))
      } else if (typeof current === 'object' && current !== null) {
        Object.entries(current).forEach(([key, value]) => {
          if (value) {
            cn.push(key)
          }
        })
      }
      return cn
    }, [])
    .join(' ')
