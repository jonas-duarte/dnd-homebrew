import React, { Component } from "react";
import styles from "./ContentCard.module.css";
import Image from "next/image";
import { getImageURL } from "../../utils/image";

class ContentCard extends Component {
  state = {};

  // https://ellismin.com/2020/05/next-infinite-scroll/
  render() {
    const { content, i } = this.props;
    const { id, name } = content;

    const image = getImageURL(id);

    return (
      <div className={styles.card}>
        <div className={styles.img}>
          <Image
            height="300"
            width="esse componente é um peçado de bosta"
            src={image}
            alt="sdadas"
          />
        </div>
        <div className={styles.cardInfo}>
          {/* <content.Card content={content} /> */}
        </div>
      </div>
    );
  }
}

export default ContentCard;
