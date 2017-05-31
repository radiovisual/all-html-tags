'use strict';
const objectAssign = require('object-assign');

const common = {
  '!DOCTYPE': 'Defines the document type',
  a: 'Defines a hyperlink',
  abbr: 'Defines an abbreviation or an acronym',
  address: 'Defines contact information for the author/owner of a document',
  area: 'Defines an area inside an image-map',
  b: 'Defines bold text',
  base: 'Specifies the base URL/target for all relative URLs in a document',
  bdo: 'Overrides the current text direction',
  blockquote: 'Defines a section that is quoted from another source',
  body: 'Defines the document\'s body',
  br: 'Defines a single line break',
  button: 'Defines a clickable button',
  caption: 'Defines a table caption',
  cite: 'Defines the title of a work',
  code: 'Defines a piece of computer code',
  col: 'Specifies column properties for each column within a <colgroup> element ',
  colgroup: 'Specifies a group of one or more columns in a table for formatting',
  dd: 'Defines a description/value of a term in a description list',
  del: 'Defines text that has been deleted from a document',
  dfn: 'Represents the defining instance of a term',
  div: 'Defines a section in a document',
  dl: 'Defines a description list',
  dt: 'Defines a term/name in a description list',
  em: 'Defines emphasized text ',
  fieldset: 'Groups related elements in a form',
  form: 'Defines an HTML form for user input',
  h1: 'Defines HTML headings',
  h2: 'Defines HTML headings',
  h3: 'Defines HTML headings',
  h4: 'Defines HTML headings',
  h5: 'Defines HTML headings',
  h6: 'Defines HTML headings',
  head: 'Defines information about the document',
  hr: 'Defines a thematic change in the content',
  html: 'Defines the root of an HTML document',
  i: 'Defines a part of text in an alternate voice or mood',
  iframe: 'Defines an inline frame',
  img: 'Defines an image',
  input: 'Defines an input control',
  ins: 'Defines a text that has been inserted into a document',
  kbd: 'Defines keyboard input',
  label: 'Defines a label for an <input> element',
  legend: 'Defines a caption for a <fieldset> element',
  li: 'Defines a list item',
  link: 'Defines the relationship between a document and an external resource (most used to link to style sheets)',
  map: 'Defines a client-side image-map',
  math: 'Used to include math expressions in the current line',
  menu: 'Defines a list/menu of commands',
  meta: 'Defines metadata about an HTML document',
  noscript: 'Defines an alternate content for users that do not support client-side scripts',
  object: 'Defines an embedded object',
  ol: 'Defines an ordered list',
  optgroup: 'Defines a group of related options in a drop-down list',
  option: 'Defines an option in a drop-down list',
  p: 'Defines a paragraph',
  param: 'Defines a parameter for an object',
  pre: 'Defines preformatted text',
  q: 'Defines a short quotation',
  s: 'Defines text that is no longer correct',
  samp: 'Defines sample output from a computer program',
  script: 'Defines a client-side script',
  select: 'Defines a drop-down list',
  small: 'Defines smaller text',
  span: 'Defines a section in a document',
  strong: 'Defines important text',
  style: 'Defines style information for a document',
  sub: 'Defines subscripted text',
  sup: 'Defines superscripted text',
  table: 'Defines a table',
  tbody: 'Groups the body content in a table',
  td: 'Defines a cell in a table',
  textarea: 'Defines a multiline input control (text area)',
  tfoot: 'Groups the footer content in a table',
  th: 'Defines a header cell in a table',
  thead: 'Groups the header content in a table',
  title: 'Defines a title for the document',
  tr: 'Defines a row in a table',
  u: 'Defines text that should be stylistically different from normal text',
  ul: 'Defines an unordered list',
  var: 'Defines a variable',
};

const html5 = {
	article: 'Defines an article',
	aside: 'Defines content aside from the page content',
	audio: 'Defines sound content',
	bdi: 'Isolates a part of text that might be formatted in a different direction from other text outside it',
	canvas: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',
	data: ' Used for providing a machine-readable version of its own contents',
	datalist: 'Specifies a list of pre-defined options for input controls',
	details: 'Defines additional details that the user can view or hide',
	dialog: 'Defines a dialog box or window',
	embed: 'Defines a container for an external (non-HTML) application',
	figcaption: 'Defines a caption for a <figure> element',
	figure: 'Specifies self-contained content',
	footer: 'Defines a footer for a document or section',
	header: 'Defines a header for a document or section',
	keygen: 'Defines a key-pair generator field (for forms)',
	main: 'Specifies the main content of a document',
	mark: 'Defines marked/highlighted text',
	menuitem: 'Defines a command/menu item that the user can invoke from a popup menu',
	meter: 'Defines a scalar measurement within a known range (a gauge)',
	nav: 'Defines navigation links',
	output: 'Defines the result of a calculation',
	picture: 'Defines a container for multiple image resources',
	progress: 'Represents the progress of a task',
	rb: 'Element marks the base text component of a ruby annotation',
	rp: 'Defines what to show in browsers that do not support ruby annotations',
	rt: 'Defines an explanation/pronunciation of characters (for East Asian typography)',
	rtc: 'Element marks a ruby text container for ruby text components in a ruby annotation',
	ruby: 'Defines a ruby annotation (for East Asian typography)',
	section: 'Defines a section in a document',
	source: 'Defines multiple media resources for media elements (<video> and <audio>)',
	summary: 'Defines a visible heading for a <details> element',
	svg: 'Defines embedded SVG content',
	template: 'Used to declare fragments of HTML that can be cloned and inserted in the document by script',
	time: 'Defines a date/time',
	track: 'Defines text tracks for media elements (<video> and <audio>)',
	video: 'Defines a video or movie',
	wbr: 'Defines a possible line-break'
};

const deprecated = {
	acronym: 'Not supported in HTML5. Use abbr instead. Defines an acronym',
	applet: 'Not supported in HTML5. Use <embed> or <object> instead. Defines an embedded applet',
	basefont: 'Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document',
	big: 'Not supported in HTML5. Use CSS instead. Defines big text',
	center: 'Not supported in HTML5. Use CSS instead. Defines centered text',
	dir: 'Not supported in HTML5. Use <ul> instead. Defines a directory list',
	font: 'Not supported in HTML5. Use CSS instead. Defines font, color, and size for text',
	frame: 'Not supported in HTML5. Defines a window (a frame) in a frameset',
	frameset: 'Not supported in HTML5. Defines a set of frames',
	noframes: 'Not supported in HTML5. Defines an alternate content for users that do not support frames',
	strike: 'Not supported in HTML5. Use <del> or <s> instead. Defines strikethrough text',
	tt: 'Not supported in HTML5. Use CSS instead. Defines teletype text'
};

function all() {
	return objectAssign(common, html5, deprecated);
}

function tags() {
	return Object.keys(all()).sort();
}

function describe(tag) {
	if (typeof tag !== 'string') {
		throw new TypeError(`allHtmlTags.describe expected a string, got ${typeof tag}`);
	}
	return all()[tag];
};

module.exports = tags;
module.exports.info = all;
module.exports.describe = describe;
module.exports.common = () => common;
module.exports.deprecated = () => deprecated;
module.exports.html5 = () => objectAssign(html5, common);
