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

const irrelevantDictionary :Record<string, string> = {
	name: "IrrelevantName",
	firstSurname: "IrrelevantSurname1",
	secondSurname: "IrrelevantSurname2"
};

describe('The Template Engine', () => {

	it('should return an error when the template engine is instantiated with empty content.', () => {
		const templateContent = "";

		expect(()=>{
			TemplateEngine.create(templateContent, irrelevantDictionary);
		}).toThrow(Error("The template content can not be empty."));
		
	});

	it('should return an error when the template engine is instantiated with no dictionary.', () => {
		const templateText = "This is my name.";
		const emptyDictionary :Record<string, string> = { };

		expect(()=>{
			TemplateEngine.create(templateText, emptyDictionary);
		}).toThrow(Error("The dictionary must be populated."));
		
	});

	it('should return the template content when no variables included.', () => {
		const templateText = "This is my name.";
		const templateEngine = TemplateEngine.create(templateText, irrelevantDictionary);

		expect(templateEngine.build()).toBe("This is my name.");
	});

	it('should return the template content with one variable replaced.', () => {
		const templateText = "This is my name: ${name}.";
		const templateEngine = TemplateEngine.create(templateText, irrelevantDictionary);

		expect(templateEngine.build()).toBe("This is my name: IrrelevantName.");
	});

	it('should return the template content with two variables replaced.', () => {
		const templateText = "My full name is ${name} ${firstSurname}.";
		const templateEngine = TemplateEngine.create(templateText, irrelevantDictionary);

		expect(templateEngine.build()).toBe("My full name is IrrelevantName IrrelevantSurname1.");
	});
});

