# vue-awesome-skeleton

vue-awesome-skeleton for rendering fake content before get real data

## Demo

[Live Demo](https://www.xieluping.cn/vue-awesome-skeleton/)

## Installation

```bash
npm install vue-awesome-skeleton --save
```

## Usage

Include plugin in your main.js file.

```js
import Vue from "vue";
import SkeletonComponent from "vue-awesome-skeleton";

Vue.use(SkeletonComponent);
```

### Example

```js
<skeleton>
    <skeleton-heading :img="true" :rounded="true" />
    <skeleton-text :lines="3" />
</skeleton>
```

### Options
Available properties:

* root `<skeleton>`

Boolean animated (default: true)
Boolean rounded (default: false) - border radius
Boolean centered (default: false)

* <skeleton-heading />

Boolean img (default: false)

* <skeleton-text />

Number lines (default: 4)

* <skeleton-img />








