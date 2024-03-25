function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberText = member.options[member.selectedIndex].text;
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsText = document.getElementById("memberSkillsText");
  memberSkills.value = memberValue;
  memberSkillsText.value = memberText;
}
