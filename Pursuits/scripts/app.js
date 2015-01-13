(function($scope) {
	var app = angular.module('prsts', ['angular-sortable-view']);

	//Pull data controllers
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

	app.controller('ContactsController', function() {
		//Associate contacts
		this.contacts = contacts;

		//Push into contacts
		this.contact = {};

		this.addContact = function() {
			contacts.push(this.contact);

			this.contact = {};
		};
	});

	app.controller('ExpensesController', function() {
		//Associate expenses
		this.expenses = expenses;

		//Push into expenses
		this.expense = {};

		this.addExpense = function() {
			expenses.push(this.expense);

			this.expense = {};
		};
	});

	//Push data controllers
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

	app.controller('ViewController', function() {
		//Details menu tabs
		this.tab = 1;

		this.setTab = function(newValue) {
			this.tab = newValue;
		};

		this.isSet = function(tabName) {
			return this.tab === tabName;
		};

		//Main views
		this.view = 1;
		
		this.setView = function(newValue) {
			this.view = newValue;
		};

		this.viewIsSet = function(viewName) {
			return this.view === viewName;
		};
	});

	app.controller('DetailsPlaceholderController', function() {
		this.details = detailsPlaceholder;

		//Add note
		this.note = {};

		this.addNote = function() {
			this.details.notes.push(this.note);

			this.note = {};
		};

		//Add optionContact
		this.optionContact = {};

		this.addOC = function() {
			this.details.optionContacts.push(this.optionContact);
			contacts.push(this.optionContact);

			this.optionContact = {};
		};

		//Add task
		this.task = {};

		this.addTask = function() {
			this.details.tasks.push(this.task);
			schedule.push(this.task);

			this.task = {};
		};

		//Add expense
		this.expense = {};

		this.addExpense = function() {
			this.details.expenses.push(this.expense);
			expenses.push(this.expense);

			this.expense = {};
		};

		//Add file
		this.file = {};

		this.addFile = function() {
			this.details.files.push(this.file);
			files.push(this.file);

			this.file = {};
		};
		
	});


	var categories = [{
			name:'Potential',
			options: [{
					coName:'RECSOLU',
					coLocation:'Chicago, IL',
					jobTitle:'iOS Mobile Developer',
					notes:['Spoke to Will on 1/11'],
					image:''
				}, {
					coName:'RECSOLU',
					coLocation:'Chicago, IL',
					jobTitle:'Ruby Engineer',
					notes:['Spoke to Will on 1/11'],
					image:''
				}, {
					coName:'Brad\'s Deals',
					coLocation:'Chicago, IL',
					jobTitle:'Sr Developer',
					notes:['Met recruiter at Builtin Brews', 'Recommended by Alex'],
					image:''
				}, {
					coName:'Shiftgig',
					coLocation:'Chicago, IL',
					jobTitle:'Mobile Developer - Android',
					notes:['Contact John for more info'],
					image:''
				}, {
					coName:'SpotHero',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer - Backend',
					notes:['Primarily noSQL-based'],
					image:''
				}, {
					coName:'SpotHero',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer - Frontend',
					notes:['Would want to see portfolio'],
					image:''
				}, {
					coName:'KnowledgeHound',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer',
					notes:['Required 4+ yrs experience'],
					image:''
			}]
		}, {
			name:'Applied',
			options: [{
					coName:'Trustwave',
					coLocation:'Chicago, IL',
					jobTitle:'Test Engineer',
					notes:['Spoke to Mary on 1/3','Applied 1/9'],
					image:''
				}, {
					coName:'Braintree',
					coLocation:'Chicago, IL',
					jobTitle:'Front-end Developer',
					notes:['Pair programming','Eric is passing resume'],
					image:''
				}, {
					coName:'Sertifi',
					coLocation:'Chicago, IL',
					jobTitle:'Front-End Developer',
					notes:['Spoke with COO','Looking for UX-savvy developer'],
					image:''
				}, {
					coName:'SMS Assist',
					coLocation:'Chicago, IL',
					jobTitle:'.NET Developer - IT',
					notes:['Met with CTO at recruiting event','1+ yrs experience required'],
					image:''
			}]
		}, {
			name:'Interviewing',
			options: [{
					coName:'Iris Mobile',
					coLocation:'Chicago, IL',
					jobTitle:'Web Developer',
					notes:['Looking for fulls-stack','First-round interview finished 1/10'],
					image:''
				}, {
					coName:'Power Reviews',
					coLocation:'Chicago, IL',
					jobTitle:'Software Developer',
					notes:['Requires prior UX experience','Second-round interview scheduled 1/14'],
					image:''
				}, {
					coName:'CSG International',
					coLocation:'Chicago, IL',
					jobTitle:'Web Developer',
					notes:['Needs to build database structure','First-round interview scheduled 1/13'],
					image:''
			}]
		}, {
			name:'Waiting for Offer',
			options: [{
					coName:'Sprout Social',
					coLocation:'Chicago, IL',
					jobTitle:'iOS Software Engineer',
					notes:['Met recruiter at Technori Pitch','Interviews completed 1/5','Followed up after 1 week'],
					image:''
				}, {
					coName:'ParkWhiz',
					coLocation:'Chicago, IL',
					jobTitle:'Frontend Developer',
					notes:['Submitted sample work','First-round interview finished 1/3','Second-round interview finished 1/10'],
					image:''
			}]
		}, {
			name:'Negotiating',
			options: [{
					coName:'Arc TG',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer',
					notes:['Needs managament experience','Interview finished 1/4','Negotiating salary'],
					image:''
				}, {
					coName:'Peapod',
					coLocation:'Chicago, IL',
					jobTitle:'Software Engineer, Java',
					notes:['Met through Alex','Interview completed 12/20','Red flag for culture'],
					image:''
			}]
		}, {
			name:'Finalizing',
			options: [{
					coName:'closerlook, inc.',
					coLocation:'Chicago, IL',
					jobTitle:'.Net Developer',
					notes:['Submitted application online','First-round interview finished 12/13','Second-round interview completed 12/20','Looking to start next week instead of in three weeks'],
					image:''
			}]
	}];

	var articles = [{
			title:'Delivering Continuous Development continuously',
			href:'http://www.theguardian.com/info/developer-blog/2015/jan/05/delivering-continuous-delivery-continuously'
		}, {
			title:'Building a scalable geofencing API on Google\'s App Engine',
			href:'http://googledevelopers.blogspot.com/2014/12/building-scalable-geofencing-api-on.html'
		}, {
			title:'~199 slides on Front-end Tooling Workflows',
			href:'http://addyosmani.com/blog/199-slides-on-front-end-tooling-workflows/'
		}, {
			title:'Functional Android',
			href:'http://www.theguardian.com/info/developer-blog/2014/dec/11/functional-android'
		}, {
			title:'JavaScript Application Architecture On The Road To 2015',
			href:'http://addyosmani.com/blog/architecture-on-the-road-to-2015/'
	}];

	var suggestedJobs = [{
			coName:'AKTA',
			coLocation:'Chicago, IL',
			jobTitle:'Android Engineer',
			image:''
		}, {
			coName:'SingleHop',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer (PHP/Python)',
			image:''
		}, {
			coName:'GoHealth',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer',
			image:''
		}, {
			coName:'Orbitz Worldwide',
			coLocation:'Chicago, IL',
			jobTitle:'Sr. Software Engineer',
			image:''
		}, {
			coName:'FastModel Sports',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer',
			image:''
	}];

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

	var detailsPlaceholder = {
		notes:[{content:'test note'},{content:'test note 2'}],
		optionContacts:[{
			name:'Contact Person',
			email:'someemail@gmail.com',
			company:'Some Company',
			role:'Recruiter',
			profile:'Likes cookies'
		}],
		tasks:[{
			name:'Email recruiter',
			date:"2014-12-26T06:00:00.000Z",
			info:'Send resume and cover letter'
		}],
		expenses:[{
			name:'Cab ride',
			date:"2014-12-27T06:00:00.000Z",
			amount:11.23
		}],
		files:[{
			name:'Resume',
			link:''
		}],
		tags:[{name:'agency'},{name:'The Loop'}]
	};

	var contacts = [{
			name:'Alex Kahn',
			email:'a.kahn@gmail.com',
			company:'Lightbank',
			role:'Developer',
			profile:['Geek culture']
		}, {
			name:'Eric Mrak',
			email:'eric.mrak@braintree.com',
			company:'Braintree',
			role:'Developer',
			profile:['Hikes']
		}, {
			name:'Will Murphy',
			email:'will@recsolu.com',
			company:'RECSOLU',
			role:'Talent Acquisition',
			profile:['Likes cooking']
	}];

	var schedule = [
	];

	var expenses = [{
			name:'Cab ride',
			date:"2014-12-27T06:00:00.000Z",
			amount:11.23
		},{
			name:'Cab ride',
			date:"2015-01-03T06:00:00.000Z",
			amount:8.43
	}];

	var files = [
	];

	var tags = [
	];

})();


$(document).ready(function() {
	//Suggested Sidebar toggle
	$('#suggested-button, .fly-menu p:first-child').click(function() {
		$('.fly-menu, #suggested-button').toggleClass('hidden');

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