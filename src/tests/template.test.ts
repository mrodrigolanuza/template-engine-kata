/*
- should return an error when the template engine is instantiated with empty content
- should return the template content when no variables included
- should return the template content with one variable replaced
- should return the template content with two variables replaced
- should return error when a variable is empty string
- should return error when a variable is null
*/

import { TemplateEngine } from '../core/template';

describe('The Template Engine', () => {
	it('should be instantiated.', () => {
		const templateContent = "My name is ${name}";
		
		const template = TemplateEngine.create(templateContent);

		expect(template).toBeInstanceOf(TemplateEngine);
	});

	it('should return an error when the template engine is instantiated with empty content.', () => {
		const templateContent = "";

		expect(()=>{
			TemplateEngine.create(templateContent);
		}).toThrow();
		
	});

	it('should return the template content when no variables included.', () => {
		const templateContent = "This is my name";
		
		type KeyValueDictionary = Record<string, string>;

		const varDictinary: KeyValueDictionary = {
			name: "Marcos",
			firstSurname: "Surname1",
			secondSurname: "Surname2"
		};

		const template = TemplateEngine.create(templateContent);

		expect(template.build(varDictinary)).toBe("This is my name");
	});
});

