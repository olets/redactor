(function($R)
{
    $R.add('plugin', 'textdirection', {
        translations: {
    		en: {
    			"change-text-direction": "RTL-LTR",
    			"left-to-right": "Left to Right",
    			"right-to-left": "Right to Left"
    		}
        },
        init: function(app)
        {
            this.app = app;
            this.lang = app.lang;
            this.block = app.block;
            this.toolbar = app.toolbar;
        },
        // public
        start: function()
        {
            var dropdown = {};

    		dropdown.ltr = { title: this.lang.get('left-to-right'), api: 'plugin.textdirection.set', args: 'ltr' };
    		dropdown.rtl = { title: this.lang.get('right-to-left'), api: 'plugin.textdirection.set', args: 'rtl' };

            var $button = this.toolbar.addButton('textdirection', { title: this.lang.get('change-text-direction') });
            $button.setIcon('<i class="re-icon-textdirection"></i>');
			$button.setDropdown(dropdown);
        },
        set: function(type)
		{
    		if (type === 'rtl') this.block.add({ attr: { dir: 'rtl' }});
            else this.block.remove({ attr: 'dir' });
		}
    });
})(Redactor);