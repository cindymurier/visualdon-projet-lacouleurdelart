import { getDomColor } from "./couleurDominante.js";
import { arts } from "../datas.js";
import { openArtworkPage } from "./ouvrirOeuvre.js";

export const heatmap = async (nb, museum) => {
	// définir le nombre de carrés sur une ligne/colonne
	const x = nb;

	// taille des carrés
	const squareSize = 80;

	const colorInfo = [];

	for (const artwork of arts[museum]) {
		const res = await getDomColor(artwork.image);
		colorInfo.push(res);
	}

	console.log(colorInfo);
	console.log(arts[museum]);

	// créer le tableau de carrés
	let count = 0;
	const table = document.createElement("table");
	for (let i = 0; i < x; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < x; j++) {
			const cell = document.createElement("td");
			const red = colorInfo[count][0];
			const green = colorInfo[count][1];
			const blue = colorInfo[count][2];
			const alpha = 1.0; // Opacité, de 0 à 1.0

			console.log(red, green, blue);

			const rgbColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

			cell.style.width = squareSize + "px";
			cell.style.height = squareSize + "px";

			cell.style.backgroundColor = rgbColor;

			//tooltip

			//element pour tooltip
			const artwork = arts[museum][count];
			console.log(artwork);
			const info = `Artiste: ${arts[museum][count].artiste}
			\nTitre: ${arts[museum][count].titre}
			\nDate: ${arts[museum][count].date}`;

			const displayInfo = (event) => {
				const tooltip = document.createElement("div");
				tooltip.innerText = info;
				tooltip.style.position = "absolute";
				tooltip.style.backgroundColor = "white";
				tooltip.style.border = "1px solid black";
				tooltip.style.padding = "5px";
				tooltip.style.left = event.pageX + "px";
				tooltip.style.top = event.pageY + "px";
				document.body.appendChild(tooltip);
				event.target.tooltip = tooltip;
			};

			const hideInfo = (event) => {
				document.body.removeChild(event.target.tooltip);
			};

			cell.addEventListener("mouseover", displayInfo);
			cell.addEventListener("mouseout", hideInfo);

			//fin tooltip

			// ouvrir la page de l'oeuvre
			cell.addEventListener("click", () => {
				openArtworkPage(artwork);
			});

			// // ajout de l'élément a pour redirection
			// const link = document.createElement("a");
			// link.href = "artwork.html";
			// cell.appendChild(link);

			row.appendChild(cell);
			count++;
		}

		table.appendChild(row);
	}

	// ajouter le tableau à la page
	document.querySelector(".heatmap-container").appendChild(table);
};
