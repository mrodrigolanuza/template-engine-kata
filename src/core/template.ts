export class TemplateEngine {
	private constructor(private readonly templateText: string) { }

	static create(content:string): TemplateEngine {
		
		if(content === "")
			throw new Error("The template content can not be empty.")
		
		return new TemplateEngine(content);
	}

	build(varDictinary: Record<string, string>): any {
		return this.templateText;
	}
}

