var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("name").style.display="inline";
        document.getElementById("company").style.display="inline";
        document.getElementById("state").style.display="inline";
        document.getElementById("city").style.display="inline";
        document.getElementById("number").style.display="inline";
        document.getElementById("email").style.display="inline";
        document.getElementById("big_text").style.display="inline";
        document.getElementById("quality").style.display="inline";
        document.getElementById("trainer").style.display="inline";
        document.getElementById("manner").style.display="inline";
        document.getElementById("experience").style.display="inline";
        document.getElementById("rating").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("name").style.display="none";
        document.getElementById("company").style.display="none";
        document.getElementById("state").style.display="none";
        document.getElementById("city").style.display="none";
        document.getElementById("number").style.display="none";
        document.getElementById("email").style.display="none";
        document.getElementById("big_text").style.display="none";
        document.getElementById("quality").style.display="none";
        document.getElementById("trainer").style.display="none";
        document.getElementById("manner").style.display="none";
        document.getElementById("experience").style.display="none";
        document.getElementById("rating").style.display="none";
        return a=1;
    }
}