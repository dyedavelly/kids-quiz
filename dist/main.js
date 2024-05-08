!function(){"use strict";!function(){function t(t){null!==t&&t.classList.add("active")}var o={0:{text:"What is the name of a place you go to see lots of animals?",option1:"Park",option2:"Zoo",option3:"School",option4:"Sanctuary",correctAnswer:"option2"},1:{text:"How many states are there in USA?",option1:"50",option2:"49",option3:"48",option4:"47",correctAnswer:"option1"},2:{text:"How many legs does a spider have?",option1:"7",option2:"6",option3:"8",option4:"4",correctAnswer:"option3"},3:{text:"If you freeze water, what do you get?",option1:"Steam",option2:"Liquid",option3:"Solid",option4:"Ice",correctAnswer:"option4"},4:{text:"How many planets are in our solar system?",option1:"8",option2:"9",option3:"7",option4:"11",correctAnswer:"option1"},5:{text:"What do caterpillars turn into?",option1:"Worm",option2:"Grasshoper",option3:"Butterfly",option4:"Honey Bee",correctAnswer:"option3"},6:{text:"How many pairs of wings do bees have?",option1:"3",option2:"4",option3:"1",option4:"2",correctAnswer:"option4"},7:{text:"What do bees make?",option1:"Honey",option2:"Maple Syrup",option3:"Juice",option4:"Milk",correctAnswer:"option1"},8:{text:"How many days are in a Leap year?",option1:"365",option2:"366",option3:"367",option4:"368",correctAnswer:"option2"},9:{text:"Which is the fastest land animal?",option1:"Cheetah",option2:"Tiger",option3:"Leopard",option4:"Elephant",correctAnswer:"option1"},10:{text:"How many sides does a triangle have?",option1:"4",option2:"3",option3:"2",option4:"5",correctAnswer:"option2"},11:{text:"How many colors are in a rainbow?",option1:"5",option2:"6",option3:"7",option4:"8",correctAnswer:"option3"},12:{text:"Which is the Tallest animal in the world?",option1:"Elephant",option2:"Zebra",option3:"Ostrich",option4:"Giraffe",correctAnswer:"option4"},13:{text:"How many continents are there in the world?",option1:"Eight",option2:"Five",option3:"Seven",option4:"Eleven",correctAnswer:"option3"},14:{text:"Which planet is known as the Red Planet?",option1:"Earth",option2:"Venus",option3:"Mars",option4:"Jupiter",correctAnswer:"option3"},15:{text:"What is the capital city of France?",option1:"London",option2:"Paris",option3:"Rome",option4:"Berlin",correctAnswer:"option2"},16:{text:"What is the capital city of the United States?",option1:"Washington, D.C.",option2:"New York City",option3:"Los Angeles",option4:"Chicago",correctAnswer:"option1"},17:{text:"Which animal can fly without wings?",option1:"Bat",option2:"Penguin",option3:"Snake",option4:"Dragonfly",correctAnswer:"option4"},18:{text:"What is the largest planet in our solar system?",option1:"Earth",option2:"Mars",option3:"Jupiter",option4:"Saturn",correctAnswer:"option3"},19:{text:"What is the process by which plants make their own food?",option1:"Photosynthesis",option2:"Respiration",option3:"Transpiration",option4:"Pollination",correctAnswer:"option1"},20:{text:"What is the largest organ in the human body?",option1:"Brain",option2:"Heart",option3:"Skin",option4:"Liver",correctAnswer:"option3"},21:{text:"What is the name of the smallest planet in our solar system?",option1:"Venus",option2:"Mars",option3:"Mercury",option4:"Neptune",correctAnswer:"option3"},22:{text:"What is the hardest natural substance on Earth?",option1:"Gold",option2:"Diamond",option3:"Silver",option4:"Platinum",correctAnswer:"option2"},23:{text:'Which animal is known as the "king of the jungle"?',option1:"Elephant",option2:"Giraffe",option3:"Lion",option4:"Tiger",correctAnswer:"option3"},24:{text:"What is the tallest mountain in the world?",option1:"Mount Everest",option2:"K2",option3:"Kangchenjunga",option4:"Lhotse",correctAnswer:"option1"},25:{text:'Which planet is known as the "Blue Planet"?',option1:"Earth",option2:"Neptune",option3:"Uranus",option4:"Saturn",correctAnswer:"option1"},26:{text:"What is the largest ocean on Earth?",option1:"Atlantic Ocean",option2:"Indian Ocean",option3:"Arctic Ocean",option4:"Pacific Ocean",correctAnswer:"option4"},28:{text:"Which gas do plants absorb during photosynthesis?",option1:"Oxygen",option2:"Carbon Dioxide",option3:"Nitrogen",option4:"Hydrogen",correctAnswer:"option2"},29:{text:"How many bones are there in the adult human body?",option1:"206",option2:"215",option3:"220",option4:"198",correctAnswer:"option1"},30:{text:'Which animal is known as the "Ship of the Desert"?',option1:"Camel",option2:"Horse",option3:"Elephant",option4:"Giraffe",correctAnswer:"option1"},31:{text:"Which bird is known for its ability to mimic human speech?",option1:"Parrot",option2:"Eagle",option3:"Ostrich",option4:"Penguin",correctAnswer:"option1"},32:{text:'Which planet is known as the "Red Planet"?',option1:"Earth",option2:"Venus",option3:"Mars",option4:"Jupiter",correctAnswer:"option3"}};document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("aboutButton"),e=document.getElementById("closeButton"),i=document.getElementById("startButton"),r=document.getElementById("backgroundMusic"),s=document.getElementById("playAgain"),a=document.getElementById("quizModal"),p=document.getElementById("aboutModal"),c=document.getElementById("scoreImg"),l=document.getElementById("questionText"),d=document.getElementById("option1"),h=document.getElementById("option2"),u=document.getElementById("option3"),y=document.getElementById("option4"),m=document.getElementById("nextQuestion"),w=document.getElementById("submitQuiz"),g=document.getElementById("volumeUp"),E=document.getElementById("volumeDown"),x=document.querySelectorAll(".optionButtons button");let f,A,k,v=Object.keys(o).length;function b(){for(k=Math.floor(Math.random()*v);A.includes(k);)k=Math.floor(Math.random()*v);A.push(k),l.innerText=o[k].text,d.innerText=o[k].option1,h.innerText=o[k].option2,u.innerText=o[k].option3,y.innerText=o[k].option4}function B(t){const n=t.target;if(L(!0),n.id===o[k].correctAnswer)f+=1,n.classList.add("correct");else{n.classList.add("incorrect");let t=o[k].correctAnswer;document.getElementById(t).classList.add("correct")}5!==A.length&&(m.style.display="block"),5===A.length&&(m.style.display="none",w.style.display="block")}function L(t){x.forEach((o=>{o.disabled=t}))}function W(){A=[],f=0,t(a),x.forEach((t=>{t.style.display="block",t.classList.remove("correct","incorrect")})),b(),L(!1),s.style.display="none",c.style.display="none"}n.addEventListener("click",(()=>{t(p)})),e.addEventListener("click",(()=>{var t;null!==(t=p)&&t.classList.remove("active")})),i.addEventListener("click",(()=>{W(),r.play()})),x.forEach((t=>{t.addEventListener("click",B)})),m.addEventListener("click",(()=>{m.style.display="none",L(!1),x.forEach((t=>{t.classList.remove("correct","incorrect")})),b()})),g.addEventListener("click",(()=>{E.style.display="block",g.style.display="none",r.pause()})),E.addEventListener("click",(()=>{E.style.display="none",g.style.display="block",r.play()})),w.addEventListener("click",(()=>{l.innerText="",x.forEach((t=>{t.innerText="",t.style.display="none"})),l.innerText=`Your score is ${f} out of 5!`,w.style.display="none",s.style.display="block",0===f||1===f?c.src="./src/assests/low_score.png":2===f||3===f?c.src="./src/assests/mid_score.png":4!==f&&5!==f||(c.src="./src/assests/full_score.png"),c.style.display="block",c.classList.add("movingImage")})),s.addEventListener("click",(()=>{W()}))}))}()}();
//# sourceMappingURL=main.js.map