/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
	name : "Gundeep Singh Kalra",
	role : "Machine Learning Scientist",
	contacts : {
		mobile : "+91 9816927358",
		email :"gundeepgunnu@gmail.com",
		location : "Saharanpur,India",
		github : "Kalra-Gunnu"
	},
	welcomeMessage: "Welcome to my Bio-Data",
	skills : ["Awesome","Machine Learning","Web Development"],
	biopic : "images/myPhoto.jpg"
};

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var f_photo = HTMLbioPic.replace("%data%", bio.biopic);
	var f_email = HTMLemail.replace("%data%", "<a class=\"contacts-link\" href=\"mailto:" + bio.contacts.email + "\">" + bio.contacts.email + "</a>");
	var f_location = HTMLlocation.replace("%data%", bio.contacts.location);
	var f_github = HTMLgithub.replace("%data%" , bio.contacts.github);
	var f_mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var f_welcome_msg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedContacts = f_mobile + f_email + f_github + f_location;
	// Display stuff please
	$("#header").append(formattedName);
	$("#header").append(formattedRole);
	$("#header").append(f_photo);
	$("#header").append(f_welcome_msg);
	HTMLContacts = '<dl id="topContacts"></dl>';
	HTMLContacts = '<dl id="footerContacts"></dl>';
	$("#header","#footerContacts").append(HTMLContacts);
	$("#header","#footerContacts").append(formattedContacts);
	// skills
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		skills.forEach (function(skill)) {
			if (bio.skills.hasOwnProperty(skill)) {
				formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

var education = {
	schools :[
		{
			name : "Rainbow School",
			location : "Saharanpur,UP,India",
			degree : "High-School",
			dates : "2011",
			url : "http://example.com"
		},
		{
			name : "Rainbow School",
			location : "Saharanpur,UP,India",
			degree : "Matriculation",
			majors :["Physics","Chemistry","Mathematics"],
			dates : "2013",
			url : "http://example.com"
		},
		{
			name : "Jaypee University of Information Technology(JUIT)",
			location : "Waknaghat(Solan),HP,India",
			degree : "B.Tech",
			majors :["Electronics and Communication Engineering"],
			dates : "2017",
			url : "http://example.com"
		},
	],
	onlineCourses : [
		{
			title : "Front End Web Development",
			school : "Udacity",
			dates : "2017",
			url : "http://www.udacity.com/nanodegrees/nd001"
		},
		{
			title : "Machine Learning",
			school : "Coursera",
			dates : "2017",
			url : "http://www.coursera.com/courses/ml" 
		}
	]
};

education.display = function () {
	if (education.schools.length > 0 || education.onlineCourses.length > 0) {
		// start the HTML
		education.schools.forEach (function(edu)) {
			if (education.schools.hasOwnProperty(edu)) {
				$("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[edu].name));
				$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[edu].dates));
				$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[edu].city));
				$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[edu].degree));
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[edu].majors));
			}
		}
		// start the HTML
		$(".education-entry:last").append(HTMLonlineClasses);
		education.onlineCourses.forEach (function(edu)) {
			if (education.onlineCourses.hasOwnProperty(edu)) {
				formattedHtml = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
				$(".education-entry:last").append(formattedHtml);
				$(".education-entry:last").append(HTMLonlineSchool.replace('%data%', education.onlineCourses[edu].school));
				$(".education-entry:last").append(HTMLonlineDates.replace('%data%', education.onlineCourses[edu].dates));
			}
		}
	}
};

var work = {
	jobs : [
		{
			employer : "Infosys",
			title : "Junior Engineer",
			location : "Mysore,India",
			dates : "Janaury'18-Future",
			description : "Junior Engineer responsible for small-small problems."
		},
		{
			employer : "JYC",
			title : "Head MNP",
			location : "Shimla,India",
			dates : "Aug'15-Jun'16",
			description : "Responsible for the working of Media and Publicity Committee."
		}
	]
};

work.display=function(){
	work.jobs.forEach(function(job)) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		
	}
};

var projects = {
	projects : [
		{
			title : 'Sound Meter',
			dates : "2015",
			description : "With the help of a microcontroller we find out what is the intensity of sound and what all frequencies are present in the sound.",
			images : "https://lh5.ggpht.com/J5bJ4DNidDKOjz-Tm_WQKBtBQULZRAxvoZbL4KA00e9xmTyoGDH-G1VFSpVpMLC6Frw=w300"
		},
		{
			title : "Hand Written Character Recognition",
			dates : "2017",
			description : "With the help of Artificial Neural Networks and Machine Learning, digitalise the hand written lines and words.",
			images : "https://www.wolfram.com/mathematica/new-in-10/enhanced-image-processing/HTMLImages.en/handwritten-digits-classification/smallthumb_10.gif"
		}
	]
};

projects.display =function() {
	projects.projects.forEach(function(proj)) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
		$(".project-entry:last").append(formattedDescription);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
		$(".project-entry:last").append(formattedImage);
	}
};

/*$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});*/

function inName(){
	var nameArray = bio.name.split(" ");
	console.log(nameArray);
	nameArray[1] = nameArray[1].toUpperCase();
	nameArray[0] = nameArray[0].slice(0,1).toUpperCase()+nameArray[0].slice(1).toLowerCase();
	nameArray[2] = nameArray[2].toUpperCase();
	return(nameArray.join(" "));
}

$("#main").append(internationalizeButton);

var menu = {
	menu : [
		{ 
			"title": "work",
			"link": "#workExperience"
		},
		{
			"title": "education",
			"link": "#education"
		},
		{
			"title": "projects",
			"link": "#projects"
		},
		{
			"title": "map",
			"link": "#mapDiv"
		},
		{
			"title": "let's talk",
			"link": "mailto:gundeepgunnu@gmail.com"
		}
	]
};

menu.display = function () {
    'use strict';
    var i=0, entry="", toptitle="", y=0;
    $("nav").append("<ul id=\"navmenu\">");
    //alert(menu.menu.length);
    for (i=0; i<menu.menu.length; i=i+1) {
       //alert(menu.menu[i].type);
       entry = '<li><a class="ref" href="'+menu.menu[i].link+'">'+menu.menu[i].title+'</a></li>';
          // console.log(entry);
          $("#navmenu:last").append(entry);
    }
};

menu.display();
bio.display();
education.display();
projects.display();
work.display();
$("#mapDiv").append(googleMap);
