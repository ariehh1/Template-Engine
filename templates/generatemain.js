"use strict";

function userInput(name, position) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="../assets/style.css">
      <title>Ari's Template Engine</title>
  </head>
  
  <body>
      <nav class="navbar fixed-top navbar-dark bg-dark">
          <p class="navbar-brand">My Team</p>
      </nav>
  
      <div class="card border-dark mb-3" style="max-width: 18rem;">
          <div class="card-header">Manager Cards</div>
          <div class="card-body text-dark">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-title">${position}</h6>
              <p class="card-text">ID:</p>
              <p class="card-text">Email:</p>
              <p class="card-text">Office Number:</p>
          </div>
      </div>
  
      <div class="card border-primary mb-3" style="max-width: 18rem;">
          <div class="card-header">Engineer Cards</div>
          <div class="card-body text-primary">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-title">${position}</h6>
              <p class="card-text">ID:</p>
              <p class="card-text">Email:</p>
              <p class="card-text">GitHub:</p>
          </div>
      </div>
  
      <div class="card border-success mb-3" style="max-width: 18rem;">
          <div class="card-header">Intern Cards</div>
          <div class="card-body text-success">
              <h5 class="card-title">${name}</h5>
              <h6 class="card-title">${position}</h6>
              <p class="card-text">ID:</p>
              <p class="card-text">Email:</p>
              <p class="card-text">School:</p>
          </div>
      </div>
  
  </body>
  
  </html>
    `;
}

module.exports = userInput;
