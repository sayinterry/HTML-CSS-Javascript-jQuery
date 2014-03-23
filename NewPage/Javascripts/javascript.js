var collage = $("<iframe />").attr("src", "Works/ImageCollage/");
var links = $("<iframe />").attr("src", "Works/Links/");
var style = $("<iframe />").attr("src", "Works/Style/");
var connotations = $("<iframe />").attr("src", "Works/Connotations/");
var business = $("<iframe />").attr("src", "Works/BusinessProfile/");
var security = $("<iframe />").attr("src", "Works/ComputerSecurity/");
var examplejs = $("<iframe />").attr("src", "Works/JavascriptExamples/");
var jslab1 = $("<iframe />").attr("src", "Works/JavascriptLab1/");
var jschallenge = $("<iframe />").attr("src", "Works/JavascriptChallenge/");
var queryintro = $("<iframe />").attr("src", "Works/jQueryIntro/");
var designchallenge = $("<iframe />").attr("src", "Works/DesignChallenge/");
var swap = $("<iframe />").attr("src", "Works/JavascriptSwap/");
var preload = $("<iframe />").attr("src", "Works/jQueryPreload/");
var plugin = $("<iframe />").attr("src", "Works/PlugIns/");
var glossary = $("<iframe />").attr("src", "Works/Glossary/");

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
			$(".beforeme").attr("href", "Works/ImageCollage/");
		} else if ($(this).attr("id") == "dialog_link-2") {
			$("#dialog").append(links);
			$("#dialog").attr("title", "HTML Links");
			$(".beforeme").attr("href", "Works/Links/");
		} else if ($(this).attr("id") == "dialog_link-3") {
			$("#dialog").append(style);
			$("#dialog").attr("title", "CSS Styling");
			$(".beforeme").attr("href", "Works/Style/");
		} else if ($(this).attr("id") == "dialog_link-4") {
			$("#dialog").append(connotations);
			$("#dialog").attr("title", "Connotations");
			$(".beforeme").attr("href", "Works/Connotations/");
		} else if ($(this).attr("id") == "dialog_link-5") {
			$("#dialog").append(business);
			$("#dialog").attr("title", "Business Profile");
			$(".beforeme").attr("href", "Works/BusinessProfile/");
		} else if ($(this).attr("id") == "dialog_link-6") {
			$("#dialog").append(security);
			$("#dialog").attr("title", "Computer Security (Spear Phishing)");
			$(".beforeme").attr("href", "Works/ComputerSecurity/");
		} else if ($(this).attr("id") == "dialog_link-7") {
			$("#dialog").append(examplejs);
			$("#dialog").attr("title", "Javascript Example");
			$(".beforeme").attr("href", "Works/JavascriptExamples/");
		} else if ($(this).attr("id") == "dialog_link-8") {
			$("#dialog").append(jslab1);
			$("#dialog").attr("title", "1st Javascript Lab");
			$(".beforeme").attr("href", "Works/JavascriptLab1/");
		} else if ($(this).attr("id") == "dialog_link-9") {
			$("#dialog").append(jschallenge);
			$("#dialog").attr("title", "1st Javascript Challenge");
			$(".beforeme").attr("href", "Works/JavascriptChallenge/");
		} else if ($(this).attr("id") == "dialog_link-10") {
			$("#dialog").append(queryintro);
			$("#dialog").attr("title", "Introduction to jQuery");
			$(".beforeme").attr("href", "Works/jQueryIntro/");
		} else if ($(this).attr("id") == "dialog_link-11") {
			$("#dialog").append(designchallenge);
			$("#dialog").attr("title", "Design Challenge (using jQuery)");
			$(".beforeme").attr("href", "Works/DesignChallenge/");
		} else if ($(this).attr("id") == "dialog_link-12") {
			$("#dialog").append(swap);
			$("#dialog").attr("title", "Image swap (using Javascript)");
			$(".beforeme").attr("href", "Works/JavascriptSwap/");
		} else if ($(this).attr("id") == "dialog_link-13") {
			$("#dialog").append(preload);
			$("#dialog").attr("title", "Image Pre-loading (using jQuery)");
			$(".beforeme").attr("href", "Works/jQueryPreload/");
		} else if ($(this).attr("id") == "dialog_link-14") {
			$("#dialog").append(plugin);
			$("#dialog").attr("title", "GChart jQuery Plugin Demo");
			$(".beforeme").attr("href", "Works/PlugIns/");
		} else if ($(this).attr("id") == "dialog_link-15") {
			$("#dialog").append(glossary);
			$("#dialog").attr("title", "Glossary of Words Related to Web Application");
			$(".beforeme").attr("href", "Works/Glossary/");
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