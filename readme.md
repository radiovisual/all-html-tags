# all-html-tags [![Build Status](https://travis-ci.org/radiovisual/all-html-tags.svg?branch=master)](https://travis-ci.org/radiovisual/all-html-tags)

> Get all HTML tags, with options for filtering deprecated, HTML5 tags, etc.


## Install

```
$ npm install --save all-html-tags
```


## Usage

```js
const allHtmlTags = require('all-html-tags');

allHtmlTags();
//=> ['a', 'abbr', 'address', 'area', ...]
```


## API

### `allHtmlTags()`

Returns an array of all known HTML tags (includes all common, HTML5 and deprecated tags)

### `allHtmlTags.info()`

Returns an object with all the tags paired with a description of the tag.

```js
allHtmlTags.info();
/*
{
	article: 'Defines an article',
	aside: 'Defines content aside from the page content',
	audio: 'Defines sound content',
  ...
}
*/
```

### `allHtmlTags.describe(tag)`

#### tag

Type: `string`

Get the description of a tag.

```js
allHtmlTags.describe('a');
//=> 'Defines a hyperlink'
```

### `allHtmlTags.common()`

List off all the common HTML tags (does not include HTML5 and deprecated elements)

### `allHtmlTags.deprecated()`

List off all the deprecated HTML tags (elements not supported in HTML5)

### `allHtmlTags.html5()`

List off all the HTML tags that were introduced in HTML5


## License

MIT © [Michael Wuergler](http://numetriclabs.com)
