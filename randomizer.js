;(function ($, window, document, undefined) {

    var options = {
        secret: 'xc3511',
        colors: ['Pink', 'Black', 'White', 'Yellow', 'Orange', 'Red', 'Purple',
                 'Blue', 'Brown', 'Grey', 'Green'
        ],
        fonts: ['Arial', 'Helvetica', 'Courier New', 'Courier', 'Times New Roman',
                'Times', 'Palatino', 'Garamond', 'Bookman', 'Avant Garde'
        ],
        interval: 3000
    };
    var hasStarted = false;
    var eventData = '';
    var eventDataDelimiter = '.';
    var secretAscii = getAscii(options.secret, eventDataDelimiter);

    $(document).on('keypress', function(event) {
        if (!hasStarted) {
            eventData += event.which.toString() + eventDataDelimiter;

            // Check if correct secret has been entered
            if (eventData.indexOf(secretAscii) !== -1) {
                hasStarted = true;
                randomizeAtributes();
                setInterval(randomizeAtributes, options.interval);
            }
        }
    });

    function randomizeAtributes() {
        $('*').each(function() {
            var attributes = getRndAttributes();
            $(this).css({
                'color': attributes.color,
                'background-color': attributes.backgroundColor,
                'font-family': attributes.fontFamily,
                'font-size': attributes.fontSize
            })
        });
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

    function getAscii(string, stringDelimiter) {
        var asciiString = '';

        for (var i = 0; i < string.length; i++) {
            asciiString += string.charCodeAt(i).toString() + stringDelimiter;
        }
        return asciiString;
    }
}(jQuery, window, document));
