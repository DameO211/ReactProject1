import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://picsvg.com/svg/gcejGn01.svg?v=691" alt=" " />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={ApartmentIcon} title="Renting" />
        <HeaderOption Icon={AttachMoneyIcon} title="Home Buying" />
        <HeaderOption Icon={RestaurantIcon} title="Restaurant" />
        <HeaderOption Icon={StorefrontIcon} title="Store" />
      </div>
    </div>
  );
}
export default Header;
