export class TemplateEngine {
	private constructor(private readonly templateRawText: string, 
					    private readonly varDictinary: Record<string, string>) { }

	static create(content:string, varDictionary: Record<string, string>): TemplateEngine {
		
		if(content === "")
			throw new Error("The template content can not be empty.")
		
		if(Object.keys(varDictionary).length == 0)
			throw new Error("The dictionary must be populated.")

		return new TemplateEngine(content, varDictionary);
	}

	build(): string {
		const templateVariables = this.extractTemplateVariables();

    	if (templateHasNotVariables(templateVariables)) 		
			return this.templateRawText;

		return replaceTemplateVariablesWithDictionaryValues(this.templateRawText, templateVariables, this.varDictinary);
	}

	private extractTemplateVariables() {
		return this.templateRawText.match(/\${(\w+)}/g);
	}
}

function replaceTemplateVariablesWithDictionaryValues(templateRawText: string, templateVariables: RegExpMatchArray, varDictinary: Record<string, string>) {
	let parsedResult: string = templateRawText;
	
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

