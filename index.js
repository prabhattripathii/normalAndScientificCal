console.log('object :>> Calculator');
let helloGreet = "Hello World"
let lastElement = helloGreet.substring(-1,1)
console.log(lastElement);
// console.log(helloGreet.length-1 - helloGreet.length);

function consoleClear()
{
    console.log(document.getElementById('solutionArea').value);
    document.getElementById('solutionArea').value = null;
};


function sendElementToSpace(x)
{
    document.getElementById('solutionArea').value += x;
    console.log(x)
}

function removeLastValue()
{
    let dataInField =  document.getElementById('solutionArea').value;
    console.log(document.getElementById('solutionArea').value.substring(0, document.getElementById('solutionArea').value.length))
    document.getElementById('solutionArea').value= document.getElementById('solutionArea').value.substring(0, document.getElementById('solutionArea').value.length -1);
}

function arithmeticElement(x)
{
    lastElement = document.getElementById('solutionArea').value.substring(document.getElementById('solutionArea').value.length -1, document.getElementById('solutionArea').value.length);
    console.log(lastElement)
    if (lastElement == '+' || lastElement == '-'|| lastElement == '*' || lastElement == '/' || lastElement == '%' || lastElement == '**')
    {
        alert("Operator Already Exists");
    }
    else
    {
        document.getElementById('solutionArea').value += x;        
    }
}

function tanPressed(){
    if(document.getElementById('solutionArea') == null)
    {
        alert("Please Enter a Value to Use Tan")
    }
    else
    {
    let tanParse = document.getElementById("solutionArea").value
    document.getElementById("solutionArea").value = Math.tan(tanParse);
    }
}

function cosPressed(){
    if(document.getElementById('solutionArea') == null)
    {
        alert("Please Enter a Value to Use Tan")
    }
    else
    {
    let tanParse = document.getElementById("solutionArea").value
    document.getElementById("solutionArea").value = Math.cos(tanParse);
    }
}

function sinPressed(){
    if(document.getElementById('solutionArea') == null)
    {
        alert("Please Enter a Value to Use Tan")
    }
    else
    {
    let tanParse = document.getElementById("solutionArea").value
    document.getElementById("solutionArea").value = Math.sin(tanParse);
    }
}

function negetivePositive()
{   
    let normalValue= document.getElementById("solutionArea").value;
    // console.log("Negetive or Positive")
    console.log('object :>> ', normalValue);
    if (document.getElementById("solutionArea").value[0] != '-')
    {
        document.getElementById("solutionArea").value = '-'+ normalValue;
    }
    else if (document.getElementById("solutionArea").value[0] == '-')
    {
        console.log("Working")
        document.getElementById("solutionArea").value = document.getElementById("solutionArea").value.replace('-','+');
    }
}

function reciprocalValue()
{
    document.getElementById("solutionArea").value = 1/Number(document.getElementById("solutionArea").value);
}


function getAnswer()
{

    document.getElementById("solutionArea").value = eval(document.getElementById("solutionArea").value);

}