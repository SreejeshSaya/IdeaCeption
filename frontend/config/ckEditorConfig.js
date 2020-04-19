/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

const config = {
	toolbarGroups: [
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
		{ name: 'forms', groups: ['forms'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
		{ name: 'links', groups: ['links'] },
		{ name: 'insert', groups: ['insert'] },
		{ name: 'styles', groups: ['styles'] },
		{ name: 'colors', groups: ['colors'] },
		{ name: 'tools', groups: ['tools'] },
		{ name: 'others', groups: ['others'] },
		{ name: 'about', groups: ['about'] },
	],

	removeButtons:
		'PasteFromWord,Undo,Redo,Scayt,SelectAll,Find,Replace,Form,HiddenField,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,Source,Save,Templates,NewPage,Preview,Print,RemoveFormat,CopyFormatting,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Unlink,Anchor,Flash,Smiley,SpecialChar,PageBreak,Iframe,Format,Font,FontSize,TextColor,BGColor,ShowBlocks,Maximize,About,Image',
};

export default config;
