//your code here
const questions = [
  'Who was the first female to become the governor of an Indian state?',
  'Who was the first woman to climb Mount Everest twice?',
  'Who is President of India?'
];

describe('Questions Page', () => {
  it('should display all questions correctly', () => {
    cy.visit('path/to/your/page.html'); // Adjust the path to your HTML file

    questions.forEach((question, index) => {
      cy.get('blockquote').eq(index).children().should('have.length', 1); // Check that each blockquote has one child
      cy.get('p').eq(index).then(ans => {
        let text = ans.text().trim();
        expect(text).to.eq(question); // Check that the text matches the expected question
      });
    });
  });
});