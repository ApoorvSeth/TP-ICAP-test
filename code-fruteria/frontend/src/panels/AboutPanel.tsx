import React from 'react';
import { useTheme } from '../../styles/useTheme';

/**
 * AboutPanel displays information about the application.
 */
const AboutPanel: React.FC = () => {
  const { styles } = useTheme();

  return (
    <div
      style={{
        padding: 24,
        color: styles.textColor,
        fontFamily: 'monospace',
        background: styles.panelBg,
        borderRadius: 8,
        border: `1px solid ${styles.borderColor}`,
      }}
    >
      <h2
        style={{
          color: styles.headerText,
          fontWeight: 700,
          fontSize: 22,
          margin: 0,
        }}
      >
        About
      </h2>
      <div style={{ marginTop: 12 }}>
        <p>
          Welcome to <b>fruteria</b>!<br />
          This is a playful trading app for fruit, built with React.<br />
          Drag panels from the sidebar to explore features.<br />
          <br />
          <i>Made with 🍌 and ❤️</i>
        </p>
      </div>
    </div>
  );
};

export default AboutPanel;
