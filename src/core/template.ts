export class TemplateEngine {
	private constructor(private readonly templateText: string) { }

	static create(content:string): TemplateEngine {
		
		if(content === "")
			throw new Error("The template content can not be empty.")
		
		return new TemplateEngine(content);
	}

	build(varDictinary: Record<string, string>): string {
		let parsedTemplateResult:string = this.templateText;
		const templateVariables = this.templateText.match(/\${(\w+)}/g);

    	if (templateVariables == null) 		
			return this.templateText;

		for (const templateVar of templateVariables) {
			const varName = templateVar.substring(2, templateVar.length - 1);
			const valor = varDictinary[varName];
			if (valor !== undefined) {
				parsedTemplateResult = parsedTemplateResult.replace(templateVar, valor);
			}
		}

		return parsedTemplateResult;
	}
}

