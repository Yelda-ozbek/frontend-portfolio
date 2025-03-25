describe("Tema (Dark Mode) Testi", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5176");
    });
  
    it("Tema butonu görünmeli ve tıklanabilir olmalı", () => {
      cy.contains("Dark Mode").should("exist").click();
      cy.contains("Light Mode").should("exist"); // Buton değişti mi?
    });
  
    it("Dark mode aktif olunca body dark class'ı içermeli", () => {
      cy.get("body").should("not.have.class", "dark"); // Başta yok
      cy.contains("Dark Mode").click();
      cy.get("body").should("have.class", "dark"); // Tıkladıktan sonra var
    });
  
    it("Tekrar tıklayınca light moda geçmeli", () => {
      cy.contains("Dark Mode").click(); // Dark mode aktif
      cy.contains("Light Mode").click(); // Tekrar tıkla
      cy.get("body").should("not.have.class", "dark");
    });
  });
  