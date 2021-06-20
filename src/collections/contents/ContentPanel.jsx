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

  const testStyle = {
    backgroundColor: "#C62B29",
    color: "#ffffff",
    fontWeight: "bold",
  };

  return (
    <div className={styles.container}>
      <Filter
        list={["race", "class", "item", "feat", "spell", "npc", "monster"]}
      ></Filter>
      <Filter list={["bla1", "bla1bla12", "bla1asda"]}></Filter>
      <div className={styles.panel}>
        {_contents.map((Content, i) => (
          <ContentCard key={Content.id + i} content={Content} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ContentPanel;

class Filter extends Component {
  state = { list: [] };

  componentDidMount() {
    const { list } = this.props;
    this.setState({
      list: list.map((name) => ({ name, label: name, active: false })),
    });
  }

  toggleActive = (filter) => {
    filter.active = !filter.active;
    this.setState({});
  };

  render() {
    const { list } = this.state;

    return (
      <div className={styles.filter}>
        {list.map((filter) => (
          <FilterButton
            key={filter.name}
            onClick={() => this.toggleActive(filter)}
            {...filter}
          />
        ))}
      </div>
    );
  }
}

const FilterButton = ({ onClick, active, label }) => {
  return (
    <div
      onClick={onClick}
      className={[styles.button, active ? styles.selected : ""].join(" ")}
    >
      {label}
    </div>
  );
};
