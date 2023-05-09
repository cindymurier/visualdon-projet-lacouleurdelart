export const openArtworkPage = (artwork) => {
	const newPage = window.open();
	newPage.document.write(`
        <h1>${artwork.titre}</h1>
        <img src="${artwork.image}" />
        <p><strong>Artiste:</strong> ${artwork.artiste}</p>
        <p><strong>Date:</strong> ${artwork.date}</p>
    `);
};
