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
import OrderScreen from "./screens/user/OrderScreen";
import UserOrdersScreen from "./screens/user/UserOrdersScreen";

// Vendor Screens
import CatalogueScreen from "./screens/vendor/CatalogueScreen";
import CreateProductScreen from "./screens/vendor/CreateProductScreen";
import VendorOrdersScreen from "./screens/vendor/VendorOrdersScreen";

// Shopping Screens
import CheckoutScreen from "./screens/shopping/CheckoutScreen";
import ShopScreen from "./screens/shopping/ShopScreen";
import CartScreen from "./screens/shopping/CartScreen";
import ProductScreen from "./screens/shopping/ProductScreen";

// Offerings Screens
import CoffeeOfferingScreen from "./screens/offerings/CoffeeOfferingScreen";
import FoodBeverageScreen from "./screens/offerings/FoodBeverageScreen";
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
          path: ROUTES.HOME_OFFICE.subroutes.BLOG,
          component: OfficeSetupTipsScreen,
        },
        {
          path: ROUTES.HOME_OFFICE.subroutes.SETUP,
          component: OfficeSetupScreen,
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
          path: ROUTES.SERVICES.subroutes.SERVICE,
          component: OrderServiceScreen,
        },
      ],
    },
    // Vendor routes
    { path: ROUTES.CREATE_PRODUCT.route, component: CreateProductScreen },
    { path: ROUTES.CATALOGUE.route, component: CatalogueScreen },
  ],
});
