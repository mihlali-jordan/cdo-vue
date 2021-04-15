export const ROUTES = {
  LOGIN: {
    name: "Login",
    route: "/login",
  },
  NOT_FOUND: {
    name: "Not Found",
    route: "/:notFound(.*)",
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
        route: "setup",
      },
      BLOG: {
        name: "Home Office Tips",
        route: "blog",
      },
    },
  },
  ADMIN: {
    name: "Admin",
    route: "/admin",
  },
  ORDER_USER: {
    name: "Order",
    route: "/order/:id",
  },
  ORDER_VENDOR: {
    name: "Order",
    route: "/vendor/order/:id",
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
        route: "service/:id",
      },
    },
  },
  OFFERINGS: {
    name: "Offerings",
    route: "/offerings",
    subroutes: {
      NANDOS: {
        name: "Nandos",
        route: "nandos",
      },
      SEATTLE: {
        name: "Seattle",
        route: "seattle-coffee",
      },
      MOTHERLAND: {
        name: "Motherland",
        route: "motherland-coffee",
      },
    },
  },
};
