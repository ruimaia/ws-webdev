;(function ($, window, document, undefined) {

    var options = {
        prependTo: 'body',
        colors: ['Pink', 'Black', 'White', 'Yellow', 'Orange', 'Red', 'Purple', 'Blue', 'Brown', 'Grey', 'Green'],
        fonts: ['Courier New', 'Courier', 'monospace', 'Comic Sans MS', 'Book Antiqua', 'Palatino'],
        interval: 3000
    };
    var hasStarted = false;

    $(document).ready(function() {
        $('<button />', {
            text: 'Randomize',
            click: hasStarted ? null : randomizeAtributes
        }).prependTo($(options.prependTo));
    })

    function randomizeAtributes() {
        hasStarted = true;

        setInterval(function() {
            $('*').each(function() {
                var attributes = getRndAttributes();
                $(this).css({
                    'color': attributes.color,
                    'background-color': attributes.backgroundColor,
                    'font-family': attributes.fontFamily,
                    'font-size': attributes.fontSize,
                })
            });
        },
        options.interval);
    }

    function getRndAttributes() {
        var backgroundColor, attributes = {};

        attributes.color = options.colors[getRndInt(0, options.colors.length)];

        // Background color should be different from the text color (otherwise you can't see the text)
        do {
            backgroundColor = options.colors[getRndInt(0, options.colors.length)];
        } while (backgroundColor == attributes.color);

        attributes.backgroundColor =  backgroundColor;

        attributes.fontFamily =  options.fonts[getRndInt(0, options.fonts.length)];
        attributes.fontSize =  getRndInt(4, 100).toString() + 'px';

        return attributes;
    }

    function getRndInt(min, max) {
        return Math.floor((Math.random() * max) + min);
    }
}(jQuery, window, document));
