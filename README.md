# DnD Homebrew

## Pages

| Symbol | Meaning                 |
| ------ | ----------------------- |
| 🔐     | Requires authentication |

### `/` - Home

### `/favorite` - Favorite contents

### `/content/view/[contentId]` - View content

### `/content/create` - Create content 🔐

### `/content/update/[contentId]` - Update content 🔐

### `/signin` - Sign in

### `/signout` - Sign out 🔐

### `/settings/[page]` - Account settings 🔐

## API

### `GET /content/[contentId]` - Get content

<br>

_PS: we may have to check a way of returns a contract based on **5etools** integration_

## Collections

| Symbol | Meaning                                 |
| ------ | --------------------------------------- |
| 💽     | Server side only (updated with actions) |

### Contents

| Name           | Description                        |
| -------------- | ---------------------------------- |
| `id 💽`        | Content ID                         |
| `creator 💽`   | User ID                            |
| `type`         | Content type - **`Types (table)`** |
| `name`         | Content name                       |
| `image`        | Content image - **`Base64`**       |
| `data`         | Content data                       |
| `metadata 💽`  | Metadata                           |
| `createdAt 💽` | Creation date                      |

#### Types details

| Symbol | Meaning        |
| ------ | -------------- |
| 🏅     | Tag identifier |

| Type      | Relevant data (show on cards)                                                         |
| --------- | ------------------------------------------------------------------------------------- |
| `Race`    | image, name, `size🏅`,`ability`, `environment`                                        |
| `Class`   | image, name, `role🏅`, `hpDice`                                                       |
| `Item`    | image, name, `rarity🏅`, `itemType`, `cost`                                           |
| `Feat`    | image, name, `role🏅`, `ability`, `prerequisite`                                      |
| `Spell`   | image, name, `level🏅`, `time`, `school`, `range`, `components[V,S,M]` , `flags[R,C]` |
| `NPC`     | image, name, `level🏅`, `class`, `race`                                               |
| `Monster` | image, name, `cr🏅`, `monsterType`, `cost`                                            |

#### Content Methods

Each `type` generates a class which extends the `Content` class.

| Name                             | Return                | Description                                       |
| -------------------------------- | --------------------- | ------------------------------------------------- |
| **static**`get(content)`         | `Content<T>`          | Get content according the `type`                  |
| **static** `loadContent(id)`     | `P() => Content<T>`   | Load content by `id` and set according the `type` |
| `saveContent()`                  | `P() => undefined`    | Save form according the `type`                    |
| `<Content<T>.Card {...props} />` | `<React.Component />` | Returns the card according the `type`             |
| `<Content<T>.Form {...props} />` | `<React.Component />` | Returns the form according the `type`             |

### Users

_on demand_

### Feedback

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| `id 💽`        | Feedback ID                               |
| `type 💽`      | Symbol **[ `Favorite`, `Like`, `Fair` ]** |
| `user 💽`      | User ID                                   |
| `content 💽`   | Content ID                                |
| `createdAt 💽` | Creation date                             |
