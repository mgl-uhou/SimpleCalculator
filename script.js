const input = document.getElementsByTagName('input')[0];

const result = () => {
    console.log(document.getElementsByTagName('input')[0].value);
    console.log(eval(document.getElementsByTagName('input')[0].value.replace(/\^/g, "**")));

    const num = eval(document.getElementsByTagName('input')[0].value.replace(/\^/g, "**"));

    input.value = num.toString();
}

const addCaracters = (x) => {
    let num = x;
    input.value += num;
}

const clearInput = () => {
    input.value = "";
}

const replace = () => {
    input.value = eval(document.getElementsByTagName('input')[0].value * (-1));
}

/* const percent = () => {
    
} */