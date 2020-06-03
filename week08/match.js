function match(selector, element) {
    if (!selector || !element.attributes)
        return false;

    if (selector.charAt(0) == "#") {
        var attr = element.attributes.filter(attr => attr.name === "id")[0];
        if (attr && attr.value === selector.replace("#", ''))
            return true;
    } else if (selector.charAt(0) == ".") {
        var attr = element.attributes.filter(attr => attr.name === "class")[0];
        if (attr) {
            var attrArray = attr.value.split(' ');
            for (let attrs of attrArray) {
                if (attrs === selector.replace('.', '')) {
                    return true;
                }
            }
        }
        return true;
    } else {
        if (element.tagName.toLowerCase() === selector)
            return true;
    }


    return false;
}

match("#id", document.getElementById('id'))