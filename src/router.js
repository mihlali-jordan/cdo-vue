// Vue imports
import { createRouter, createWebHistory } from "vue-router";

// Import constants
import { ROUTES } from "./constants/routeConstants.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: ROUTES.LOGIN.route,
      component: () => import("./screens/LoginScreen.vue"),
    },
    {
      path: ROUTES.HOME.route,
      component: () => import("./screens/HomeScreen.vue"),
    },
    // Home office routes
    {
      path: ROUTES.HOME_OFFICE.route,
      component: () => import("./screens/general/HomeOfficeLandingScreen.vue"),
      children: [
        {
          path: ROUTES.HOME_OFFICE.subroutes.BLOG.route,
          component: () =>
            import("./screens/general/OfficeSetupTipsScreen.vue"),
        },
        {
          path: ROUTES.HOME_OFFICE.subroutes.SETUP.route,
          component: () => import("./screens/general/OfficeSetupScreen.vue"),
        },
      ],
    },
    // Offerings routes
    {
      path: ROUTES.OFFERINGS.route,
      component: () => import("./screens/offerings/OfferingsScreen.vue"),
      children: [
        {
          path: ROUTES.OFFERINGS.subroutes.NANDOS.route,
          component: () => import("./screens/offerings/NandosScreen.vue"),
        },
        {
          path: ROUTES.OFFERINGS.subroutes.MOTHERLAND.route,
          component: () =>
            import("./screens/offerings/CoffeeOfferingScreen.vue"),
        },
        {
          path: ROUTES.OFFERINGS.subroutes.SEATTLE.route,
          component: import("./screens/offerings/CoffeeOfferingScreen.vue"),
        },
      ],
    },
    // Shop Routes
    {
      path: ROUTES.SHOP.route,
      component: () => import("./screens/shopping/ShopScreen.vue"),
    },
    {
      path: ROUTES.CART.route,
      component: () => import("./screens/shopping/CartScreen.vue"),
    },
    {
      path: ROUTES.PRODUCT.route,
      component: () => import("./screens/shopping/ProductScreen.vue"),
    },
    {
      path: ROUTES.CHECKOUT.route,
      component: () => import("./screens/shopping/CheckoutScreen.vue"),
    },
    // Service (Vendor) routes
    {
      path: ROUTES.SERVICES.route,
      component: () => import("./screens/services/ServicesScreen.vue"),
      children: [
        {
          path: ROUTES.SERVICES.subroutes.SERVICE.route,
          component: () => import("./screens/services/OrderServiceScreen.vue"),
        },
      ],
    },
    // Vendor routes
    {
      path: ROUTES.CREATE_PRODUCT.route,
      component: () => import("./screens/vendor/CreateProductScreen.vue"),
    },
    {
      path: ROUTES.CATALOGUE.route,
      component: () => import("./screens/vendor/CatalogueScreen.vue"),
    },
    {
      path: ROUTES.ORDERS_VENDOR.route,
      component: () => import("./screens/vendor/VendorOrdersScreen.vue"),
    },
    {
      path: ROUTES.ORDER_VENDOR.route,
      component: () => import("./screens/vendor/VendorOrderScreen.vue"),
    },
    // User routes
    {
      path: ROUTES.ORDERS_USER.route,
      component: () => import("./screens/user/UserOrdersScreen.vue"),
    },
    {
      path: ROUTES.ORDER_USER.route,
      component: () => import("./screens/user/UserOrderScreen.vue"),
    },
    // Admin routes
    {
      path: ROUTES.ADMIN.route,
      component: () => import("./screens/admin/AdminHomeScreen.vue"),
    },
    // Not Found route
    {
      path: ROUTES.NOT_FOUND.route,
      component: () => import("./screens/NotFoundScreen.vue"),
    },
  ],
});

export default router;
