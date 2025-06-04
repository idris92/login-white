// theme/brands.ts
export type BrandConfig = {
  fonts: {
    regular: string
    bold: string
    medium: string
    semiBold?: string
  }
  colors: {
    primary:{
      100: string,
      200: string,
      300: string
      400?: string,
      500?: string,
      600?: string
      700?: string,
      800?: string,
      900?: string
    },
    secondary: string
    background: string
    text: string
    black:{
      50:string,
      100: string,
      200: string,
      300: string,
      "default": string
    },
    white: string,
  }
  images: {
    'sign-banner': any
  };
}

export const BrandA: BrandConfig = {
  fonts: {
    regular: "Jakarta",
    bold: "Jakarta-Bold",
    medium: "Jakarta-Medium",
    semiBold: "Jakarta-SemiBold",
  },
  colors: {
    primary:{
      100: '#0061FF0A',
      200: '#0061FF1A',
      300: '#0061FF'
    },
    secondary: "#666666",
    background: "#F5F8FF",
    text: "#242B4D",
    black:{
      50: "#F5F5F5",
      100: "#8C8E98",
      200: "#666876",
      300: "#191D31",
      "default": "#000000"
    },
    white: "#fff",
  },
  images: {
    'sign-banner': require("../assets/images/brandA/onboarding.png"),
  },
}

export const BrandB: BrandConfig = {
  fonts: {
    regular: "Rubik-Regular",
    bold: "Rubik-Bold",
    medium: "Rubik-Medium",
    semiBold: "Rubik-SemiBold",
  },
  colors: {
     primary: {
      100: "#F5F8FF",
      200: "#EBF4FF",
      300: "#C3D9FF",
      400: "#9BBFFF",
      500: "#0286FF",
      600: "#6A85E6",
      700: "#475A99",
      800: "#364573",
      900: "#242B4D",
    },
    secondary: "#8C8E98",
    background: "#FBFBFD",
    text: "#000000",
    white: "#fff",
    black:{
      50: "#F5F5F5",
      100: "#8C8E98",
      200: "#666876",
      300: "#191D31",
      "default": "#000000"
    },
  },
  images: {
    'sign-banner': require("../assets/images/brandB/new-york.png"),
  }
}
