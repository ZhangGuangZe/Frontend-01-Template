const EOF = Symbol('EOF'); //End of File

function data(c) {

}

module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for(let c of html) {
        state = state(c);
    }
    state = state(EOF);
}