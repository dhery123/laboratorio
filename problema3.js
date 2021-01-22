function palindromo()
{
	var word=prompt("escriba una palabra").toLowerCase();
 
	word=word.replace(/ /g, "");
 
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return false;
		}
	}
	return true;
}
 
if(palindromo())
{
    alert("la palabra es un palindormo");
   
}else{
    alert("la palabra no es un palindromo");

}