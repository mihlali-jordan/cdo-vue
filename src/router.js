// Vue imports
import { createRouter, createWebHistory } from "vue-router";

// General Screens
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import OfficeSetupScreen from "./screens/general/OfficeSetupScreen";
import OfficeSetupTipsScreen from "./screens/general/OfficeSetupTipsScreen";
import HomeOfficeLandingScreen from "./screens/general/HomeOfficeLandingScreen";

// Admin Screens
import AdminHomeScreen from "./screens/admin/AdminHomeScreen";

// User Screens
import UserOrderScreen from "./screens/user/UserOrderScreen";
import UserOrdersScreen from "./screens/user/UserOrdersScreen";

// Vendor Screens
import CatalogueScreen from "./screens/vendor/CatalogueScreen";
import CreateProductScreen from "./screens/vendor/CreateProductScreen";
import VendorOrdersScreen from "./screens/vendor/VendorOrdersScreen";
import VendorOrderScreen from "./screens/vendor/VendorOrderScreen";

// Shopping Screens
import CheckoutScreen from "./screens/shopping/CheckoutScreen";
import ShopScreen from "./screens/shopping/ShopScreen";
import CartScreen from "./screens/shopping/CartScreen";
import ProductScreen from "./screens/shopping/ProductScreen";

// Offerings Screens
import CoffeeOfferingScreen from "./screens/offerings/CoffeeOfferingScreen";
import OfferingsScreen from "./screens/offerings/FoodBeverageScreen";
import NandosScreen from "./screens/offerings/NandosScreen";

// Service Screens
import OrderServiceScreen from "./screens/services/OrderServiceScreen";
import ServicesScreen from "./screens/services/ServicesScreen";

// Import constants
import { ROUTES } from "./constants/routeConstants";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: ROUTES.LOGIN.route, component: LoginScreen },
    { path: ROUTES.HOME.route, component: HomeScreen },
    // Home office routes
    {
      path: ROUTES.HOME_OFFICE,
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
  ],
});
