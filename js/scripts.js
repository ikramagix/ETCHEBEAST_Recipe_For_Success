/*!
 * Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

function navbarShrink() {
  const navbarCollapsible = document.body.querySelector("#mainNav");
  if (!navbarCollapsible) {
    return;
  }
  if (window.scrollY === 0) {
    navbarCollapsible.classList.remove("navbar-shrink");
  } else {
    navbarCollapsible.classList.add("navbar-shrink");
  }
}

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    class Recipe {
        constructor(title, steps) {
            this.title = title;
            this.steps = steps;
        }

        cook() {
            let recipeString = `<h1>${this.title}</h1>`;

            this.steps.forEach(step => {

            });

            recipeString += `<p class="text-center"> Bon appétit les amis !!</p>`;
            return recipeString;
        }
    }

    const redVelvetCake = new Recipe("GÂTEAU RED VELVET AUX FRUITS ROUGES", [
    [2.5, "tasses", "de farine", "sec"],
    [1.5, "tasses", "de sucre", "sec"],
    [1, "cuillère à café", "de bicarbonate de soude", "sec"],
    [1, "cuillère à café", "de sel", "sec"],
    [1.5, "tasses", "d'huile végétale", "liquide"],
    [1, "tasse", "de buttermilk", "liquide"],
    [2, "unités", "d'œufs", "liquide"],
    [2, "cuillères à soupe", "de colorant alimentaire rouge", "liquide"],
    [300, "grammes", "de fruits rouges frais", "sec"],
    [1, "tasse", "de crème fouettée", "liquide"],
    ["Préchauffer le four à 175 C. Graisser et fariner deux moules à gâteau ronds. Dans un grand bol, mélanger la farine, le sucre, le bicarbonate de soude et le sel. Ajouter l'huile, le buttermilk, les œufs, le colorant alimentaire, les fruits rouges et la crème fouettée. Battre jusqu'à l'obtention d'une pâte lisse. Verser la pâte dans les moules préparés."],
    [175, 30]
]);

    const recipeContainer = document.getElementById('recipeContainer');
    if (recipeContainer) {
        recipeContainer.innerHTML = redVelvetCake.cook();
    }
});
