export class Template {

	private constructor(private readonly templateText: string) { }

	static create(): Template {
		
		return new Template("");
	}
}

