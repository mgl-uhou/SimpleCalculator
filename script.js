const result = () => {
    console.log(document.getElementsByTagName('input')[0].value);
    console.log(eval(document.getElementsByTagName('input')[0].value));

    const input = document.getElementsByTagName('input')[0];

    const num = eval(document.getElementsByTagName('input')[0].value);

    input.value = num.toString();
}

const addCaracters = (x) => {
    const input = document.getElementsByTagName('input')[0];

    let num = x;
    input.value += num;
}

const clearInput = () => {
    const input = document.getElementsByTagName('input')[0];
    input.value = "";
}