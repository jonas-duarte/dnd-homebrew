# DnD Homebrew

## Pages

| Symbol | Meaning                 |
| ------ | ----------------------- |
| π     | Requires authentication |

### `/` - Home

### `/favorite` - Favorite contents

### `/content/view/[contentId]` - View content

### `/content/create` - Create content π

### `/content/update/[contentId]` - Update content π

### `/signin` - Sign in

### `/signout` - Sign out π

### `/settings/[page]` - Account settings π

## API

### `GET /content/[contentId]` - Get content

<br>

_PS: we may have to check a way of returns a contract based on **5etools** integration_

## Collections

| Symbol | Meaning                                 |
| ------ | --------------------------------------- |
| π½     | Server side only (updated with actions) |

### Contents

| Name           | Description                        |
| -------------- | ---------------------------------- |
| `id π½`        | Content ID                         |
| `creator π½`   | User ID                            |
| `type`         | Content type - **`Types (table)`** |
| `name`         | Content name                       |
| `image`        | Content image - **`Base64`**       |
| `data`         | Content data                       |
| `metadata π½`  | Metadata                           |
| `createdAt π½` | Creation date                      |

#### Types details

| Symbol | Meaning        |
| ------ | -------------- |
| π     | Token identifier |

| Type      | Relevant data (show on cards)                                                         |
| --------- | ------------------------------------------------------------------------------------- |
| `Race`    | image, name, `sizeπ`,`ability`, `environment`                                        |
| `Class`   | image, name, `roleπ`, `hpDice`                                                       |
| `Item`    | image, name, `rarityπ`, `itemType`, `cost`                                           |
| `Feat`    | image, name, `roleπ`, `ability`, `prerequisite`                                      |
| `Spell`   | image, name, `levelπ`, `time`, `school`, `range`, `components[V,S,M]` , `flags[R,C]` |
| `NPC`     | image, name, `levelπ`, `class`, `race`                                               |
| `Monster` | image, name, `crπ`, `monsterType`, `cost`                                            |

#### Content Methods

Each `type` generates a class which extends the `Content` class.

| Name                             | Return                | Description                                       |
| -------------------------------- | --------------------- | ------------------------------------------------- |
| **static** `get(content)`         | `Content<T>`          | Get content according the `type`                  |
| **static** `loadContent(id)`     | `P() => Content<T>`   | Load content by `id` and set according the `type` |
| `saveContent()`                  | `P() => undefined`    | Save form according the `type`                    |
| `<Content<T>.Card {...props} />` | `<React.Component />` | Returns the card according the `type`             |
| `<Content<T>.Form {...props} />` | `<React.Component />` | Returns the form according the `type`             |

### Users

_on demand_

### Feedback

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| `id π½`        | Feedback ID                               |
| `type π½`      | Symbol **[ `Favorite`, `Like`, `Fair` ]** |
| `user π½`      | User ID                                   |
| `content π½`   | Content ID                                |
| `createdAt π½` | Creation date                             |
