module.exports = {
	'colors' : {
		'burgandy' : '#752D37',
		'greystrong': '#59595B'
	},
	'primary': 'colors(burgandy)',
	'secondary': 'colors(greystrong)',

	'body': {
		'background': 'colors(white)',
		'block-background': 'colors(white)',
		'font-color': 'colors(greystronger)',
		'font-size'		: '16px',
	},
	'footer': {
		'background': 'secondary',
		'font-color': 'contrastFW(colors(white),secondary)',
	},
	'input': {
		'background': 'colors(white)',
		'font-color': 'colors(greystronger)',
		'border-color': 'colors(greylighter)',
		'placeholder-font-color': 'colors(grey)',
		'radius': true,
	},
	'input-focus': {
		'background': 'input(background)',
		'font-color': 'input(font-color)',
		'border-color': 'colors(grey)',
	},
};
