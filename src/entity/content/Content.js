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
      default:
        throw new Error("Invalid 'Content.type'.");
    }
  }

  static async loadContent(id) {
    return Content.get({ id, type: "class" });
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
