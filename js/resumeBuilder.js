//$("#main").append("Gerson Colorado");
//var firstName = "Gerson";
//var name = "Gerson Uriel Colorado Cifuentes";
//var age = 20 ;
//var role = "Chemical Engineering Student";
//var skills =["Thermodymamic Models","Heat Exchager Design and Rating",
//	"Data Analysis", "Data Visualization", "R-Language", "Matlab","Scilab",
//	"Tableau", "Excel Macros", "Descriptive Statistics"];
//console.log(firstName);
//var awesomeThoughts = "I'm Gerson and I'm awesome";
//console.log(awesomeThoughts);
//
////<!-- An Example about changing text in a string variable -->
//
//var email = "zurjak88@hotmail.com";
//var newEmail = email.replace("hotmail", "gmail");
//
//var funThoughts = awesomeThoughts.replace("awesome","fun");
////$("#main").append(funThoughts);
//
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//
// Arrays in Javascript
//$("#main").append(skills.length);

var bio ={
	"name" : "Gerson U Colorado Cifuentes",
	"role" : "Chemical Engineering Student",
	"contact" : {
		"Phone": "3204826937",
		"github" : "zurjak88",
		"twitter" : "@GersonColoradoC",
		"email_1":"zurjak88@gmail.com",
		"email_2":"gucoloradoc@unal.edu.co",
		"location" : "Mosquera, Cund."
	},
	"bio_picture" : "/images/profile_pic.jpg",
	"welcome_message" : "Estudiante de Ingeniería Química, Universidad Nacional de Colombia. Rugbier.",
	"age" : 20,
	"skills" : ["Thermodymamic Models","Heat Exchager Design and Rating",
	"Data Analysis", "Data Visualization", "R-Language", "Matlab","Scilab",
	"Tableau", "Excel Macros", "Descriptive Statistics"]
};

var work = {
	"jobs" : [
		{
			"position" : "Research Assistant",
			"employer" : "Universidad Nacional",
			"years" : 1,
			"city" : "Bogotá, Colombia",
			"business" : "Academic"
		}
	]
}

var education = {
	"institutions" : [
		{
			"name" : "Universidad Nacional de Colombia",
			"mayor" : "BA",
			"title" : "Chemical Engineer",
			"city" : "Bogotá",
			"school" : "Engineering School, Chemical Engineering Department",
			"years" : "3",
			"graduationYear" : "Currently"
		},
		{
			"name" : "Instituto A&M ICAM",
			"mayor" : "Technical Degree",
			"title" : "Networks and computers maintenance",
			"city" : "Bogotá",
			"school" : "Engineering School, Chemical Engineering Department",
			"years" : "1",
			"graduationYear" : "2009"
		}
	],
	"shortCourses" : [
		{
			"name" : "Introduction to Stochastical Optimizaton",
			"school" : "Universidad Nacional de Colombia",
			"setting" : "Novena Cátedra Internacional de Ingeniería",
			"year" : 2015
		},
		{
			"name" : "Introduction to Data Science and Data Visualization",
			"school" : "Universidad Nacional de Colombia",
			"setting" : "Novena Cátedra Internacional de Ingeniería",
			"year" : 2016
		}
	],
	"onlineCourses" : [
		{
			"name" : "Introduction to programming in Python",
			"school" : "Udaciy",
			"URL" : "https://classroom.udacity.com/courses/ud036/",
			"themes" : ["Object Oriented Programming","Python Basic Programming"]
		},
		{
			"name" : "Javascript Syntax",
			"school" : "Udaciy",
			"URL" : "https://classroom.udacity.com/courses/ud804/l",
			"themes" : ["Javascript syntaxis"]
		},
	]
}


$("#main").append(work.jobs.position);
