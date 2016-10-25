;(function ($, window, document, undefined) {

    var options = {
        prependTo: 'body',
        colors: ['Pink', 'Black', 'White', 'Yellow', 'Orange', 'Red', 'Purple', 'Blue', 'Brown', 'Grey', 'Green'],
        fonts: ['Courier New', 'Courier', 'monospace', 'Comic Sans MS', 'Book Antiqua', 'Palatino'],
        interval: 3000
    };
    var hasExecuted = false;

    $(document).ready(function() {
        $('<button />', {
            text: 'Randomize',
            click: hasExecuted ? null : randomizePage
        }).prependTo($(options.prependTo));
    })

    function randomizePage() {
        hasExecuted = true;

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

        attributes.color = options.colors[Math.floor(Math.random() * options.colors.length)];

        // Background color mustn't be the same as the text color
        do {
            backgroundColor = options.colors[Math.floor(Math.random() * options.colors.length)];
        } while (backgroundColor == attributes.color);
        
        attributes.backgroundColor =  backgroundColor;

        attributes.fontFamily =  options.fonts[Math.floor(Math.random() * options.fonts.length)];
        attributes.fontSize =  Math.floor((Math.random() * 100) + 4).toString() + 'px';

        return attributes;
    }
}(jQuery, window, document));
