import React, { Component } from "react";
import styles from "./ContentCard.module.css";
import Image from "next/image";

const images = [
  "https://images.freeimages.com/images/large-previews/a3c/maia-2-1436576.jpg",
  "https://images.freeimages.com/images/large-previews/1cb/close-squirrel-1381764.jpg",
  "https://images.freeimages.com/images/large-previews/8ee/multicolor-drop-2-1056473.jpg",
  "https://images.freeimages.com/images/large-previews/a2b/illuminated-dragon-1523121.jpg",
  "https://images.freeimages.com/images/large-previews/59d/dragon-fly-1380221.jpg",
  "https://images.freeimages.com/images/large-previews/827/knights-on-horses-1240980.jpg",
  "https://images.freeimages.com/images/large-previews/b25/knights-1316761.jpg",
];

class ContentCard extends Component {
  state = {};

  // https://ellismin.com/2020/05/next-infinite-scroll/
  render() {
    const { content, i } = this.props;
    const { image, name } = content;
    return (
      <div className={styles.card}>
        <div className={styles.img}>
          <Image
            height="300"
            width="esse componente é um peçado de bosta"
            src={images[(images.length * Math.random()) | 0]}
            alt="sdadas"
          />
        </div>
        <div className={styles.cardInfo}>
          <content.Card content={content} />
        </div>
      </div>
    );
  }
}

export default ContentCard;
