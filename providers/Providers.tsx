'use client'

import { Provider } from "jotai"
import { FC, ReactElement, ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }): ReactElement => {
  return (
    <Provider>
      {children}
    </Provider>
  )
}
