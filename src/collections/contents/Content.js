import db from "../../utils/db";

class Content {
  constructor(content) {
    this.id = content.id;
    this.creator = content.creator;
    this.type = content.type;
    this.name = content.name;
    this.image = content.image;
    this.data = content.data;
    this.metadata = content.metadata;
    this.createdAt = content.createdAt;
  }

  static get(content) {
    const { type } = content;
    switch (type) {
      case "class":
        return new Class(content);
      case "spell":
        return new Spell(content);
      default:
        console.error("Invalid 'Content.type'.", content);
        return null;
    }
  }

  static async getById(id) {
    return Content.get({ id, type: "class" });
  }

  static async query() {
    const snapshot = await db.collection("contents").get();
    return snapshot.docs
      .map((d) => Content.get({ id: d.id, ...d.data() }))
      .filter((c) => c != null);
  }

  Card() {
    throw new Error("'Content<T>.Card' not implemented.");
  }

  Form() {
    throw new Error("'Content<T>.Form' not implemented.");
  }
}

export default Content;

class Class extends Content {
  constructor(content) {
    super(content);
  }

  Card = ({ content }) => {
    const { id, type } = content;

    return (
      <div>
        Class Card: {id} {type}
      </div>
    );
  };

  Form = ({ content }) => {
    const { id, type } = content;

    return (
      <div>
        Class Form: {id} {type}
      </div>
    );
  };
}

class Spell extends Content {
  constructor(content) {
    super(content);
  }

  Card = ({ content }) => {
    const { id, type } = content;

    return (
      <div>
        Spell Card: {id} {type}
      </div>
    );
  };

  Form = ({ content }) => {
    const { id, type } = content;

    return (
      <div>
        Spell Form: {id} {type}
      </div>
    );
  };
}
