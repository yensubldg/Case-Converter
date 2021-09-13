function changeText(val){
    let text = document.querySelector("textarea");
    switch (val){
        case 'uppercase' : {
            text.value = text.value.toUpperCase();
            break;
        }
        case 'lowercase' : {
            text.value = text.value.toLowerCase();
            break;
        }
        case 'propercase' : {
            text.value = text.value.replace(
                /\w\S*/g,
                function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
            break;
        }
        case 'sentencecase' : {
            text.value = toLowerCaseNames(toUpperCaseNames(toTitleCase(text.value)));
            break;
        }
        default: break;
    }
}
function toTitleCase(str) {
    return str.toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, s => s.toUpperCase());
}

// Add your own names here to override to lower case
function toLowerCaseNames(str) {
    return str.replace(/\b(lower case example 1|lower case example 2)\b/gmi, s => s.toLowerCase());
}

// Add your own names here to override to UPPER CASE
function toUpperCaseNames(str) {
    return str.replace(/\b(hello|string)\b/gmi, s => s.toUpperCase());
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").onclick = function (){
    let text = document.querySelector("textarea");
    download("text.txt",text.value);
}