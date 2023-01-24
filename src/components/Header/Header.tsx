import React from "react";

import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <h2>
          SAT-solver graphical interface<span>🤖</span>
        </h2>
      </div>
    </header>
  );
};
