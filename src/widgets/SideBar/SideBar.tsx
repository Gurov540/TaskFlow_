import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { Tab } from "../../shared/ui/Tab";
import { Icon } from "../../shared/ui/Icon";

export const SideBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Boards");

  const navTabs = [
    { label: "Boards", icon: <Icon name="layout-dashboard" /> },
    { label: "Favorites", icon: <Icon name="star" /> },
    { label: "Activity Log", icon: <Icon name="history" /> },
    { label: "Hui", icon: <Icon name="trash" /> },
    { label: "Time", icon: <Icon name="pen" /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div>
        <nav className={styles.nav}>
          {navTabs.map((tab) => (
            <Tab
              key={tab.label}
              label={tab.label}
              icon={tab.icon}
              active={activeTab === tab.label}
              onClick={() => setActiveTab(tab.label)}
            />
          ))}
        </nav>
      </div>
    </aside>
  );
};
