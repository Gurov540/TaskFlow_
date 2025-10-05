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
  ];

  const recentBoards = [
    {
      id: 1,
      name: "Work Tasks",
      icon: <Icon name="briefcase" />,
      tasks: 3,
      updated: "Updated today",
    },
    {
      id: 2,
      name: "Fitness Goals",
      icon: <Icon name="activity" />,
      tasks: 5,
      updated: "Updated yesterday",
    },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Верхняя часть */}
      <div>
        {/* Текущая доска */}
        <div className={styles.currentBoard}>
          <Icon name="folder" />
          <span>Melon Board</span>
        </div>

        {/* Навигация */}
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

      {/* Недавние доски */}
      <div className={styles.recent}>
        <h4 className={styles.recentTitle}>Recent Boards</h4>
        <div className={styles.recentList}>
          {recentBoards.map((board) => (
            <div key={board.id} className={styles.recentItem}>
              <div className={styles.recentInfo}>
                <span className={styles.icon}>{board.icon}</span>
                <div>
                  <p className={styles.boardName}>{board.name}</p>
                  <p className={styles.boardMeta}>
                    {board.tasks} tasks • {board.updated}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
