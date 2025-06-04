// context/BrandContext.tsx
import React, { createContext, useContext, ReactNode, useState } from "react"
import { BrandA, BrandB, BrandConfig } from "../theme/brands"

type BrandType = "brandA" | "brandB"


const BrandContext = createContext<{ brand: BrandConfig }>({ brand: BrandA })

export const BrandProvider = ({ children }: { children: ReactNode }) => {
  const [brandType] = useState(process.env.EXPO_PUBLIC_BRAND)
  console.log(brandType)
  const brand = brandType === "brandA" ? BrandA : BrandB

 return (
     <BrandContext.Provider value={{ brand }}>
      {children}
    </BrandContext.Provider>
 )
}

export const useBrand = () => useContext(BrandContext)
