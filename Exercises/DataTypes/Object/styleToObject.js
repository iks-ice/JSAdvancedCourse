let style = `
    position: absolute;
    top: -999px;
    left: 0px;
    right: auto;
    bottom: auto;
    border: 0px;
    box-sizing: content-box;
    word-wrap: break-word;
    overflow: hidden;
    height: 0px !important;
    min-height: 0px !important;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0px;
    text-transform: none;
    word-spacing: 0px;
    text-indent: 0px;
    line-height: 20px;
    width: 191px;
`;

const styleToObject = str => {
    const arrayStyles = str.split(';')
        .map(line => line.split(':')
            .map(word => word.trim()));

    let result = {};
    for (const key in arrayStyles) {
        if (arrayStyles.hasOwnProperty(key) && arrayStyles[key][0]) {
            let o = {
                [arrayStyles[key][0]]: arrayStyles[key][1]
            }
            Object.assign(result, o);
        }
    }

    return result;
}
styleToObject(style);