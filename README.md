<div align="center">
  <h1>
    <b>typography-theme-uxworks</b>
  </h1
  <p>

   ![npm](https://img.shields.io/npm/v/typography-theme-uxworks?color=green)

  </p>
</div>



## **🤔 Why?**

I have created this theme by inspired by typography themes created by Kal. I have created
my blog uxworks.org and thought to create a theme for the blog.

## **:cyclone: Features:**

* **Easy To Use:**  It is very easy to use.

* **Minified** The source file is minified and barely dependent on any external library.

## **:cloud: Installation:**

Steps to install:

__npm__

```
npm install typography-theme-uxworks
```

__yarn__

```
yarn add typography-theme-uxworks
```

## **:snowflake: Usage:**

In your `typography.js`,


```
import Typography from "typography"
import uxworksTheme from 'typography-theme-uxworks'
const typography = new Typography(uxworksTheme)
export default typography
```

---

## **:snowflake: Usages: in gatsby website**

### **Step 1**

Install typography, react-typography, gatsby-plugin-typography and typography-theme-uxworks

__npm__

```
npm install --save typography react-typography gatsby-plugin-typography typography-theme-uxworks
```

__yarn__

```
yarn add typography react-typography gatsby-plugin-typography typography-theme-uxworks
```

### **Step 2**

Create `typography.js` file in the location of `src/utils`

### **Step 3**

Copy these code into `typography.js`

```
import Typography from "typography"
import uxworksTheme from 'typography-theme-uxworks'
const typography = new Typography(uxworksTheme)
export default typography
```

### **Step 4**

config newly created `typography.js` into `gatsby-config.js`

```
{
  resolve: `gatsby-plugin-typography`,
  options: {
    pathToConfigModule: `src/utils/typography`,
  }
},
```

Notes*: Make sure you don't have any overriding css in your App/Website
