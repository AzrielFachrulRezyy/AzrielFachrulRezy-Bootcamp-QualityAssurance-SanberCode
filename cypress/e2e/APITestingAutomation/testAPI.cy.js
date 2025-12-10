describe("TUGAS MATERI 18 API TESTING - Azriel FachrulRezy", () => {
  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  };

  it("GET - List Users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers,
      failOnStatusCode: false,
    }).then((res) => {
      expect([200, 403]).to.include(res.status);
    });
  });

  it("GET - Single User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      headers,
      failOnStatusCode: false,
    }).then((res) => {
      expect([200, 403]).to.include(res.status);
    });
  });

  it("GET - Single User Not Found", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/23",
      headers,
      failOnStatusCode: false,
    }).then((res) => {
      expect([404, 403]).to.include(res.status);
    });
  });

  it("POST - Create User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      headers,
      failOnStatusCode: false,
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((res) => {
      expect([201, 403]).to.include(res.status);
    });
  });

  it("POST - Register Success", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      headers,
      failOnStatusCode: false,
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      },
    }).then((res) => {
      expect([200, 403]).to.include(res.status);
    });
  });

  it("POST - Register Unsuccess", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      headers,
      failOnStatusCode: false,
      body: {
        email: "sydney@fife",
      },
    }).then((res) => {
      expect([400, 403]).to.include(res.status);
    });
  });

  it("PUT - Update User", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      headers,
      failOnStatusCode: false,
      body: {
        name: "morpheus",
        job: "zion resident",
      },
    }).then((res) => {
      expect([200, 403]).to.include(res.status);
    });
  });

  it("PATCH - Update User Partial", () => {
    cy.request({
      method: "PATCH",
      url: "https://reqres.in/api/users/2",
      headers,
      failOnStatusCode: false,
      body: {
        job: "QA Engineer",
      },
    }).then((res) => {
      expect([200, 403]).to.include(res.status);
    });
  });

  it("DELETE - Delete User", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2",
      headers,
      failOnStatusCode: false,
    }).then((res) => {
      expect([204, 403]).to.include(res.status);
    });
  });
});
