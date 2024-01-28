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

	it('should return the template content with one variable replaced.', () => {
		const templateContent = "This is my name: ${name}.";
		type KeyValueDictionary = Record<string, string>;
		const varDictinary: KeyValueDictionary = {
			name: "Irrelevant"
		};

		const template = TemplateEngine.create(templateContent);

		expect(template.build(varDictinary)).toBe("This is my name: Irrelevant.");
	});

	it('should return the template content with two variables replaced.', () => {
		const templateContent = "My full name is ${name} ${surname}.";
		type KeyValueDictionary = Record<string, string>;
		const varDictinary: KeyValueDictionary = {
			name: "IrrelevantName",
			surname: "IrrelevantSurname"
		};

		const template = TemplateEngine.create(templateContent);

		expect(template.build(varDictinary)).toBe("My full name is IrrelevantName IrrelevantSurname.");
	});
});

