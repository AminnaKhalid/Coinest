import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import dashboard from "./assets/dashboard.png";
import cards from "./assets/cards.png";
import inbox from "./assets/inbox.png";
import insights from "./assets/insights.png";
import investment from "./assets/investment.png";
import invoices from "./assets/invoices.png";
import mainlogo from "./assets/mainlogo.png";
import payments from "./assets/payments.png";
import promos from "./assets/promos.png";
import savingplans from "./assets/savingplans.png";
import transaction from "./assets/transaction.png";
import notification from "./assets/notification.png";
import smalllogo from "./assets/iconsmallmedium.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const navitems = [
    { icon: dashboard, name: "Dashboard", path: "/" },
    {
      icon: payments,
      name: "Payments",
      children: [
        { name: "Transfer", path: "/payments/transfer" },
        { name: "Payment", path: "/payments/payment" },
      ],
    },
    { icon: transaction, name: "Transactions", path: "/transactions" },
    { icon: invoices, name: "Invoices", path: "/invoices" },
    { icon: cards, name: "Cards", path: "/cards" },
    { icon: savingplans, name: "Saving Plans", path: "/savings" },
    { icon: investment, name: "Investments", path: "/investment" },
    { icon: inbox, name: "Inbox", path: "/inbox", showNotification: true },
    { icon: promos, name: "Promos", path: "/promos" },
    {
      icon: insights,
      name: "Insights",
      path: "/insights",
      matchPaths: ["/insight", "/insights", "/insight/details"],
    },
  ];

  const isActive = (item) => {
    if (item.path === location.pathname) return true;
    if (item.matchPaths && item.matchPaths.includes(location.pathname))
      return true;
    if (item.children) {
      return item.children.some(
        (child) =>
          location.pathname.startsWith(child.path) ||
          location.pathname === child.path
      );
    }
    return false;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="w-70 min-h-screen flex-col justify-between items-center hidden lg:flex bg-[#ECF4E9]">
        <div className="flex flex-col justify-center items-center p-4">
          <img
            src={mainlogo}
            alt="Main Logo"
            className="w-36 h-10 object-cover"
          />
          <div className="flex flex-col space-y-2 pt-8 w-full">
            {navitems.map((item, index) => (
              <div key={index} className="w-full">
                {item.children ? (
                  <>
                    <div
                      onClick={() => toggleSubmenu(index)}
                      className={`flex items-center justify-between py-3 px-8 mx-2 cursor-pointer rounded-3xl ${
                        isActive(item) ? "bg-[#BBF49C]" : "hover:bg-[#DFFFD6]"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-6 h-6 object-contain"
                        />
                        <h3 className="text-[16px] text-[#242E2C] font-[600] whitespace-nowrap">
                          {item.name}
                        </h3>
                      </div>
                      {openSubmenu === index ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>
                    {openSubmenu === index && (
                      <div className="ml-12 flex flex-col space-y-1">
                        {item.children.map((child, idx) => (
                          <Link
                            key={idx}
                            to={child.path}
                            className={`py-2 px-4 rounded-2xl text-sm font-medium ${
                              location.pathname.startsWith(child.path) ||
                              location.pathname === child.path
                                ? "bg-[#BBF49C] text-black"
                                : "text-gray-700 hover:bg-[#DFFFD6]"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 py-3 px-8 mx-2 rounded-3xl ${
                      isActive(item) ? "bg-[#BBF49C]" : "hover:bg-[#DFFFD6]"
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                    <h3 className="text-[16px] text-[#242E2C] font-[600] whitespace-nowrap">
                      {item.name}
                    </h3>
                    {item.showNotification && (
                      <img
                        src={notification}
                        alt="notification"
                        className="w-4 h-4 ml-2"
                      />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tablet Version */}
      <div className="w-22 min-h-screen flex-col justify-between items-center hidden md:flex lg:hidden bg-[#ECF4E9]">
        <div className="flex flex-col justify-center items-center p-4 w-full">
          <img src={smalllogo} alt="" className="w-13 h-13 object-cover mb-8" />
          <div className="flex flex-col space-y-4 pt-4 w-full">
            {navitems.map((item, index) => (
              <div key={index} className="w-full text-center">
                {item.children ? (
                  <div
                    onClick={() => toggleSubmenu(index)}
                    className="cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-full ${
                        isActive(item) ? "bg-[#BBF49C]" : ""
                      }`}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        className="w-10 h-10 mx-auto"
                      />
                    </div>
                    {openSubmenu === index &&
                      item.children.map((child, idx) => (
                        <Link
                          to={child.path}
                          key={idx}
                          className={`block text-sm mt-1 px-2 py-1 rounded-xl ${
                            location.pathname.startsWith(child.path) ||
                            location.pathname === child.path
                              ? "bg-[#BBF49C]"
                              : "hover:bg-[#DFFFD6]"
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                  </div>
                ) : (
                  <Link to={item.path}>
                    <div
                      className={`flex justify-center p-2 rounded-full ${
                        isActive(item) ? "bg-[#BBF49C]" : ""
                      }`}
                    >
                      <img src={item.icon} alt="" className="w-10 h-10" />
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-[#BBF49C] shadow-md"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-[#242E2C]" />
          ) : (
            <Menu className="w-6 h-6 text-[#242E2C]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-64 bg-[#ECF4E9] shadow-lg">
            <div className="flex flex-col p-4">
              <div className="flex justify-between items-center mb-6">
                <img src={smalllogo} alt="" className="w-10 h-10" />
                <button onClick={toggleMobileMenu}>
                  <X className="w-6 h-6 text-[#242E2C]" />
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                {navitems.map((item, index) => (
                  <div key={index}>
                    {item.children ? (
                      <>
                        <div
                          onClick={() => toggleSubmenu(index)}
                          className={`flex justify-between items-center px-4 py-2 cursor-pointer rounded-xl ${
                            isActive(item) ? "bg-[#BBF49C]" : ""
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <img src={item.icon} alt="" className="w-6 h-6" />
                            <h3 className="text-[16px] text-[#242E2C] font-[600]">
                              {item.name}
                            </h3>
                          </div>
                          {openSubmenu === index ? (
                            <ChevronUp />
                          ) : (
                            <ChevronDown />
                          )}
                        </div>
                        {openSubmenu === index &&
                          item.children.map((child, idx) => (
                            <Link
                              key={idx}
                              to={child.path}
                              onClick={toggleMobileMenu}
                              className={`block ml-12 mt-1 px-3 py-1 rounded-xl ${
                                location.pathname.startsWith(child.path) ||
                                location.pathname === child.path
                                  ? "bg-[#BBF49C]"
                                  : "hover:bg-[#DFFFD6]"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={toggleMobileMenu}
                        className={`flex items-center space-x-3 py-3 px-4 cursor-pointer rounded-xl ${
                          isActive(item) ? "bg-[#BBF49C]" : "hover:bg-[#DFFFD6]"
                        }`}
                      >
                        <img
                          src={item.icon}
                          alt=""
                          className="w-6 h-6 object-contain"
                        />
                        <h3 className="text-[16px] text-[#242E2C] font-[600]">
                          {item.name}
                        </h3>
                        {item.showNotification && (
                          <img
                            src={notification}
                            alt="notification"
                            className="w-4 h-4 ml-2"
                          />
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
