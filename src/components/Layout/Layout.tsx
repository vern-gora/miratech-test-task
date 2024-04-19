import React, { ReactNode } from "react";
import css from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};

export default Layout;
