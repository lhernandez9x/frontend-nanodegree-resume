// Bio Section

var bio = {
    "name": "Lorenzo Hernandez Jr",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "915-319-1045",
        "email": "lorenzo.hernandezjr@gmail.com",
        "github": "lhernandez9x",
        "twitter": "@lhernandez9x",
        "location": "El Paso, TX"
    },
    "welcomeMessage": "Hello, thanks for checking out my online resume. I have many skills that I have attained in different career types. There is one thing that always interested me though; <b>Web Development</b>. I am currently going through Udacity's Front-End Developer Nanodegree, hope to hear from you.",
    "skills": ["HTML", "CSS", "Javascript", "Photoshop", "UX/UI Design", "Creativity", "and Awesomeness!"],
    "biopic": "images/me.jpg",
    "display": function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
        $("#header-info").prepend(formattedWelcomeMsg, formattedBioPic, HTMLskillsStart);
    }
};

// Skills Chart library and documentation "www.chartsjs.org"

var doughnutData = [{
    value: 90,
    color: "#16a085",
    highlight: "#1abc9c",
    label: "HTML"
}, {
    value: 80,
    color: "#27ae60",
    highlight: "#2ecc71",
    label: "CSS"
}, {
    value: 45,
    color: "#f39c12",
    highlight: "#f1c40f",
    label: "Javascript"
}, {
    value: 75,
    color: "#d35400",
    highlight: "#e67e22",
    label: "Adobe Creative Suite"
}, {
    value: 60,
    color: "#c0392b",
    highlight: "#e74c3c",
    label: "UX/UI Design"
}, {
    value: 85,
    color: "#8e44ad",
    highlight: "#9b59b6",
    label: "Creativity"
}, {
    value: 110,
    color: "#2980b9",
    highlight: "#3498db",
    label: "Awesomeness"
}];

window.onload = function() {
    var ctx = document.getElementById("chartArea").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
        responsive: true,
        animationSteps: 200
    })
};

// Header customization

$("#header hr").remove();
$("#name").addClass("g4");
$("#name").after("<br>");
$("#header").children("span").addClass("role, g4");


// Work Section

var work = {
    "jobs": [{
        "employer": "Perry's Oilfield Service",
        "title": "Pipeline Operator",
        "location": "Carlsbad, NM",
        "dates": "2015 - 2016",
        "description": "Performed operation and maintenance activities on field compressor stations and natural gas pipelines: started, stopped, loaded/unloaded, maintained good housekeeping of stations, monitored and recorded pressures, temperatures, volumes, and fluid levels. Troubleshot compressosr and pipeline systems. Monitored tank levels and called for fluid extraction when needed"
    }, {
        "employer": "Standard Energy Services",
        "title": "Vacuum Truck operator",
        "location": "Carlsbad, NM",
        "dates": "2014 - 2015",
        "description": "Completed a pre-trip and post-trip inspection on assigned vacuum truck and tanker. Drove CMV to customer's location and loaded production water (pw) into tank. Drove pw to proper disposal site. Delivered fresh water and brine water to drilling and pulling unit locations. Performed clean up duties on spills from oil, water, and/or chemicals"
    }, {
        "employer": "ACS / Xerox",
        "title": "Training Specialist",
        "location": "El Paso, TX",
        "dates": "2008 - 2014",
        "description": "Trained new agents on company policies and procedures. Trained agents to use computer system and proprietary software used in technical support for cell phone industry. Trained agents on customer service and phone etiquette. Kept record of agent test scores and kept attendance and employee files up to date"
    }, {
        "employer": "Technology Management Solutions",
        "title": "Sales Representative",
        "location": "El Paso, TX",
        "dates": "2004 - 2006",
        "description": "Serviced existing accounts, obtained orders, and established new accounts by planning and organizing daily work schedule to call on existing or potential sales outlets and other trade factors. Presented solutions for customers; based on fact finding needs analysis conducted face-to-face with customer. Evaluated support staff as clients system was being implemented to make sure that customer recieved best service."
    }, {
        "employer": "Colonial Supplemental Insurance",
        "title": "District Development Manager",
        "location": "El Paso, TX",
        "dates": "2001 - 2004",
        "description": "Developed base for long-term sources of clients by using referrals to compile lists of prospects. Approached potential clients, made presentations to groups at company-sponsored gatherings. Determined clients' particular needs and financial situations by scheduling fact-finding appointments; determined extent of present coverage; ascertained long-term goals. Hired and trained new agents in the capacity role of Insurance Agents"
    }],
    "display": function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formattedEmpLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedEmpDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedEmpDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedEmployerTitle, formattedEmpLocation, formattedEmpDate, formattedEmpDescription);
        }
    }
};

//Education Section

var education = {
    "schools": [{
        "name": "The Art Institute of Pittsburgh - Online Division",
        "location": "Online - El Paso, TX",
        "degree": "Bachelors of Science",
        "majors": ["Web Design and Interactive Media"],
        "dates": "2010 - 2012"
    }],
    "onlineCourses": [{
        "title": "UX Fundamentals",
        "school": "Aquent Gymnasium",
        "dates": "2016",
        "url": "https://accredible.com/10130430"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804-nd"
    }, {
        "title": "Intro to HTML",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804-nd"
    }, {
        "title": "Javascript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804-nd"
    }],
    "display": function() {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolNameDegree = formattedSchoolName + " " + formattedSchoolDegree;
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

            $(".education-entry:last").append(formattedSchoolNameDegree, formattedSchoolLocation, formattedSchoolDates, formattedSchoolMajor);
            $(".education-entry:last").append(HTMLonlineClasses);
            $(".education-entry").children("h3").addClass("onlineTitle");
        }
        for (course in education.onlineCourses) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + " " + formattedOnlineSchool;
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
    "projects": [{
            "title": "Project Title",
            "dates": "2016",
            "description": "This is to describe the Project.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }, {
            "title": "Project Title",
            "dates": "2016",
            "description": "This is to describe the Project.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }, {
            "title": "Project Title",
            "dates": "2016",
            "description": "This is to describe the Project.",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }

    ],
    "display": function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

            $(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDesc);

            if (projects.projects[project].images.length > 0) {
                for (image in projects.projects[project].images) {
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

    logClicks(x, y)
});
// Display  Map

$("#mapDiv").append(googleMap);