// Vue imports
import { createRouter, createWebHistory } from "vue-router";

// General Screens
import LoginScreen from "./screens/LoginScreen.vue";
import HomeScreen from "./screens/HomeScreen.vue";
import OfficeSetupScreen from "./screens/general/OfficeSetupScreen.vue";
import OfficeSetupTipsScreen from "./screens/general/OfficeSetupTipsScreen.vue";
import HomeOfficeLandingScreen from "./screens/general/HomeOfficeLandingScreen.vue";
import NotFoundScreen from "./screens/NotFoundScreen.vue";

// Admin Screens
import AdminHomeScreen from "./screens/admin/AdminHomeScreen.vue";

// User Screens
import UserOrderScreen from "./screens/user/UserOrderScreen.vue";
import UserOrdersScreen from "./screens/user/UserOrdersScreen.vue";

// Vendor Screens
import CatalogueScreen from "./screens/vendor/CatalogueScreen.vue";
import CreateProductScreen from "./screens/vendor/CreateProductScreen.vue";
import VendorOrdersScreen from "./screens/vendor/VendorOrdersScreen.vue";
import VendorOrderScreen from "./screens/vendor/VendorOrderScreen.vue";

// Shopping Screens
import CheckoutScreen from "./screens/shopping/CheckoutScreen.vue";
import ShopScreen from "./screens/shopping/ShopScreen.vue";
import CartScreen from "./screens/shopping/CartScreen.vue";
import ProductScreen from "./screens/shopping/ProductScreen.vue";

// Offerings Screens
import CoffeeOfferingScreen from "./screens/offerings/CoffeeOfferingScreen.vue";
import OfferingsScreen from "./screens/offerings/OfferingsScreen.vue";
import NandosScreen from "./screens/offerings/NandosScreen.vue";

// Service Screens
import OrderServiceScreen from "./screens/services/OrderServiceScreen.vue";
import ServicesScreen from "./screens/services/ServicesScreen.vue";

// Import constants
import { ROUTES } from "./constants/routeConstants.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: ROUTES.LOGIN.route, component: LoginScreen },
    { path: ROUTES.HOME.route, component: HomeScreen },
    // Home office routes
    {
      path: ROUTES.HOME_OFFICE.route,
      component: HomeOfficeLandingScreen,
      children: [
        {
          path: ROUTES.HOME_OFFICE.subroutes.BLOG.route,
          component: OfficeSetupTipsScreen,
        },
        {
          path: ROUTES.HOME_OFFICE.subroutes.SETUP.route,
          component: OfficeSetupScreen,
        },
      ],
    },
    // Offerings routes
    {
      path: ROUTES.OFFERINGS.route,
      component: OfferingsScreen,
      children: [
        {
          path: ROUTES.OFFERINGS.subroutes.NANDOS.route,
          component: NandosScreen,
        },
        {
          path: ROUTES.OFFERINGS.subroutes.MOTHERLAND.route,
          component: CoffeeOfferingScreen,
        },
        {
          path: ROUTES.OFFERINGS.subroutes.SEATTLE.route,
          component: CoffeeOfferingScreen,
        },
      ],
    },
    // Shop Routes
    { path: ROUTES.SHOP.route, component: ShopScreen },
    { path: ROUTES.CART.route, component: CartScreen },
    { path: ROUTES.PRODUCT.route, component: ProductScreen },
    { path: ROUTES.CHECKOUT.route, component: CheckoutScreen },
    // Service (Vendor) routes
    {
      path: ROUTES.SERVICES.route,
      component: ServicesScreen,
      children: [
        {
          path: ROUTES.SERVICES.subroutes.SERVICE.route,
          component: OrderServiceScreen,
        },
      ],
    },
    // Vendor routes
    { path: ROUTES.CREATE_PRODUCT.route, component: CreateProductScreen },
    { path: ROUTES.CATALOGUE.route, component: CatalogueScreen },
    { path: ROUTES.ORDERS_VENDOR.route, component: VendorOrdersScreen },
    { path: ROUTES.ORDER_VENDOR.route, component: VendorOrderScreen },
    // User routes
    { path: ROUTES.ORDERS_USER.route, component: UserOrdersScreen },
    { path: ROUTES.ORDER_USER.route, component: UserOrderScreen },
    // Admin routes
    { path: ROUTES.ADMIN.route, component: AdminHomeScreen },
    // Not Found route
    { path: ROUTES.NOT_FOUND.route, component: NotFoundScreen },
  ],
});

export default router;
