$(document).ready(function() {
	$("#personalProfile").hide()
	$("#eventPreferences").hide()
	$("#buddyPreferences").hide()
	$("#personalProfileTitle").click(function() {
		$("#personalProfile").toggle()
	})
	$("#eventPreferencesTitle").click(function() {
		$("#eventPreferences").toggle()
	})
	$("#buddyPreferencesTitle").click(function() {
		$("#buddyPreferences").toggle()
	})
	$("#addGenreButton").click(function() {
		let contents = $("#addGenre").val()
		let tag = "<div class='tag'>" + contents + "<span class='exit'>x</span></div>"
		$("#genres").append(tag)
		$("#addGenre").val('')
	})
})
