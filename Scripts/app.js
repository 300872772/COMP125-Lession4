/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
    paragraphs[1] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.3";
    paragraphs[2] = "<span class='firstSentence'>This is my first paragraph</span>. It is only visible on the first page. This next sentence is to prove that this really works!!!Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    var paragraphElimentLength = paragraphElements.length-1;
    
    for (var index = paragraphElimentLength; index >=0; index--) {
        
        console.log(index);
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
        }
    }
    
    
})();