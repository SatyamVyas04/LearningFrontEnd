# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout depending on their device's screen size
-   See hover and focus states for interactive elements

### Screenshot

![](./ProductReview.png)

### Links

[GithubPages](https://satyamvyas04.github.io/LearningFrontEnd/FrontEndMentor/ProductCard/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox

### What I learned

```html
<picture>
	<source
		srcset="images/image-product-mobile.jpg"
		media="(max-width: 650px)"
		alt="mobileImg"
	/>
	<img src="images/image-product-desktop.jpg" alt="desktopImg" />
</picture>
```

```css
:root {
	--darker: hsl(212, 21%, 14%);
	--lighter: hsl(228, 12%, 48%);
	--button: hsl(158, 36%, 37%);
}
```

## Author

[SatyamVyas04](https://github.com/satyamvyas04)
