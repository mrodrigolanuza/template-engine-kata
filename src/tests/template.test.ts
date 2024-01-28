/*
- should return an error when the template engine is instantiated with empty content
- should return the template content when no variables included
- should return the template content with one variable replaced
- should return the template content with two variables replaced
- should return an error when dictionary is null
- should return an error when dictionary is empty
- should return error when a dictionary variable is empty string
- should return error when a dictionary variable is null
*/

import { TemplateEngine } from '../core/template';

const irrelevantDictionary = {
	name: "IrrelevantName",
	firstSurname: "IrrelevantSurname1",
	secondSurname: "IrrelevantSurname2"
};

describe('The Template Engine', () => {

	it('should return an error when the template engine is instantiated with empty content.', () => {
		const templateContent = "";

		expect(()=>{
			TemplateEngine.create(templateContent);
		}).toThrow();
		
	});

	it('should return the template content when no variables included.', () => {
		const templateEngine = TemplateEngine.create("This is my name.");

		expect(templateEngine.build(irrelevantDictionary)).toBe("This is my name.");
	});

	it('should return the template content with one variable replaced.', () => {
		const templateEngine = TemplateEngine.create("This is my name: ${name}.");

		expect(templateEngine.build(irrelevantDictionary)).toBe("This is my name: IrrelevantName.");
	});

	it('should return the template content with two variables replaced.', () => {
		const templateEngine = TemplateEngine.create("My full name is ${name} ${firstSurname}.");

		expect(templateEngine.build(irrelevantDictionary)).toBe("My full name is IrrelevantName IrrelevantSurname1.");
	});
});

