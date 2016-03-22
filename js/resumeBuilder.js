// Bio Section

var bio = {
	"name" : "Lorenzo Hernandez Jr",
	"role" : "Front-End Developer",
	"contacts" : {
		"mobile" : "915-319-1045",
		"email" : "lorenzo.hernandezjr@gmail.com",
		"github" : "lhernandez9x",
		"twitter" : "@lhernandez9x",
		"location" : "El Paso, TX"
	},
	"welcomeMessage" : "Hello, thanks for checking out my online resume.",
	"skills" : ["HTML", "CSS", "Javascript", "jQuery", "Responsive Design", "Photoshop", "and Awesomeness!"],
	"bioPic" : "images/me.jpg",
	"display" : function(){
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);

		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
			$("#skills").append(formattedSkill);
			
			formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
			$("#skills").append(formattedSkill);
};
}
};
// Work Section

var work = {
	"jobs" : [
		{
			"workEmployer" : "Perry's Oilfield Service",
			"workTitle" : "Pipeline Operator",
			"workLocation" : "Carlsbad, NM",
			"workDates" : "2015 - 2016",
			"workDescription" : "Performed operation and maintenance activities on field compressor stations and natural gas pipelines: started, stopped, loaded/unloaded, maintained good housekeeping of stations, monitored and recorded pressures, temperatures, volumes, and fluid levels. Troubleshot compressosr and pipeline systems. Monitored tank levels and called for fluid extraction when needed"
		},
		{
			"workEmployer" : "Standard Energy Services",
			"workTitle" : "Vacuum Truck operator",
			"workLocation" : "Carlsbad, NM",
			"workDates" : "2014 - 2015",
			"workDescription" : "Completed a pre-trip and post-trip inspection on assigned vacuum truck and tanker. Drove CMV to customer's location and loaded production water (pw) into tank. Drove pw to proper disposal site. Delivered fresh water and brine water to drilling and pulling unit locations. Performed clean up duties on spills from oil, water, and/or chemicals"
		},
		{
			"workEmployer" : "ACS / Xerox",
			"workTitle" : "Training Specialist",
			"workLocation" : "El Paso, TX",
			"workDates" : "2008 - 2014",
			"workDescription" : "Trained new agents on company policies and procedures. Trained agents to use computer system and proprietary software used in technical support for cell phone industry. Trained agents on customer service and phone etiquette. Kept record of agent test scores and kept attendance and employee files up to date"
		},
		{
			"workEmployer" : "Technology Management Solutions",
			"workTitle" : "Sales Representative",
			"workLocation" : "El Paso, TX",
			"workDates" : "2004 - 2006",
			"workDescription" : "Serviced existing accounts, obtained orders, and established new accounts by planning and organizing daily work schedule to call on existing or potential sales outlets and other trade factors. Presented solutions for customers; based on fact finding needs analysis conducted face-to-face with customer. Evaluated support staff as clients system was being implemented to make sure that customer recieved best service."
		},
		{
			"workEmployer" : "Colonial Supplemental Insurance",
			"workTitle" : "District Development Manager",
			"workLocation" : "El Paso, TX",
			"workDates" : "2001 - 2004",
			"workDescription" : "Developed base for long-term sources of clients by using referrals to compile lists of prospects. Approached potential clients, made presentations to groups at company-sponsored gatherings. Determined clients' particular needs and financial situations by scheduling fact-finding appointments; determined extent of present coverage; ascertained long-term goals. Hired and trained new agents in the capacity role of Insurance Agents"
		}
	],
	"display" : function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].workEmployer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].workTitle);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedEmpLocation = HTMLworkLocation.replace("%data%", work.jobs[job].workLocation);
			$(".work-entry:last").append(formattedEmpLocation);

			var formattedEmpDate = HTMLworkDates.replace("%data%", work.jobs[job].workDates);
			$(".work-entry:last").append(formattedEmpDate);

			var formattedEmpDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
			$(".work-entry:last").append(formattedEmpDescription);
		}
	}
};

//Education Section

var education = {
	"schools" : [
		{
			"name" : "The Art Institute of Pittsburgh - Online Division",
			"location" : "Online - El Paso, TX",
			"degree" : "Bachelors of Science",
			"major" : ["Web Design and Interactive Media"],
			"dates" : "2010 - 2012"
		}
	],
	"onlineCourses" : [
		{
			"title" : "UX Fundamentals",
			"school" : "Aquent Gymnasium",
			"dates" : "2016",
			"url" : "https://accredible.com/10130430"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804-nd"
		},
		{
			"title" : "Intro to HTML",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804-nd"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804-nd"
		}
	],
	"display" : function(){
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + " " + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		for(course in education.onlineCourses){
			$(".education-entry:last").append(HTMLonlineClasses);
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var formattedOnlineTitleSchool = formattedOnlineTitle +" " + formattedOnlineSchool;
			$(".education-entry:last").append(formattedOnlineTitleSchool);
			
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
			$(".education-entry:last").append(formattedOnlineDates);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedOnlineUrl);
		}
	}
};

//Projects Section

var projects = {
	"projects" : [
		{
			"title" : "Project Title",
			"dates" : "2016",
			"description": "This is to describe the Project.",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Project Title",
			"dates" : "2016",
			"description": "This is to describe the Project.",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title" : "Project Title",
			"dates" : "2016",
			"description": "This is to describe the Project.",
			"images" : ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
		}

	],
	"display" : function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedProjectDates);

			var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedProjectDesc);
			
			if (projects.projects[project].images.length > 0){
				for (image in projects.projects[project].images){
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
					};
				};
		};
	}
};

// Dispaly Sections
bio.display();
work.display();
education.display();
projects.display();


// Logging clicks

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	
	logClicks(x, y )
});

// internationalize Name Button

var inName = function(){
	var nameArray = bio.name.split(" ");
	var firstName = nameArray[0];
	var lastName = nameArray[1].toUpperCase();
	var suffix = nameArray[2].toUpperCase();
	var finalName = firstName + " " + lastName + " " + suffix;
	
	return finalName;
};

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
