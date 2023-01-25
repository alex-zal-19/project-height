let height = document.forms.publish.addEventListener('submit', () =>  {
    let message = document.getElementsByTagName("input")[0].value;
    alert(`Поздравляем, ваш рост ${message} см`);
    return false;

});