var bSkill = document.getElementById('sk');
var bExper = document.getElementById('ex');
var bEdu = document.getElementById('edU');

var sArea = document.getElementById('ss');
var exArea = document.getElementById('exx');
var edArea = document.getElementById('eduu');


bSkill.addEventListener('click',()=>{
	sArea.style.display = 'block';
	exArea.style.display = 'none';
	edArea.style.display = 'none';


})
bExper.addEventListener('click',()=>{
	sArea.style.display = 'none';
	exArea.style.display = 'block';
	edArea.style.display = 'none';


})
bEdu.addEventListener('click',()=>{
	sArea.style.display = 'none';
	exArea.style.display = 'none';
	edArea.style.display = 'block';


})











