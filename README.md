# Dialect

Dialect is a website project created to practice and demonstrate my skills as a front-end developer. I followed a Figma [design](https://www.uihut.com/web-designs/language-learning-landing-page-ui-kit/22200) from [UIHUT](https://www.uihut.com) to build this website.

The live site is deployed on [Netlify](https://dialect-leomat.netlify.app/).


## Features
* Fully responsive
* Interactive buttons (not linked to any pages as this is a landing page)
* Interactive dropdown menu showing a menu to choose a language, with menu links (not linked to any pages as this is a landing page; for display purposes only), saving the chosen language and displaying it on both dropdowns
* Carousel displaying 3 elements on a normal display and only 1 on mobile, with pagination
* Navbar for mobile and desktop (not linked to any pages as this is a landing page; for display purposes only)

## Technologies
* React.js
  * `useContext` to globally manage the open and closed states for the dropdown and the selected language value
  * `useState` to handle various dynamically changing variables
* Tailwind CSS
* Figma
* Vite
