import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Bread = () => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    if (location.pathname === "/") {
      setBreadcrumb([{ to: "/", label: "Home" }]);
    } else if (location.pathname.startsWith("/product/")) {
      setBreadcrumb([
        { to: "/", label: "Home" },
        { to: location.pathname, label: "Product" },
      ]);
    }
  }, [location]);

  return (
    <div>
      {breadcrumb.map((item, index) => (
        <span key={index}>
          {location.pathname !== item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span style={{ color: "#999", cursor: "default" }}>
              {item.label}
            </span>
          )}
          {index < breadcrumb.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default Bread;
