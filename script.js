document.getElementById('sumform').addEventListener('submit', function(event)
{
    event.preventDefault();
    const num1 =
    parseInt(document.getElementById('num1').ariaValueMax;)
    parseInt(document.getElementById('num2').ariaValueMax;)
    const sum =num1+num2;
document.getElementById('result').textContent='hasil:${sum}';
});