"use client";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ChevronDown, ShoppingCart, Menu, X } from "lucide-react";
import {
  setActiveTab,
  toggleMobileMenu,
} from "../store/slices/navigationSlice";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.navigation);
  const { language } = useSelector((state) => state.ui);

  const navigationItems = [
    { name: "Products", path: "/products" },
    { name: "Apps and Services", path: "/apps-and-services" },
    { name: "Learn", path: "/learn" },
    { name: "For Business", path: "/for-business" },
    { name: "For Developers", path: "/for-developers" },
    { name: "Support", path: "/support" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Bitcoin Boost Banner */}
      <div className="bg-gray-700 text-white px-3">
        <div className="pl-40 flex justify-between items-center text-center text-lg">
          <span>
            Last chance to get up to $90 of BTC to boost your crypto journey.
          </span>
          <div className="flex items-center space-x-20">
          <div className="mx-6 h-14 w-px bg-white"></div>
          <div>
            <Link to="#" className="flex items-center hover:underline">
              Bitcoin boost <span className="ml-2">→</span>
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-black border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="w-20 h-12 border border-black flex items-center justify-center">
                <span className="font-bold text-white text-sm">LEDGER</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 text-white">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative text-white ${
                    isActive(item.path)
                      ? "text-ledger-orange border-b-2 border-ledger-orange"
                      : "text-gray-700 hover:text-ledger-orange"
                  }`}
                  onClick={() => dispatch(setActiveTab(item.name))}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button className="flex items-center space-x-1 text-sm font-medium text-white hover:text-ledger-orange">
                  <span>{language}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Shopping Cart */}
              <button className="p-2 text-white hover:text-ledger-orange">
                <ShoppingCart className="w-5 h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-ledger-orange"
                onClick={() => dispatch(toggleMobileMenu())}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-ledger-orange bg-orange-50"
                      : "text-gray-700 hover:text-ledger-orange hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    dispatch(setActiveTab(item.name));
                    dispatch(toggleMobileMenu());
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
