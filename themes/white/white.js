/*
 * bValidator white theme options
 */

bValidator.defaultOptions.themes.white = {

    offset        : '0,-4',
    position      : 'left,top',
    template      : '<div class="bvalidator-white-tooltip bvalidator-white-tooltip-noclose"><div class="bvalidator-white-arrow"></div><div class="bvalidator-white-msg">{message}</div></div>',
    templateClose : '<div class="bvalidator-white-tooltip"><div class="bvalidator-white-arrow"></div><div class="bvalidator-white-msg">{message}</div><div class="bvalidator-white-close">&#215;</div></div>',
    showClose     : false,
    msgShowSpeed  : 'normal',
    invalidClass  : 'bvalidator-white-invalid',
    validClass    : '',

    closeIconSelector   : '.bvalidator-white-close', // selector for close icon inside templateClose
    dataOptionNamespace : 'bvalidatorTheme' // data-bvalidator-theme- attributes
}

// set as default theme
bValidator.defaultOptions.useTheme = 'white';
