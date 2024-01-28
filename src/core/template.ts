export class TemplateEngine {
	private constructor(private readonly templateRawText: string) { }

	static create(content:string): TemplateEngine {
		
		if(content === "")
			throw new Error("The template content can not be empty.")
		
		return new TemplateEngine(content);
	}

	build(varDictinary: Record<string, string>): string {
		const templateVariables = this.extractTemplateVariables();

    	if (templateHasNotVariables(templateVariables)) 		
			return this.templateRawText;

		return replaceTemplateVariablesWithDictionaryValues(templateVariables, varDictinary, this.templateRawText);
	}

	private extractTemplateVariables() {
		return this.templateRawText.match(/\${(\w+)}/g);
	}
}

function replaceTemplateVariablesWithDictionaryValues(templateVariables: RegExpMatchArray, varDictinary: Record<string, string>, parsedResult: string) {
	templateVariables.forEach(templateVar => {
		if (existsVariableInDictionary(varDictinary, extractVariableName(templateVar))) {
			parsedResult = replaceTemplateVariable(parsedResult, templateVar, varDictinary);
		}
	});
	return parsedResult;
}

function replaceTemplateVariable(parsedResult: string, templateVar: string, varDictinary: Record<string, string>): string {
	return parsedResult.replace(templateVar, varDictinary[(extractVariableName(templateVar))]);
}

function extractVariableName(templateVar: string) {
	return templateVar.substring(2, templateVar.length - 1);
}

function existsVariableInDictionary(varDictinary: Record<string, string>, varName: string) {
	return varDictinary[varName] !== undefined;
}

function templateHasNotVariables(templateVariables: RegExpMatchArray) {
	return templateVariables == null;
}

