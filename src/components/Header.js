import NavLinks from "./NavLinks";
import logo from "../images/open4.gif";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header container">
      <NavLink to="/">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          <motion.img
            whilehover={{ scale: 2.05 }}
            whileTap={{ scale: 0.9 }}
            className="logo"
            src={logo}
            alt="Riad Hossain' Logo"
          />
        </motion.div>
      </NavLink>
      <NavLinks />
    </header>
  );
};

export default Header;
