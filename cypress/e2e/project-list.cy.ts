import mockProjects from "../fixtures/projects.json";

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

  const projectListEndpoint = "https://prolog-api.profy.dev/project";

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders loading spinner", () => {
      // Create a Promise and capture a reference to its resolve
      // function so that we can resolve it when we want to:
      let sendResponse: (value?: unknown) => void;
      const trigger = new Promise((resolve) => {
        sendResponse = resolve;
      });

      // Intercept requests to the URL we are loading data from and do not
      // let the response occur until our above Promise is resolved
      cy.intercept(projectListEndpoint, (request) => {
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

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const projectStatus = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(projectStatus[index]);
        });
    });

    it("renders error component", () => {
      cy.intercept(projectListEndpoint, { statusCode: 500 }).as(
        "getServerFailure",
      );
      cy.visit("http://localhost:3000/dashboard");

      // cy.get('[data-cy="error-component"]', { timeout: 10000 });

      // react-query has a default retry value of 3 times
      cy.wait("@getServerFailure")
        .wait("@getServerFailure")
        .wait("@getServerFailure")
        .wait("@getServerFailure");

      cy.get('[data-cy="error-component"]');
    });
    it("view issue links navigate to issues page with filter", () => {
      cy.visit("http://localhost:3000/dashboard");
      // how many assumptions to make?

      cy.get("main")
        .find("a")
        .each((el, index) => {
          cy.wrap(el).should(
            "have.attr",
            "href",
            `/dashboard/issues?project=${encodeURIComponent(
              mockProjects[index].name,
            )}`,
          );
        });
    });
  });
});
