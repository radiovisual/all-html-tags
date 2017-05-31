const standardHTMLTags = require('html-tags');
const htmlTags = require('../');

test('API', () => {
	expect(Array.isArray(htmlTags())).toBe(true);
	expect(typeof htmlTags.info()).toBe('object');
	expect(typeof htmlTags.common()).toBe('object');
	expect(htmlTags.describe('a')).toBe('Defines a hyperlink');
	expect(typeof htmlTags.html5()).toBe('object');
	expect(typeof htmlTags.deprecated()).toBe('object');
});

test('lists all tags', (done) => {
	const tags = htmlTags();

	standardHTMLTags.forEach(item => {
		const index = tags.indexOf(item);
		if (index === -1) {
			throw new Error(`'${item}' tag not found in htmlTags`);
		}
		expect(index).toBeGreaterThan(-1);
	});
	done();
});

test('gets deprecated tags', () => {
	const tags = htmlTags.deprecated;
	expect(indexOf.tags('acronym')).toBeGreaterThan(-1);
});

test('gets html5 tags', () => {
	const tags = htmlTags.html5;
	expect(indexOf.tags('article')).toBeGreaterThan(-1);
});

test('gets common tags', () => {
	const tags = htmlTags.common;
	expect(indexOf.tags('a')).toBeGreaterThan(-1);
});
