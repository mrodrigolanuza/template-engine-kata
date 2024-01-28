export class TemplateEngine {

	private constructor(private readonly templateText: string) { }

	static create(content:string): TemplateEngine {
		return new TemplateEngine(content);
	}
}

