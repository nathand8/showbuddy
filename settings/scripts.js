$(document).ready(function() {
	dao_setup()
	let user = dao_getTestUser(function (data) {
		console.log(data)
	})
	let userInfo = {
		event_preferences: []
	}
	let tagId = 0
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
		let curTag = tagId
		let tag = "<div id='tag" + curTag + "' class='tag'>" + contents + "<span id='remove" + curTag + "' class='exit'>&times;</span></div>"
		$("#genres").append(tag)
		userInfo.event_preferences.push(contents)
		$("#addGenre").val('')
		$("#remove" + curTag).click(function() {
			let index = userInfo.event_preferences.indexOf(contents)
			userInfo.event_preferences.splice(index, 1)
			console.log(userInfo)
			$("#tag" + curTag).remove()
		})
		tagId++
	})
	$("#saveSettings").click(function() {
		let file = document.querySelector('input[type=file]').files[0]
		let reader = new FileReader()
		reader.addEventListener("load", function() {
			userInfo.picture = reader.result.split(",")[1]
		}, false)
		if (file) {
			reader.readAsDataURL(file)
		}
		userInfo.screenname = $("#displayName").val()
		userInfo.age = $("#age").val()
		userInfo.gender = $("#gender").val()
		userInfo.description = $("#bio").val()
		userInfo.buddy_age_min = $("#minAge").val()
		userInfo.buddy_age_max = $("#maxAge").val()
		userInfo.buddy_gender = $("#buddygender").val()
		userInfo.individual = $("#individuals").is(':checked')
		userInfo.group = $("#groups").is(':checked')
		console.log(userInfo)
	})
})
