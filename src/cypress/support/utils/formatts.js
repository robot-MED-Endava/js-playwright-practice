export const metricsTableFormats = {
    CURRENCY: /^-|^\$([1-9]\d{0,2}(,\d{3})*|\d+)(\.\d{2})?$/,
    DECIMAL: /^-|^\d{1,3}(((,\d{3}){1})*(\.\d{2})?)$/,
    DECIMAL_AND_PERCENTAGE: /^-|^\d{1,3}(((,\d{3}){1})*(\.\d{2})?)?%$/,
    INTEGER: /^-|0|^[1-9]\d{0,2}(,\d{3})*$|^[1-9]\d*$/,
    PERCENTAGE: /^-|^([1-9]\d{0,2}(,\d{3})*|\d+)(\.\d{2})?%$/,
    DATE: /^(\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/,
};