const elem = document.querySelector('.last');
const text = elem.innerHTML;
const length = text.length;
let timeOut;
let character = 0;


(function typeWriter() {
    timeOut = setTimeout(function() {
        character++;
        let type = text.substring(0, character);
        elem.innerHTML = type;
        typeWriter();

        if (character == length) {
            clearTimeout(timeOut);
        }

    }, 350);
}());
