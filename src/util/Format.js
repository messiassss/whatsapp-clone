class Format {
    static getCamelCase(text) {
        const el = document.createElement('div');
        el.setAttribute(`data-${text}`, "value")
        return Object.keys(el.dataset)[0];
    }

    // static getCamelCase(text) {
    //     const el = document.createElement('div');
    //     el.setAttribute(data - ${ text }, 'value');
    //     return Object.keys(el.dataset);
    // }
}