$(function() {
      $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').parent().addClass('active');
      getBuddiesVisited(function(visited) {
            if(visited) {
                  $("#buddybadge").hide()
            }
      })
      $("#buddypanel").click(function() {
            setBuddiesVisited(true)
            $("#buddybadge").hide()
      })
});
