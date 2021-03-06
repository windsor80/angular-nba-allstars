angular
	.module('nbaAllstars.component.nbaPlayer')
	.directive('nbaPlayer', NbaPlayer);

function NbaPlayer() {
	return  {
		restrict: 'E',
		scope: {
			nbaData: '='
		},
		templateUrl: '/nbaAllstars/features/components/nbaPlayer/nbaPlayer.html',
		controller: NbaPlayerCtrl,
		controllerAs: 'NbaPlayerVM',
		bindToController: true
	}
}

function NbaPlayerCtrl($scope) {
	var vm = this;

	// Hide FB Share button
	$(".facebook-button").hide();

	// If all all 5 players are selected, show FB Share button
	$(".btn").click(function(){

		if ( $('#guard-1').hasClass('full') && $('#guard-2').hasClass('full') && $('#forward-1').hasClass('full') && $('#forward-2').hasClass('full') && $('#center-1').hasClass('full') ) {

			$(".facebook-button").show();

		} else {

			$(".facebook-button").hide();

		}

	});
	
}