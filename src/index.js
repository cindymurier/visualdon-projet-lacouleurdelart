"use strict";

import * as d3 from "d3";

//import du tableau d'objets arts
import { arts } from "./datas";

//import de ColorThief afin de pouvoir extraire la couleur dominante
import ColorThief from "../node_modules/colorthief/dist/color-thief.mjs";

//---------------------------------------------Anectode---------------------------------------------

// CODE POUR PLEINS DE COULEURS QUI GRAVITENT AUTOUR D'UN CERCLE INVISIBLE

//écrire code

//---------------------------------------------Heatmap---------------------------------------------

// const couleurDom = async () => {
// 	try {
// 		arts.bernmuseum.forEach((art) => {
// 			const img = document.createElement("img");
// 			img.src = art.image;
// 			img.alt = art.titre;
// 			img.style.width = "100px";
// 			img.style.height = "100px";
// 			img.style.margin = "10px";
// 			document.querySelector("#heatmap-section").appendChild(img);
// 		});
// 	} catch (e) {
// 		console.error(e.message);
// 	}
// };

// couleurDom();

// const img = document.createElement("img");
// img.src = "assets/images/bernmuseum/fK77.jpg";
// document.querySelector("#home-section").appendChild(img);

const getDomColor = async () => {
	const colorThief = new ColorThief();
	const img = document.createElement("img");
	img.src = "assets/images/bernmuseum/fK77.jpg";

	if (img.complete) {
		const couleurDominante = colorThief.getColor(img);

		console.log(couleurDominante);

		return couleurDominante;
	} else {
		img.addEventListener("load", function () {
			const couleurDominante = colorThief.getColor(img);

			console.log(couleurDominante);

			return couleurDominante;
		});
	}
};

getDomColor();
