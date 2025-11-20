import { ReactNode } from "react";

export interface RootProps {
  children: ReactNode
}

export interface ContainerProps {
  children: ReactNode
  className?: string
}
