import moment from "moment";

export function truncateText(text) {
    return text.substring(0, 20) + "...";
};

export function formateDate(dt, format = null ) {
    let output = "-";
    if (format) {
        output = moment(dt).format(format)
    }
    else {
        output = moment(dt).fromNow();
    }
    return output;
};
