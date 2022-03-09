var numText = 0;

function postFunction() 
{
    var text = document.getElementById("text1").value;
    var addText_1 = document.getElementById("topic1");
    var addText_2 = document.getElementById("comment1");
    var addText_3 = document.getElementById("comment2");

    numText++;

    if(numText == 1)
    {
        addText_1.textContent = text;
    }
    else if(numText == 2)
    {
        addText_2.textContent = text;
    }
    else if(numText == 3)
    {
        addText_3.textContent = text;
    }

}

window.onload = clearFunction;
function clearFunction()
{
    var addText_1 = document.getElementById("topic1");
    var addText_2 = document.getElementById("comment1");
    var addText_3 = document.getElementById("comment2");
    addText_1.textContent = null;
    addText_2.textContent = null;
    addText_3.textContent = null;
    numText = 0;
}