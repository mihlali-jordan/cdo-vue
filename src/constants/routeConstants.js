export const ROUTES = {
  LOGIN: {
    name: "Login",
    route: "/login",
  },
  HOME: {
    name: "Home",
    route: "/",
  },
  HOME_OFFICE: {
    name: "Home Office",
    route: "/home-office",
    subroutes: {
      SETUP: {
        name: "Setup",
        route: "/setup",
      },
      BLOG: {
        name: "Home Office Tips",
        route: "/blog",
      },
    },
  },
  ADMIN: {
    name: "Admin",
    route: "/admin",
  },
  ORDER: {
    name: "Order",
    route: "/order/:id",
  },
  ORDERS_USER: {
    name: "Orders",
    route: "/orders",
  },
  ORDERS_VENDOR: {
    name: "Vendor Orders",
    route: "/vendor/orders",
  },
  CATALOGUE: {
    name: "Products",
    route: "/vendor/products",
  },
  CREATE_PRODUCT: {
    name: "Add/Create Product",
    route: "/vendor/product/:id",
  },
  CHECKOUT: {
    name: "Checkout",
    route: "/checkout",
  },
  SHOP: {
    name: "Shop",
    route: "/shop",
  },
  CART: {
    name: "Cart",
    route: "/cart",
  },
  PRODUCT: {
    name: "Product",
    route: "/product/:id",
  },
  SERVICES: {
    name: "Services",
    route: "/services",
    subroutes: {
      SERVICE: {
        name: "Service",
        route: "/service/:id",
      },
    },
  },
};
