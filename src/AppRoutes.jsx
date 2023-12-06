import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./site/SiteLayout";
import HomePage from "./site/HomePage";
import AdminLayout from "./admin/AdminLayout";
import BookDashboard from "./admin/Dashboard/BookDashboard";
import Login from "./site/Login";
import PageNotFound from "./site/404Page/404Page";
import RegisterUser from "./site/Register";
import Protected from "./Protected";
import WelcomeDashBoard from "./admin/Dashboard/WelcomeDashBoard";
import RegisterBook from "./admin/components/RegisterBook";
import UserDashboard from "./admin/Dashboard/UserDashboard";
import Register from "./site/Register";
import UpdateBook from "./admin/components/UpdateBook";
import UpdateUser from "./admin/components/updateUser";
import BookPage from "./site/components/BookPage";
import Cart from "./site/cart/Cart";
import OrderDashboard from "./admin/Dashboard/OrderDashboard";
import { ShippingPage } from "./site/cart/ShippingPage";
import PlaceOrder from "./site/cart/PlaceOrder";
import ProfilePage from "./site/profile/ProfilePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="book/:id" element={<BookPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterUser />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="placeorder" element={<PlaceOrder />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <Protected>
              <AdminLayout />
            </Protected>
          }
        >
          <Route index element={<WelcomeDashBoard />} />
          <Route path="book" element={<BookDashboard />}></Route>
          <Route path="addbook" element={<RegisterBook />}></Route>
          <Route path="updatebook/:id" element={<UpdateBook />}></Route>
          <Route path="user" element={<UserDashboard />}></Route>
          <Route path="updateuser/:id" element={<UpdateUser />}></Route>
          <Route path="adduser" element={<Register />}></Route>
          <Route path="orders" element={<OrderDashboard />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
