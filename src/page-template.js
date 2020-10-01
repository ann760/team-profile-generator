const generateManager = (manager) => {
  return ` 
  ${manager.map(({name, id, role, email, officeNumber}) => {
    return `
    <div class="card-header bg-dark text-light"> 
      <h4> ${role}</h4>
      <h4> ${name}</h4>
      <ul id="managerInfo" class="list-group list-group-flush">
        <li class="id"><p>ID Number</p>${id}</li>
        <li class="list-group-item"><a href="mailto:${email}">Email Address</a>
        <li class="m-1"><p>Office Number</p>${officeNumber}</li>
      </ul>
    </div>
  `;
  })
  .join('')}
  `;
}

const generateInterns = internArr => {
  if (!internArr) {
    return '';
  }

    return `
        <div class="card-header bg-dark text-light">
        ${internArr.map(({name, id, role, email, school}) => {
        return `
          <h4> ${role} </h4>
          <h4> ${name} </h4>
          <ul id="managerInfo" class="list-group list-group-flush">
            <li class="id"><p>ID Number</p>${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">Email Address</a>
            <li class="m-1"><p>School Name</p>${school}</li>
          </ul>
        </div>
      `;
      })
        .join('')}
        `;
    }

const generateEngineer = (engineerArr) => {
  if (!engineerArr) {
    return "";
  }
  return `
        <div class="card-header bg-dark text-light">
        ${engineerArr.map(({name, id, role, email, github}) => {
        return `
          <h4> ${role} </h4>
          <h4> ${name} </h4>
          <ul id="managerInfo" class="list-group list-group-flush">
            <li class="id"><p>ID Number</p>${id}</li>
            <li class="list-group-item"><a href="mailto:${email}">Email Address</a>
            <li class="m-1"><p>Git Hub</p>${github}</li>
          </ul>
        </div>
      `;
      })
        .join('')}
        `;
    }

module.exports = (templateData) => {
  // destructure page data by section
  const { manager, engineers, interns } = templateData;
  console.log(templateData);

  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
     <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">
        <div class="m-5 row justify-content-around">
          <!-- Manager -->
          <div class="col-12 col-md-6 col-xl-3 mb-3" id="cards">
            ${generateManager(manager)}
          </div>
        </div>
        <!-- employee-->
        <div class="col-12 col-md-6 col-xl-3 mb-3" id="cards">
        ${generateEngineer(engineers)}
        </div>
        <div class="col-12 col-md-6 col-xl-3 mb-3" id="cards">
          ${generateInterns(interns)}
        </div>
     

      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Ann-Marie Orozco</h3>
      </footer>
     
    </body>
    </html>
    `;
};