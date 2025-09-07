import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Container from "./Container";

const SectionHeader = ({ title, subtitle, bgImage, showBreadcrumb = false }) => {
  const location = useLocation();

  const getBreadcrumbs = () => {
    const path = location.pathname;
    const breadcrumbs = [{ name: "Home", path: "/" }];

    if (path.startsWith("/product/")) {
      breadcrumbs.push({ name: "Shop", path: "/shop" });
      breadcrumbs.push({ name: title, path: path });
    } else if (path === "/shop") {
      breadcrumbs.push({ name: "Shop", path: "/shop" });
    } else if (path === "/brewing") {
      breadcrumbs.push({ name: "Brewing Guide", path: "/brewing" });
    } else if (path === "/contact") {
      breadcrumbs.push({ name: "Contact", path: "/contact" });
    } else if (path === "/sell") {
      breadcrumbs.push({ name: "Sell With Us", path: "/sell" });
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="relative min-h-[260px] sm:min-h-[300px] lg:min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          loading="lazy"
          width="1920"
          height="600"
          className="w-full h-full object-cover"
          style={{
            background: "linear-gradient(135deg, #f59e0b, #ea580c)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        {/* Subtle Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white drop-shadow-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-28 mb-14 md:mt-0 md:mb-0"
        >
          {/* Breadcrumb */}
          {showBreadcrumb && (
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/80 mb-6">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  {index > 0 && <Icon icon="mdi:chevron-right" className="h-4 w-4" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{crumb.name}</span>
                  ) : (
                    <Link to={crumb.path} className="hover:text-white transition-colors">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="text-stone-100/90 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl sm:text-2xl text-stone-50/90 max-w-3xl mx-auto text-balance">{subtitle}</p>
          )}
        </motion.div>
      </Container>
    </div>
  );
};

export default SectionHeader;
