//import de ColorThief afin de pouvoir extraire la couleur dominante
import ColorThief from "../../node_modules/colorthief/dist/color-thief.mjs";

export const getDomColor = (src) => {
	const colorThief = new ColorThief();

	return new Promise(async (resolve, reject) => {
		const img = await loadImage(src);
		if (img.complete) {
			resolve(colorThief.getColor(img));
		}
	});
};

const loadImage = (path) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = path;
		img.onload = () => {
			resolve(img);
		};
		img.onerror = (e) => {
			console.error(path);
			reject(e);
		};
	});
};
