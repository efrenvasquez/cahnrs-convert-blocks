wp.hooks.addFilter('blocks.registerBlockType', 'wsuwp/button', function(settings, name) {
    if (name === 'wsuwp/button') {
        settings.transforms = {
            from: [
                {
                    type: 'shortcode',
                    tag: 'action',
                    attributes: {
                        label: {
                            type: 'string',
                            shortcode: (props) => props && props.named ? props.named.label : '',
                        },
                        link: {
                            type: 'string',
                            shortcode: (props) => props && props.named ? props.named.link : '',
                        },
                    },
                    transform: (props) => {
                        const namedAttributes = props && props.named;
            
                        if (!namedAttributes) {
                            console.error("Named attributes missing in shortcode.");
                            return;
                        }
            
                        const { label, link } = namedAttributes;
            
                        console.log("Shortcode transformation. Label:", label, "Link:", link);
            
                        if (label !== undefined && link !== undefined) {
                            const buttonBlock = wp.blocks.createBlock('wsuwp/button', {
                                buttonText: label,
                                buttonUrl: link,
                            });
            
                            if (buttonBlock && buttonBlock.originalContent === undefined) {
                                buttonBlock.originalContent = ''; 
                            }
            
                            return buttonBlock;
                        } else {
                            console.error("Label or link missing in shortcode attributes.");
                        }
                    },
                },
            ],
            
        };
    }

    return settings;
});
