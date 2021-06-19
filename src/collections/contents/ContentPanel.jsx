import React, { Component } from "react";
import ContentCard from "./ContentCard";
import styles from "./ContentPanel.module.css";

const ContentPanel = ({ contents }) => {
  const _contents = [
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    ...contents,
    // ...contents,
  ];

  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        {_contents.map((Content, i) => (
          <ContentCard key={Content.id + i} content={Content} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ContentPanel;
