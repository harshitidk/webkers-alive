var d = 0;
var count_color = 0;
function change_color()
{
    var burger = document.querySelector('.burger');
    var bur = document.querySelectorAll('.bur');
    var bur1 = document.querySelector('.bur1');
    var bur2 = document.querySelector('.bur2');
    var bur3 = document.querySelector('.bur3');
    var nav = document.querySelector('.nav-links');
    
    burger.addEventListener('click',function()
    {
        count_color = 0;
        d++;
        bur.forEach(li => {
            if(d%2==0)
            {
                nav.classList.toggle('toggle-nav');
                bur1.style.width = '22px';
                bur2.style.width = '22px';
                bur3.style.width = '22px';
            }
            else 
            {
                nav.classList.toggle('toggle-nav');
                bur1.style.width = '22px';
                bur2.style.width = '17px';
                bur3.style.width = '12px';
            }
        })
    })
}

change_color();
