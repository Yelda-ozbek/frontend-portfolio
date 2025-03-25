describe("İletişim Formu Testi", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5176"); 
    });
  
    it("Form başlığı görünmeli", () => {
      cy.contains("Bana mesaj gönder!").should("exist");
    });
  
    it("Boş form uyarı vermeli", () => {
      cy.contains("Gönder").click();
      cy.contains("Lütfen tüm alanları doldurun!").should("exist");
    });
  
    it("Form başarılı şekilde gönderilmeli", () => {
      cy.get('input[name="name"]').type("Yelda");
      cy.get('input[name="email"]').type("yelda@example.com");
      cy.get('textarea[name="message"]').type("Bu bir test mesajı.");
      cy.contains("Gönder").click();
      cy.contains("Mesaj başarıyla gönderildi!").should("exist");
    });
  });
  