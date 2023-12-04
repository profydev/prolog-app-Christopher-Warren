// import mockProjects from "../fixtures/projects.json";

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("shows loading spinner", () => {
      // Create a Promise and capture a reference to its resolve
      // function so that we can resolve it when we want to:
      let sendResponse: (value?: unknown) => void;
      const trigger = new Promise((resolve) => {
        sendResponse = resolve;
      });

      // Intercept requests to the URL we are loading data from and do not
      // let the response occur until our above Promise is resolved
      cy.intercept("https://prolog-api.profy.dev/project", (request) => {
        return trigger.then(() => {
          request.reply();
        });
      });

      cy.visit("http://localhost:3000/dashboard");

      cy.get('[data-cy="loader"]')
        .should("be.visible")
        .then(() => {
          sendResponse();
        });
    });

    // it("renders the projects", () => {
    //   const languageNames = ["React", "Node.js", "Python"];
    //   const projectStatus = ["Critical", "Warning", "Stable"];

    //   // get all project cards
    //   cy.get("main")
    //     .find("li")
    //     .each(($el, index) => {
    //       // check that project data is rendered
    //       cy.wrap($el).contains(mockProjects[index].name);
    //       cy.wrap($el).contains(languageNames[index]);
    //       cy.wrap($el).contains(mockProjects[index].numIssues);
    //       cy.wrap($el).contains(mockProjects[index].numEvents24h);
    //       cy.wrap($el).contains(projectStatus[index]);
    //       cy.wrap($el)
    //         .find("a")
    //         .should("have.attr", "href", "/dashboard/issues");
    //     });
    // });
  });
});
