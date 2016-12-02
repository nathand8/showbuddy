$(document).ready(function() {
	dao_setup()
	let userInfo = {}
	let tagId = 0
	dao_getTestUser(function (data) {
		userInfo = data
		console.log(userInfo)
		$("#displayName").val(userInfo.screenname)
		$("#age").val(userInfo.age)
		$("#gender").val(userInfo.gender)
		$("#bio").val(userInfo.description)
		$("#minAge").val(userInfo.buddy_age_min)
		$("#maxAge").val(userInfo.buddy_age_max)
		$("#buddyGender").val(userInfo.buddy_gender)
		$("#individuals").prop("checked", userInfo.individual)
		$("#groups").prop("checked", userInfo.group)
		for (let i = 0; i < userInfo.event_preferences.length; i++) {
			console.log(userInfo.event_preferences[i])
			let curTag = tagId
			let tag = "<div id='tag" + curTag + "' class='tag'>" + userInfo.event_preferences[i] + "<button type='button' id='remove" + curTag + "'class='close exit'><span>&times;</span></button></div>"
			$("#genres").append(tag)
			$("#remove" + curTag).click(function() {
				let index = userInfo.event_preferences.indexOf(userInfo.event_preferences[i])
				userInfo.event_preferences.splice(index, 1)
				$("#tag" + curTag).remove()
			})
			tagId++
		}
	})
	$("#personalProfile").hide()
	$("#eventPreferences").hide()
	$("#buddyPreferences").hide()
	$(".dropdown-indicator").addClass("glyphicon glyphicon-chevron-right");
	$("#personalProfileTitle").click(function(ev) {
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-down');
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-right');
		$("#personalProfile").toggle()
	})
	$("#eventPreferencesTitle").click(function(ev) {
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-down');
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-right');
		$("#eventPreferences").toggle()
	})
	$("#buddyPreferencesTitle").click(function(ev) {
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-down');
        $(ev.target).find('.dropdown-indicator').toggleClass('glyphicon-chevron-right');
		$("#buddyPreferences").toggle()
	})
	$("#addGenreButton").click(function() {
		let contents = $("#addGenre").val()
		let curTag = tagId
		let tag = "<div id='tag" + curTag + "' class='tag'>" + contents + "<button type='button' id='remove" + curTag + "'class='close exit'><span>&times;</span></button></div>"
		$("#genres").append(tag)
		userInfo.event_preferences.push(contents)
		$("#addGenre").val('')
		$("#remove" + curTag).click(function() {
			let index = userInfo.event_preferences.indexOf(contents)
			userInfo.event_preferences.splice(index, 1)
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
		userInfo.buddy_gender = $("#buddyGender").val()
		userInfo.individual = $("#individuals").is(':checked')
		userInfo.group = $("#groups").is(':checked')
		console.log(userInfo)
		let updateInfo = {}
		updateInfo['/users/' + userInfo.username] = userInfo
		firebase.database().ref().update(updateInfo)
		//dao_setUserByUsername(userInfo.username, userInfo, function () {})
	})
})
