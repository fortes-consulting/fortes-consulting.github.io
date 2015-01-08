(function($scope) {
	var app = angular.module('prsts', ['angular-sortable-view']);

	app.controller('CategoryController', function() {
		this.cats = categories;
	});

	app.controller('ArticleController', function() {
		this.arts = articles;
	});

	app.controller('SuggestedController', function() {
		this.sugJobs = suggestedJobs;
	});

	app.controller('UserController', function() {
		this.user = user;
	});

	app.controller('PursuitsController', function() {
		this.currentPursuits = pursuits;
	});

	app.controller('AddOptionController', function() {
		this.option = {};

		this.addOption = function() {
			var category = this.option.category;

			for(i = 0; i < categories.length; i++) {
				switch(category) {
					case categories[i].name:
						categories[i].options.push(this.option);
						break;
				}
			}

			this.option = {};
		};
	});

	app.controller('AddCatController', function() {
		this.category = {};

		this.addCat = function() {
			categories.push(this.category);

			this.category = {};

			var wrapWidth = document.getElementById('category-wrap').scrollWidth;
			var windowWidth = $(window).width()
			var maxScrollX = wrapWidth - windowWidth;
			$('#category-wrap').scrollLeft(maxScrollX);

		};
	});

	app.controller('TabController', function() {
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		};

		this.isSet = function(tabName) {
			return this.tab === tabName;
		};
	});


	var categories = [
		{
			name:'Stage 1',
			options: [
				{
					coName:'Company A',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company B',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company C',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company D',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company E',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company F',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company G',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		},
		
		{
			name:'Stage 2',
			options: [
				{
					coName:'Company H',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company I',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company J',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company K',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		},
		
		{
			name:'Stage 3',
			options: [
				{
					coName:'Company L',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company M',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company N',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company O',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company P',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company Q',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company R',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		},
		
		{
			name:'Stage 4',
			options: [
				{
					coName:'Company S',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company T',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company U',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		},
		
		{
			name:'Stage 5',
			options: [
				{
					coName:'Company V',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				},
				{
					coName:'Company W',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		},
		
		{
			name:'Stage 6',
			options: [
				{
					coName:'Company X',
					coLocation:'City, State',
					jobTitle:'Job Title',
					notes:'Brief Description',
					image:''
				}
			]
		}
	];

	var articles = [
		{
			title:'Article A',
			href:''
		},
		{
			title:'Article B',
			href:''
		},
		{
			title:'Article C',
			href:''
		},
		{
			title:'Article D',
			href:''
		},
		{
			title:'Article E',
			href:''
		},
		{
			title:'Article F',
			href:''
		},
		{
			title:'Article G',
			href:''
		},
	];

	var suggestedJobs = [
		{
			coName:'Company AA',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
		{
			coName:'Company BB',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
		{
			coName:'Company CC',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
		{
			coName:'Company DD',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
		{
			coName:'Company EE',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
		{
			coName:'Company FF',
			coLocation:'City, State',
			jobTitle:'Job Title',
			image:''
		},
	];

	var user = {
		firstName:'John',
		lastName:'Doe',
		email:'johncreative@gmail.com',
		image:''
	};

	var pursuits = [
		'Full-Time Web Development',
		'Part-Time Freelance',
		'Pro Bono Work'
	];



})();


$(document).ready(function() {
	//Suggested Sidebar toggle
	$('#suggested-button, .fly-menu p').click(function() {
		$('.fly-menu').toggleClass('hidden');

	    });

	$('header, main').click(function() {
		$('.fly-menu').addClass('hidden');

	});


	//Add Option Menu toggle
	$('#add-option').click(function() {
		$('.overlay, #add-option-form').fadeIn(function() {
			$(this).removeClass('hidden');
		});

	});

	//Add Category Menu toggle
	$('#add-cat').click(function() {
		$('.overlay, #add-cat-form').fadeIn(function() {
			$(this).removeClass('hidden');
		});

	});

	//Overlay toggle
	$('.overlay').click(function() {
		$('.overlay, .popup').fadeOut(function() {
			$(this).addClass('hidden');
		});

	});

	$(document).keyup(function(e) {
		if(e.keyCode == 27) {
			$('.overlay, .popup').fadeOut(function() {
				$(this).addClass('hidden');
			});
		}
	});

	//Details Menu toggle
	$('.details-button').click(function() {
		console.log ("true");
		$('.overlay, #details-menu').fadeIn(function() {
			$(this).removeClass('hidden');
	});

});
});