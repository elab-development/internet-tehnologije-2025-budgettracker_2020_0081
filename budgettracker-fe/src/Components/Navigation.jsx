import React, { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiChevronLeft,
  FiHome,
  FiGrid,
  FiBarChart2,
  FiCreditCard,
  FiCalendar,
  FiLogOut,
  FiUser,
  FiLogIn,
  FiUserPlus,
} from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const BASE_URL = "http://127.0.0.1:8000/api";

const Navigation = ({ token, user, isAuthenticated, role, onLogoutLocal }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      // ignore
    } finally {
      onLogoutLocal();
      navigate("/login");
    }
  };

  const menuItems = useMemo(() => {
    if (!isAuthenticated) {
      return [
        {
          to: "/login",
          label: "Login",
          icon: <FiLogIn size={20} />,
        },
        {
          to: "/register",
          label: "Register",
          icon: <FiUserPlus size={20} />,
        },
      ];
    }

    if (role === "admin") {
      return [
        {
          to: "/admin",
          label: "Home",
          icon: <FiHome size={20} />,
        },
        {
          to: "/admin/categories",
          label: "Categories Management",
          icon: <FiGrid size={20} />,
        },
        {
          to: "/admin/metrics",
          label: "Admin Metrics",
          icon: <FiBarChart2 size={20} />,
        },
      ];
    }

    if (role === "user") {
      return [
        {
          to: "/home",
          label: "Home",
          icon: <FiHome size={20} />,
        },
        {
          to: "/accounts-budgets",
          label: "Accounts & Budgets",
          icon: <FiGrid size={20} />,
        },
        {
          to: "/transactions",
          label: "Transactions",
          icon: <FiCreditCard size={20} />,
        },
        {
          to: "/holidays",
          label: "Holidays",
          icon: <FiCalendar size={20} />,
        },
      ];
    }

    return [];
  }, [isAuthenticated, role]);

  const isActive = (to) => {
    if (to === "/admin" || to === "/home") {
      return location.pathname === to;
    }
    return location.pathname.startsWith(to);
  };

  const homeLink = !isAuthenticated ? "/login" : role === "admin" ? "/admin" : "/home";

  return (
    <>
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand-row">
            <Link to={homeLink} className="sidebar-brand">
              <img
                src={
                  collapsed
                    ? "/BudgetTracker - Small Logo.png"
                    : "/BudgetTracker - Big Logo.png"
                }
                alt="Budget Tracker Logo"
                className={`sidebar-logo ${collapsed ? "small" : "large"}`}
              />
            </Link>

            <button
              type="button"
              className="sidebar-toggle"
              onClick={() => setCollapsed((prev) => !prev)}
              data-tooltip-id="sidebar-tooltip"
              data-tooltip-content={collapsed ? "Expand menu" : "Collapse menu"}
            >
              {collapsed ? <FiMenu size={18} /> : <FiChevronLeft size={18} />}
            </button>
          </div>

          <nav className="sidebar-nav">
            {menuItems.map((item) => {
              const active = isActive(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sidebar-link ${active ? "active" : ""}`}
                  data-tooltip-id={collapsed ? "sidebar-tooltip" : undefined}
                  data-tooltip-content={collapsed ? item.label : undefined}
                >
                  <span className="sidebar-link-icon">{item.icon}</span>
                  {!collapsed && <span className="sidebar-link-label">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {isAuthenticated && (
          <div className="sidebar-bottom">
            <div
              className="sidebar-user"
              data-tooltip-id={collapsed ? "sidebar-tooltip" : undefined}
              data-tooltip-content={collapsed ? user?.name : undefined}
            >
              <span className="sidebar-user-icon">
                <FiUser size={18} />
              </span>
              {!collapsed && <span className="sidebar-user-name">{user?.name}</span>}
            </div>

            <button
              type="button"
              className="sidebar-logout"
              onClick={handleLogout}
              data-tooltip-id={collapsed ? "sidebar-tooltip" : undefined}
              data-tooltip-content={collapsed ? "Logout" : undefined}
            >
              <span className="sidebar-link-icon">
                <FiLogOut size={18} />
              </span>
              {!collapsed && <span className="sidebar-link-label">Logout</span>}
            </button>
          </div>
        )}
      </aside>

      <Tooltip
        id="sidebar-tooltip"
        place="right"
        className="custom-tooltip"
        offset={12}
      />
    </>
  );
};

export default Navigation;