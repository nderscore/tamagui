import React, { createContext, useContext, useMemo } from 'react'

import { objectIdentityKey } from './objectIdentityKey'

export type StyledContext<Props extends Object = any> = Omit<
  React.Context<Props | null>,
  'Provider'
> & {
  context: React.Context<Props | null>
  props: Object
  Provider: React.ProviderExoticComponent<
    Partial<Props> & {
      children?: React.ReactNode
    }
  >
}

export function createStyledContext<VariantProps extends Record<string, any>>(
  props: VariantProps
): StyledContext<VariantProps> {
  const OGContext = createContext<VariantProps | null>(null)
  const OGProvider = OGContext.Provider
  const Context = OGContext as any as StyledContext<VariantProps>

  const Provider = ({
    children,
    ...values
  }: VariantProps & { children?: React.ReactNode }) => {
    const value = useMemo(() => values as VariantProps, [objectIdentityKey(values)])
    return <OGProvider value={value}>{children}</OGProvider>
  }

  // @ts-ignore
  Context.Provider = Provider
  Context.props = props
  Context.context = OGContext

  return Context
}
