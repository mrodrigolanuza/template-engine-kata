import { Template } from '../core/template';

describe('The Template Engine', () => {
	it('should be instantiated.', () => {
		const template = Template.create();

		expect(template).toBeInstanceOf(Template);
	});
});

