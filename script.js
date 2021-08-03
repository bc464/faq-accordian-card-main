var questions = document.getElementsByClassName("accordion");
	console.log(questions);
	
for (var i = 0; i < questions.length; i++) {
questions[i].addEventListener('click', function() {

        var title = this.getElementsByClassName("title")[0];
		console.log(title);
        var arrow = this.getElementsByTagName("img")[0];
        var answer = this.getElementsByClassName("answer")[0];
		
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            title.style.fontWeight = 400;
            arrow.style.transform = "rotate(0deg)";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            title.style.fontWeight = 700;
            arrow.style.transform = "rotate(180deg)";
        }
    });
}


