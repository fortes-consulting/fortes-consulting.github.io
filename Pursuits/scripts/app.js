(function($scope) {
	var app = angular.module('prsts', ['angular-sortable-view']);

	//For JSON implementation
	/*app.controller('PursuitsController', ['$http',function($http) {
		var alias = this;

		alias.categories = [];

		$http.get('scripts/JSON/categories.json')
			.success(function(data) {
      			alias.categories = data;
      		})
      		.error(function(data) {
      			console.log("not working");
      		});

	}]);*/

	//Pull data controllers
	app.controller('PursuitsController', function() {

		this.user = user;

		this.currentPursuits = pursuits;

		this.suggestedJobs = suggestedJobs;
		this.articles = articles;

		this.categories = categories;

		this.getIdNumber = function(idFromNgClick) {

			for(i = 0; i < categories.length; i++) {
				for (y = 0; y < categories[i].options.length; y++) {
					switch(idFromNgClick) {
						case categories[i].options[y].idNumber:
							$('#details-menu h2').html(categories[i].options[y].jobTitle);
							//$('#notes-tab .existing').html('<p class="details-note" ng-repeat="note in prstsCtrl.categories[' + i + '].options[' + y + '].notes">{{note}}</p>');
							//$('.details-tag').html('<p><span ng-repeat="tag in prstsCtrl.categories[' + i + '].options[' + y + '].tags">{{tag}}</span></p>');
							break;
					}
				}
			}
		};
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
			var randNum = Math.floor(Math.random() * 10000 + 1);
			this.option.idNumber = randNum;

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
		this.note = '';

		this.addNote = function() {
			this.details.notes.push(this.note);

			this.note = '';
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

		//Add tag
		this.tag = '';

		this.addTag = function() {
			this.details.tags.push(this.tag);

			this.tag = '';
		};
		
	});


	var categories = [{
			name:'Potential',
			options: [{
					coName:'RECSOLU',
					coLocation:'Chicago, IL',
					jobTitle:'iOS Mobile Developer',
					notes:['Spoke to Will on 1/11'],
					image:'https://s3.amazonaws.com/recpass-production-organization-profile_pictures/organizations/profile_pictures/000/000/002/medium/RECSOLU_Logo.jpg?1401205002',
					tags:['agency','The Loop'],
					idNumber:8271
				}, {
					coName:'RECSOLU',
					coLocation:'Chicago, IL',
					jobTitle:'Ruby Engineer',
					notes:['Spoke to Will on 1/11'],
					image:'https://s3.amazonaws.com/recpass-production-organization-profile_pictures/organizations/profile_pictures/000/000/002/medium/RECSOLU_Logo.jpg?1401205002',
					idNumber:611
				}, {
					coName:'Brad\'s Deals',
					coLocation:'Chicago, IL',
					jobTitle:'Sr Developer',
					notes:['Met recruiter at Builtin Brews', 'Recommended by Alex'],
					image:'http://d2c4yhy8r5mun3.cloudfront.net/assets/bradsdeals-logo@2x-122eddfbfa5bf271a70e92ee65b9753e.png',
					idNumber:3663
				}, {
					coName:'Shiftgig',
					coLocation:'Chicago, IL',
					jobTitle:'Mobile Developer - Android',
					notes:['Contact John for more info'],
					image:'http://blog.shiftgig.com/wp-content/uploads/2013/01/Logo-One.png',
					idNumber:9978
				}, {
					coName:'SpotHero',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer - Backend',
					notes:['Primarily noSQL-based'],
					image:'https://spothero.com/static/main_legacy/img/spothero-logo-shared.1de1755e115f.png',
					idNumber:5681
				}, {
					coName:'SpotHero',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer - Frontend',
					notes:['Would want to see portfolio'],
					image:'https://spothero.com/static/main_legacy/img/spothero-logo-shared.1de1755e115f.png',
					idNumber:2615
				}, {
					coName:'KnowledgeHound',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer',
					notes:['Required 4+ yrs experience'],
					image:'https://yt3.ggpht.com/-uWnkVemRPgQ/AAAAAAAAAAI/AAAAAAAAAAA/-UhXHrJ1exU/s100-c-k-no/photo.jpg',
					idNumber:5211
			}]
		}, {
			name:'Exploring',
			options: [{
					coName:'Trustwave',
					coLocation:'Chicago, IL',
					jobTitle:'Test Engineer',
					notes:['Spoke to Mary on 1/3','Applied 1/9'],
					image:'https://media.glassdoor.com/sqll/110410/trustwave-squarelogo.png',
					idNumber:4903
				}, {
					coName:'Braintree',
					coLocation:'Chicago, IL',
					jobTitle:'Front-end Developer',
					notes:['Pair programming','Eric is passing resume'],
					image:'http://image.opencartx.com/cache/data/braintree-payment-gateway/braintree-payment-gateway-1-600x600.jpg',
					idNumber:5823
				}, {
					coName:'Sertifi',
					coLocation:'Chicago, IL',
					jobTitle:'Front-End Developer',
					notes:['Spoke with COO','Looking for UX-savvy developer'],
					image:'https://lh4.googleusercontent.com/-Ijgp3yeKF8c/AAAAAAAAAAI/AAAAAAAAAFo/xdpRsW603gM/photo.jpg?sz=48',
					idNumber:9529
				}, {
					coName:'SMS Assist',
					coLocation:'Chicago, IL',
					jobTitle:'.NET Developer - IT',
					notes:['Met with CTO at recruiting event','1+ yrs experience required'],
					image:'http://www.pritzkergroup.com/venture-capital/wp-content/uploads/sites/2/2012/03/sms-assist-logo-600x373.png',
					idNumber:6033
			}]
		}, {
			name:'Applied',
			options: [{
					coName:'Iris Mobile',
					coLocation:'Chicago, IL',
					jobTitle:'Web Developer',
					notes:['Looking for fulls-stack','First-round interview finished 1/10'],
					image:'http://www.fashinvest.com/wp-content/uploads/2013/10/iris.jpg',
					idNumber:2061
				}, {
					coName:'Power Reviews',
					coLocation:'Chicago, IL',
					jobTitle:'Software Developer',
					notes:['Requires prior UX experience','Second-round interview scheduled 1/14'],
					image:'http://www.powerreviews.com/wp-content/uploads/2014/06/xpr_logo1.png.pagespeed.ic.ikJnaIH49z.png',
					idNumber:607
				}, {
					coName:'CSG International',
					coLocation:'Chicago, IL',
					jobTitle:'Web Developer',
					notes:['Needs to build database structure','First-round interview scheduled 1/13'],
					image:'http://www.csgi.com/img/logo_csgi.png',
					idNumber:1083
			}]
		}, {
			name:'Interviewing',
			options: [{
					coName:'Sprout Social',
					coLocation:'Chicago, IL',
					jobTitle:'iOS Software Engineer',
					notes:['Met recruiter at Technori Pitch','Interviews completed 1/5','Followed up after 1 week'],
					image:'http://dental-design-products.co.uk/wp-content/uploads/2014/10/sproutsocial-logo-225.jpg',
					idNumber:232
				}, {
					coName:'ParkWhiz',
					coLocation:'Chicago, IL',
					jobTitle:'Frontend Developer',
					notes:['Submitted sample work','First-round interview finished 1/3','Second-round interview finished 1/10'],
					image:'https://lh3.googleusercontent.com/-fhgy06ztu1s/AAAAAAAAAAI/AAAAAAAAAMM/5hIXa2cSdik/photo.jpg?sz=48',
					idNumber:36
			}]
		}, {
			name:'Waiting for Offer',
			options: [{
					coName:'Arc TG',
					coLocation:'Chicago, IL',
					jobTitle:'Senior Developer',
					notes:['Needs managament experience','Interview finished 1/4','Negotiating salary'],
					image:'https://pbs.twimg.com/profile_images/458977312814272513/1s16bwmv.png',
					idNumber:6605
				}, {
					coName:'Peapod',
					coLocation:'Chicago, IL',
					jobTitle:'Software Engineer, Java',
					notes:['Met through Alex','Interview completed 12/20','Red flag for culture'],
					image:'http://www.hyc.com/wordpress/wp-content/uploads/2013/11/200x200xpeapod_twitter_avatar.gif.pagespeed.ic.nWpCjg2b3U.png',
					idNumber:9716
			}]
		}, {
			name:'Negotiating',
			options: [{
					coName:'closerlook, inc.',
					coLocation:'Chicago, IL',
					jobTitle:'.Net Developer',
					notes:['Submitted application online','First-round interview finished 12/13','Second-round interview completed 12/20','Looking to start next week instead of in three weeks'],
					image:'http://www.pharmavoicemarketplace.com/companyimages/www/71046.jpg',
					idNumber:9309
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
			image:'http://img.photobucket.com/albums/v436/passion4architecture/Logo%20and%20Corporate%20Identity%203/Logo_AKTA-Design--Innovation_Chicago_IL-US-4.jpg'
		}, {
			coName:'SingleHop',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer (PHP/Python)',
			image:'http://www.interxion.com/globalassets/global/homepage/customer-logos/singlehop.jpg'
		}, {
			coName:'GoHealth',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer',
			image:'http://lonelybrand.com/blog/wp-content/uploads/2012/06/gohealth-300x225.png'
		}, {
			coName:'Orbitz Worldwide',
			coLocation:'Chicago, IL',
			jobTitle:'Sr. Software Engineer',
			image:'http://www.ricochet-rabbit.com/uploads/2/9/7/3/2973325/8886372.gif'
		}, {
			coName:'FastModel Sports',
			coLocation:'Chicago, IL',
			jobTitle:'Software Engineer',
			image:'http://download.fastmodeltechnologies.com/contributors/FastModel.gif'
	}];

	var user = {
		firstName:'John',
		lastName:'Doe',
		email:'johncreative@gmail.com',
		image:'http://www.nestowebdesign.com/wp-content/uploads/2011/10/testimonial-user.png'
	};

	var pursuits = [
		'Full-Time Web Development',
		'Part-Time Freelance',
		'Pro Bono Work'
	];

	var detailsPlaceholder = {
		notes:['Placeholder note','Placeholder note 2'],
		optionContacts:[{
			name:'Will Murphy',
			email:'will@recsolu.com',
			company:'RECSOLU',
			role:'Talent Acquisition',
			profile:'Likes cooking'
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
		tags:['agency','The Loop']
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
		$('#suggested-button').removeClass('hidden');

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
		$('.overlay, #details-menu').fadeIn(function() {
			$(this).removeClass('hidden');
		});
	});

});

//$http({ method: 'GET', url: '/array.json' });