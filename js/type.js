const texts = ["creative marketing for you     ", "your complete digital revolution     "];
var count = 0;
var index = 0;
var currenttext = '';
var letter = '';

function type()
{
    if(count == texts.length)
    {
        count = 0;
    }                                                                                                                                                                                                                                                                                                                                                                                               
    currenttext = texts[count];
    letter = currenttext.slice(0, ++index);

    document.querySelector('.top-head').textContent = letter;

    if(letter.length == currenttext.length)
    {
        index = 0;
        count++;
    }
    setTimeout(type,200);
}

type();