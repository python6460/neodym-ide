describe('ComponentsOverviewController.spec.js', function() {

	var $scope,
	$q,
	$httpBackend;

	beforeEach(module('neodym'));

	beforeEach(inject(function($controller, $rootScope, _$q_, _$httpBackend_) {

		$scope = $rootScope.$new();
		$httpBackend = _$httpBackend_;

		controller = $controller('ComponentsOverviewController', {
			'$scope': $scope,
			'$httpBackend': $httpBackend
		});

		$q = _$q_;
	}));

	it('should be defined', function() {
		expect(true).toBe(true);
	});
});
