var collage = $("<iframe />").attr("src", "Works/ImageCollage/index.html");
var links = $("<iframe />").attr("src", "Works/Links/index.html");
var style = $("<iframe />").attr("src", "Works/Style/index.html");
var connotations = $("<iframe />").attr("src", "Works/Connotations/index.html");
var business = $("<iframe />").attr("src", "Works/BusinessProfile/index.html");
var security = $("<iframe />").attr("src", "Works/ComputerSecurity/index.html");
var examplejs = $("<iframe />").attr("src", "Works/JavascriptExamples/index.html");
var jslab1 = $("<iframe />").attr("src", "Works/JavascriptLab1/index.html");
var jschallenge = $("<iframe />").attr("src", "Works/JavascriptChallenge/index.html");
var queryintro = $("<iframe />").attr("src", "Works/jQueryIntro/index.html");
var designchallenge = $("<iframe />").attr("src", "Works/DesignChallenge/index.html");
var swap = $("<iframe />").attr("src", "Works/JavascriptSwap/index.html");
var preload = $("<iframe />").attr("src", "Works/jQueryPreload/index.html");
var plugin = $("<iframe />").attr("src", "Works/PlugIns/index.html");
var glossary = $("<iframe />").attr("src", "Works/Glossary/index.html");

$(function(){
	$('#tabs').tabs();
	$('#dialog').dialog({
		autoOpen: false,
		modal: true,
		width: 800,
		height: 600
	});
	$("a[id]").click(function(){
		$("iframe").remove();
		$("div[role]").remove();
		$("div.ui-widget-overlay").remove();
		if ($(this).attr("id") == "dialog_link-1") {
			$("#dialog").append(collage);
			$("#dialog").attr("title", "Image Collage");
			$(".beforeme").attr("href", "Works/ImageCollage/index.html");
		} else if ($(this).attr("id") == "dialog_link-2") {
			$("#dialog").append(links);
			$("#dialog").attr("title", "HTML Links");
			$(".beforeme").attr("href", "Works/Links/index.html");
		} else if ($(this).attr("id") == "dialog_link-3") {
			$("#dialog").append(style);
			$("#dialog").attr("title", "CSS Styling");
			$(".beforeme").attr("href", "Works/Style/index.html");
		} else if ($(this).attr("id") == "dialog_link-4") {
			$("#dialog").append(connotations);
			$("#dialog").attr("title", "Connotations");
			$(".beforeme").attr("href", "Works/Connotations/index.html");
		} else if ($(this).attr("id") == "dialog_link-5") {
			$("#dialog").append(business);
			$("#dialog").attr("title", "Business Profile");
			$(".beforeme").attr("href", "Works/BusinessProfile/index.html");
		} else if ($(this).attr("id") == "dialog_link-6") {
			$("#dialog").append(security);
			$("#dialog").attr("title", "Computer Security (Spear Phishing)");
			$(".beforeme").attr("href", "Works/ComputerSecurity/index.html");
		} else if ($(this).attr("id") == "dialog_link-7") {
			$("#dialog").append(examplejs);
			$("#dialog").attr("title", "Javascript Example");
			$(".beforeme").attr("href", "Works/JavascriptExamples/index.html");
		} else if ($(this).attr("id") == "dialog_link-8") {
			$("#dialog").append(jslab1);
			$("#dialog").attr("title", "1st Javascript Lab");
			$(".beforeme").attr("href", "Works/JavascriptLab1/index.html");
		} else if ($(this).attr("id") == "dialog_link-9") {
			$("#dialog").append(jschallenge);
			$("#dialog").attr("title", "1st Javascript Challenge");
			$(".beforeme").attr("href", "Works/JavascriptChallenge/index.html");
		} else if ($(this).attr("id") == "dialog_link-10") {
			$("#dialog").append(queryintro);
			$("#dialog").attr("title", "Introduction to jQuery");
			$(".beforeme").attr("href", "Works/jQueryIntro/index.html");
		} else if ($(this).attr("id") == "dialog_link-11") {
			$("#dialog").append(designchallenge);
			$("#dialog").attr("title", "Design Challenge (using jQuery)");
			$(".beforeme").attr("href", "Works/DesignChallenge/index.html");
		} else if ($(this).attr("id") == "dialog_link-12") {
			$("#dialog").append(swap);
			$("#dialog").attr("title", "Image swap (using Javascript)");
			$(".beforeme").attr("href", "Works/JavascriptSwap/index.html");
		} else if ($(this).attr("id") == "dialog_link-13") {
			$("#dialog").append(preload);
			$("#dialog").attr("title", "Image Pre-loading (using jQuery)");
			$(".beforeme").attr("href", "Works/jQueryPreload/index.html");
		} else if ($(this).attr("id") == "dialog_link-14") {
			$("#dialog").append(plugin);
			$("#dialog").attr("title", "GChart jQuery Plugin Demo");
			$(".beforeme").attr("href", "Works/PlugIns/index.html");
		} else if ($(this).attr("id") == "dialog_link-15") {
			$("#dialog").append(glossary);
			$("#dialog").attr("title", "Glossary of Words Related to Web Application");
			$(".beforeme").attr("href", "Works/Glossary/index.html");
		}
		$('#dialog').dialog({
			autoOpen: false,
			modal: true,
			width: 800,
			height: 600
		});
		$('#dialog').dialog('open');
		return false;
	});
});