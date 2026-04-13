async function useData(){
	var useEmail = document.getElementById('email');
	var usePhoneNumber = document.getElementById('phoneNumber');
	var useName = document.getElementById('name');
	var useEducation = document.getElementById('education');
	var useDBTSNPEAward = document.getElementById('dBTSNPEAward');
	var useSelfDisciplineReward = document.getElementById('selfDisciplineReward');
	var useLinkGithub = document.getElementById('linkGithub');
	var useLinkYoutube = document.getElementById('linkYoutube');
	var useLinkResume = document.getElementById('linkResume');

	useEmail.innerHTML = 'email => ' + email;
	usePhoneNumber.innerHTML = 'phoneNumber => ' + phoneNumber;
	useName.innerHTML = 'name => ' + name;
	useEducation.innerHTML = 'education => ' + education;
	useDBTSNPEAward.innerHTML = 'dBTSNPEAward => ' + dBTSNPEAward;
	useSelfDisciplineReward.innerHTML = 'selfDisciplineReward => ' + selfDisciplineReward;
	useLinkGithub.innerHTML = 'linkGithub => ' + linkGithub;
	useLinkYoutube.innerHTML = 'linkYoutube => ' + linkYoutube;
	useLinkResume.innerHTML = 'linkResume => ' + linkResume;
}

async function getData() {
	var response = await fetch("http://localhost:8080/api/digital-portfolio/contactMe");
	var data = await response.json();

	var email = data.email;
	var phoneNumber = data.phoneNumber;

	response = await fetch("http://localhost:8080/api/digital-portfolio/aboutMeTab");
	data = await response.json();
	var name = data.name;
	var education = data.education;
	var dBTSNPEAward = data.dBTSNPEAward;
	var selfDisciplineReward = data.selfDisciplineReward;

	response = await fetch("http://localhost:8080/api/digital-portfolio/skills");
	data = await response.json();
	var linkGithub = data.linkGithub;
	var linkYoutube = data.linkYoutube;
	var linkResume = data.linkResume;

	console.log(email + ", " + phoneNumber + ", " + name + ", " + education + ", " + dBTSNPEAward + ", " + selfDisciplineReward + ", " + linkGithub + ", " + linkYoutube + ", " + linkResume);
	useData();
}

getData();
