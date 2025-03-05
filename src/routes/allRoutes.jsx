import Customer from "../pages/admin/Customer";
import Dashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";
import Logout from "../pages/public/Logout";
import Order from "../pages/admin/Order";
import Products from "../pages/admin/Products";
import PublicPage from "../pages/public/PublicPage";
import Setting from "../pages/admin/Setting";
import TodoPage from "../pages/public/TodoPage";
import UserProfile from "../pages/user/UserProfile";
import UserOrders from "../pages/user/UserOrders";
import Checkout from "../pages/user/Checkout";
import Cart from "../pages/user/Cart";
import UserSettings from "../pages/user/UserSettings";
import ProductPage from "../pages/common/ProductPage";
import ProductDetailPage from "../pages/common/ProductDetailPage";
import ProductCategoryPage from "../pages/common/ProductCategoryPage";
import Register from "../pages/public/Register";

const adminRoutes = [
    { path: 'dashboard', component: <Dashboard /> },
    { path: 'products', component: <ProductPage /> },
    { path: 'customers', component: <Customer /> },
    { path: 'orders', component: <Order /> },
    { path: 'settings', component: <Setting /> },
];


const userRoutes = [
    { path: '', component: <UserProfile /> },
    { path: 'profile', component: <UserProfile /> },
    { path: 'user-orders', component: <UserOrders /> },
    { path: 'user-settings', component: <UserSettings /> },
    { path: 'cart', component: <Cart /> },
    { path: 'checkout', component: <Checkout /> },
]

const publicRoutes = [
    { path: '/', component: <Home /> },
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
    { path: '/logout', component: <Logout /> },
    { path: '/products', component: <ProductPage /> },
    { path: '/product/:id', component: <ProductDetailPage /> },
    { path: '/category/:category', component: <ProductCategoryPage /> },
];

export { adminRoutes, publicRoutes, userRoutes };