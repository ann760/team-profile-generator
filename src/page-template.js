const generateManager = manager => {
 
  return `
        <div class="card-header bg-dark text-light">
          <h4> ${manager.getRole()}</h4>
          <h4> ${manager.getName()}</h4>
          <ul id="managerInfo" class="list-group list-group-flush">
            <li class="listInfo badge badge-primary badge-pill"><p>ID Number</p>${manager.getId()}</li>
            <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email Address</a>
            <li class="m-1"><p>School Name</p>${manager.getSchool()}</li>
          </ul>
        </div>
      `;
  };

const generateInterns = intern => {
  if (!intern) {
    return '';
  }
  return `
        <div class="card-header bg-dark text-light">
          <h4> ${intern.getRole()}</h4>
          <h4> ${intern.getName()}</h4>
          <ul id="managerInfo" class="list-group list-group-flush">
            <li class="listInfo badge badge-primary badge-pill"><p>ID Number</p>${intern.getId()}</li>
            <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email Address</a>
            <li class="m-1"><p>School Name</p>${intern.getSchool()}</li>
          </ul>
        </div>
      `;
  };

module.exports = teamData => {
    // destructure page data by section
   // const {  } = templateData;
   console.log(teamData)
  
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

     <!-- <link rel="stylesheet" href="style.css" -->
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
          ${generateManager(teamData.Manager)}
        </div>
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Ann-Marie Orozco</h3>
      </footer>
      <script>
      
      <div class="card">
          <div class="col-12 col-md-6 col-xl-3 mb-3" id="cards">
          ${generateInterns()}
          
        </div>
      </script>
    </body>
    </html>
    `;
  };

//   ${generateEmployee(employee)}