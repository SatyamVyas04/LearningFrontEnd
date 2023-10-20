# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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
-   See hover states for interactive elements

### Screenshot

![](./screenshot.jpg)

### Links

-   [GithubPages](https://your-solution-url.com)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox

### What I learned

Loved to Learn this Overlay Technique

```html
<div class="image">
	<img src="images/image-equilibrium.jpg" alt="eth" class="mainimg" />
	<div class="hover"></div>
	<img class="hoverimg" src="images/icon-view.svg" alt="viewlogo" />
</div>
```

```css
.card .image {
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.card .image .hover {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	transform: translate(-50%, -50%);
	border: 1px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: hsl(178, 100%, 50%);
	border-radius: 0.25rem;
	transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	opacity: 0;
}

.card .image .hover:hover {
	opacity: 0.5;
}

.card .image .hoverimg {
	position: absolute;
	transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
	opacity: 0;
}

.card .image .hover:hover + .hoverimg {
	opacity: 1;
}
```

## Author

-   SatyamVyas04
