var bSkill = document.getElementById('sk');
var bExper = document.getElementById('ex');
var bEdu = document.getElementById('edU');
var focus = document.getElementById('focus');

var sArea = document.getElementById('ss');
var exArea = document.getElementById('exx');
var edArea = document.getElementById('eduu');
var focusArea = document.getElementById('expert');


bSkill.addEventListener('click',()=>{
	exArea.style.display = 'none';
	edArea.style.display = 'none';
	focusArea.style.display = 'none';
	sArea.style.display = 'block';

})
bExper.addEventListener('click',()=>{
	sArea.style.display = 'none';
	edArea.style.display = 'none';
	focusArea.style.display = 'none';
	exArea.style.display = 'block';

})
bEdu.addEventListener('click',()=>{
	sArea.style.display = 'none';
	exArea.style.display = 'none';
	focusArea.style.display = 'none';
	edArea.style.display = 'block';


})
focus.addEventListener('click',()=>{
	sArea.style.display = 'none';
	exArea.style.display = 'none';
	edArea.style.display = 'none';
	focusArea.style.display = 'block';


})












