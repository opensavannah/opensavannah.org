(function () {
	
	var cfapi = 'http://api.codeforamerica.org/api/organizations/Open-Savannah/projects';

	var displayProjects = function (data) {

		data.objects.forEach(function (project) {
			
			project.lastUpdateDaysFromNow = moment(project.last_updated).fromNow();
		});
		
		var template = Handlebars.compile($('#project-template').html());
		$('#projects').append(template({ projects: data.objects }));

		if (data.pages.next) {
			$.getJSON(data.pages.next)
			.done(displayProjects);
		}
	};
	
	$(document).ready(function () {
    
		$.getJSON(cfapi)
		.done(displayProjects);
	});

}());