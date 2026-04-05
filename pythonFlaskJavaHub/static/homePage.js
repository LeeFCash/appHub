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
}

getData();
