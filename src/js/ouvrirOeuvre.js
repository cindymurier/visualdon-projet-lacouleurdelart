export const openArtworkPage = (artwork) => {
	const newPage = window.open();

	newPage.document.write(`
    <html>
    <head>
    <meta charset="utf-8">
    <title>Oeuvre ${artwork.titre}</title>
      <style>
        body {
          background-color: #fffaf0;
        }

        h1 {
            font-family: 'Lora', serif;
        }

        p {
            font-family: 'Work Sans', sans-serif;
        }

        .div-block-14 {
            width: 5px;
            height: 300px;
            background-color: #fffaf0;
          }
          
          .artwork {
            width: 100%;
            height: 100%;
            background-color: #fffaf0;
            justify-content: center;
            align-items: center;
            display: flex;
          }
          
          .artwork-container {
            justify-content: center;
            align-items: center;
            margin-top: 60px;
            display: flex;
          }
          
          .div-block-15 {
            flex-direction: column;
            display: flex;
          }
          
          .artwork-title {
            font-family: Lora, sans-serif;
            font-weight: 400;
          }
          
          .div-block-16 {
            margin-right: 35px;
          }
          
          .image-2 {
            width: 500px;
          }
          
          .paragraph-13 {
            font-family: Work Sans, sans-serif;
          }
      </style>
      <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora&family=Work+Sans:wght@300;400&display=swap" rel="stylesheet">
    </head>
    <body>
    <div class="artwork">
      <div class="artwork-container">
        <div class="div-block-16"><img src="${artwork.image}" loading="lazy" alt="" class="image-2"></div>
        <div class="div-block-15">
          <h1 class="artwork-title">${artwork.titre}</h1>
          <p class="paragraph-13">Artiste: ${artwork.artiste}<br>Date: ${artwork.date}<br>Dimensions: ${artwork.dimensions.hauteur}x${artwork.dimensions.longueur}x${artwork.dimensions.profondeur}<br>Objet: ${artwork.objet}<br>Année d'acquisition: ${artwork.anneeacquisition}<br>Emplacement: ${artwork.emplacement}<br>Lien: ${artwork.lien}</p>
          </div>
      </div>
      </div>
    </body>
  </html>
    `);
};
