'use strict';

/* Controllers */

angular.module('atMag.controllers', []).
    controller('AppCtrl', function ($scope, $http) {

	// Init some variables
	$scope.imageloading = true;
	$scope.letter = 84;
	$scope.letters = [];
	$scope.currentView = 'letter';
	$scope.sentences = ['long2.jpg','long0.jpg','long1.jpg','long4.jpg','long5.jpg'];
	$scope.sentence = 0;

	// Watch the letter/sentence for change and display loading animation
	$scope.$watch('letter + sentence', function(newVal, oldVal) {
	    $scope.imageloading = true;
	});

	// First magazine's DB. Let's move this to Mongo/Redis ASAP
	$scope.letters[16] = {
	    glyphfile: 'uber.png',
	    glyph: '',
	    author: 'סטודיו אובר',
	    authorlink: 'http://uber-nice.com',
	    prevElem: 188,
	    nextElem: 84
	};

	$scope.letters[84] = {
	    glyphfile: 'א.jpg',
	    glyph: 'א',
	    author: 'סטודיו אובר',
	    authorlink: 'http://uber-nice.com',
	    prevElem: 188,
	    nextElem: 67
	};

	$scope.letters[67] = {
	    glyphfile: 'ב.jpg',
	    glyph: 'ב',
	    author: 'אבי בוחבוט',
	    authorlink: 'http://avibohbot.com',
	    prevElem: 84,
	    nextElem: 68
	};

	$scope.letters[68] = {
	    glyphfile: 'ג.jpg',
	    glyph: 'ג',
	    author: 'אליהו משגב',
	    authorlink: '#',
	    prevElem: 67,
	    nextElem: 83
	};

	$scope.letters[83] = {
	    glyphfile: 'ד.jpg',
	    glyph: 'ד',
	    author: 'סטודיו דביבו',
	    authorlink: 'http://dvivodesign.com',
	    prevElem: 68,
	    nextElem: 86
	};

	$scope.letters[86] = {
	    glyphfile: 'ה.jpg',
	    glyph: 'ה',
	    author: 'טל הרדה',
	    authorlink: 'mailto:ttharada@gmail.com ',
	    prevElem: 83,
	    nextElem: 85
	};

	$scope.letters[85] = {
	    glyphfile: 'ו.jpg',
	    glyph: 'ו',
	    author: 'שירי ורד',
	    authorlink: 'http://cargocollective.com/katanel',
	    prevElem: 86,
	    nextElem: 90
	};

	$scope.letters[90] = {
	    glyphfile: 'ז.gif',
	    glyph: 'ז',
	    author: 'ניל כהן',
	    authorlink: 'http://neilcohen.co.il',
	    prevElem: 85 ,
	    nextElem: 74
	};

	$scope.letters[74] = {
	    glyphfile: 'ח.jpg',
	    glyph: 'ח',
	    author: 'יותם הדר',
	    authorlink: 'http://yotamhadar.com',
	    prevElem: 90 ,
	    nextElem: 89
	};

	$scope.letters[89] = {
	    glyphfile: 'ט.jpg',
	    glyph: 'ט',
	    author: 'הטייס',
	    authorlink: 'http://hatayas.co.il',
	    prevElem: 74 ,
	    nextElem: 72
	};

	$scope.letters[72] = {
	    glyphfile: 'י.jpg',
	    glyph: 'י',
	    author: 'יונתן פופר',
	    authorlink: 'http://yonatanpopper.com',
	    prevElem: 89 ,
	    nextElem: 70
	};

	$scope.letters[70] = {
	    glyphfile: 'כ.png',
	    glyph: 'כ',
	    author: 'אסנת פייטלסון',
	    authorlink: 'http://cargocollective.com/osnat',
	    prevElem: 72 ,
	    nextElem: 76
	};

	$scope.letters[76] = {
	    glyphfile: 'ך.jpg',
	    glyph: 'ך',
	    author: 'אורן פייט',
	    authorlink: 'http://orenfait.com',
	    prevElem: 70 ,
	    nextElem: 75
	};

	$scope.letters[75] = {
	    glyphfile: 'ל.jpg',
	    glyph: 'ל',
	    author: 'יוניל',
	    authorlink: 'http://yonil.com',
	    prevElem: 76 ,
	    nextElem: 78
	};

	$scope.letters[78] = {
	    glyphfile: 'מ.jpg',
	    glyph: 'מ',
	    author: 'מאיר סדן',
	    authorlink: 'http://meirsadan.com',
	    prevElem: 75 ,
	    nextElem: 79
	};

	$scope.letters[79] = {
	    glyphfile: 'ם.png',
	    glyph: 'ם',
	    author: 'אביטל תמיר',
	    authorlink: 'http://osogfamily.com',
	    prevElem: 78 ,
	    nextElem: 66
	};

	$scope.letters[66] = {
	    glyphfile: 'נ.png',
	    glyph: 'נ',
	    author: 'נדב ברקן',
	    authorlink: 'http://nadavbarkan.com',
	    prevElem: 79,
	    nextElem: 73
	};

	$scope.letters[73] = {
	    glyphfile: 'ן.jpg',
	    glyph: 'ן',
	    author: 'עידו גילדין',
	    authorlink: 'http://idog.prosite.com',
	    prevElem: 66,
	    nextElem: 88
	};

	$scope.letters[88] = {
	    glyphfile: 'ס.jpg',
	    glyph: 'ס',
	    author: 'גל ממליה',
	    authorlink: 'http://facebook.com/gal.mamalya.page',
	    prevElem: 73,
	    nextElem: 71
	};

	$scope.letters[71] = {
	    glyphfile: 'ע.jpg',
	    glyph: 'ע',
	    author: 'עודד עזר',
	    authorlink: 'http://hebrewtypography.com',
	    prevElem: 88,
	    nextElem: 80
	};

	$scope.letters[80] = {
	    glyphfile: 'פ.jpg',
	    glyph: 'פ',
	    author: 'דניאל ניב-רון',
	    authorlink: 'mailto:daniellenivron@gmail.com',
	    prevElem: 71,
	    nextElem: 186
	};

	$scope.letters[186] = {
	    glyphfile: 'ף.jpg',
	    glyph: 'ף',
	    author: 'יואב גתי',
	    authorlink: 'http://beawesome.co.il',
	    prevElem: 80,
	    nextElem: 77
	};

	$scope.letters[77] = {
	    glyphfile: 'צ.jpg',
	    glyph: 'צ',
	    author: 'סטודיו זיפים',
	    authorlink: 'http://behance.net/zifim',
	    prevElem: 186,
	    nextElem: 190
	};

	$scope.letters[190] = {
	    glyphfile: 'ץ.jpg',
	    glyph: 'ץ',
	    author: 'זוהר קורן',
	    authorlink: 'http://zoharkoren.com',
	    prevElem: 77,
	    nextElem: 69
	};

	$scope.letters[69] = {
	    glyphfile: 'ק.jpg',
	    glyph: 'ק',
	    author: 'סטודיו רה-לבנט',
	    authorlink: 'http://re-levant.co.il',
	    prevElem: 190,
	    nextElem: 82
	};

	$scope.letters[82] = {
	    glyphfile: 'ר.jpg',
	    glyph: 'ר',
	    author: 'רוי שריזלי',
	    authorlink: 'http://roysherizly.com',
	    prevElem: 69,
	    nextElem: 65
	};

	$scope.letters[65] = {
	    glyphfile: 'ש.jpg',
	    glyph: 'ש',
	    author: 'ניב תשבי',
	    authorlink: 'http://flickr.com/photos/nivtishbi',
	    prevElem: 82,
	    nextElem: 188
	};

	$scope.letters[188] = {
	    glyphfile: 'ת.jpg',
	    glyph: 'ת',
	    author: 'חן מכבי',
	    authorlink: 'http://cargocollective.com/HEN',
	    prevElem: 65,
	    nextElem: 84
	};

	// Keyboard navigation
	$scope.keyup = function(keyEvent) {
	    var keyPressed = keyEvent.keyCode;
	    if ($scope.currentView == 'letter') {
		if (keyPressed == 39){
		    $scope.letter = $scope.letters[$scope.letter].prevElem;
		} 
		else if (keyPressed == 37){
		    $scope.letter = $scope.letters[$scope.letter].nextElem;
		}
		else if (typeof($scope.letters[keyPressed]) == 'object') {
	    	    $scope.letter = keyEvent.keyCode;
		}
	    }
	    else {
		$scope.nextSentence();
	    }
	};

	// Newsletter form
	$scope.contactFormSent = false;
	$scope.submitForm = function(contactForm) {
	    var postData = { 'contact': contactForm };
	    $http.post('/mail', postData)
		.success(function(data) {
		    console.log("Mail sent! "+data);
		    $scope.contactFormSent = true;
		})
		.error(function(err) {
		    console.log("Error sending mail! "+err);
		});
	}

	// Get/Set functions for the current "view" (Letter/Sentence)
	$scope.getViewClass = function(view) {
	    if (view == $scope.currentView) {
		return 'underlined';
	    }
	    else { return; }
	}
	$scope.setView = function(view) {
	    $scope.logoMenu = false;
	    $scope.currentView = view;
	}

	// Next Sentence
	$scope.nextSentence = function() {
	    $scope.imageloading = true;
	    if ($scope.sentence == $scope.sentences.length - 1) {
		$scope.sentence = 0;
	    }
	    else {
		$scope.sentence++;
	    }
	}

	// Hackorama for inverting the screen colors. Not 100% on Firefox, no idea about IE.
	$scope.toggleWhiteOnBlack = function() {
	    var css;
	    if (/Firefox/.test(navigator.userAgent)) {
		css = 'html { ' +
		    '-webkit-filter: invert(100%);' +
		    '-moz-filter: invert(100%);' + 
		    '-o-filter: invert(100%);' + 
		    '-ms-filter: invert(100%);' +
                    'filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in=\'SourceGraphic\' type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert")} body {background:black}';
	    }
	    else {
		css = 'html {-webkit-filter: invert(100%);' +
		    '-moz-filter: invert(100%);' + 
		    '-o-filter: invert(100%);' + 
		    '-ms-filter: invert(100%);' +
                    'filter: url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\'><filter id=\'invert\'><feColorMatrix in=\'SourceGraphic\' type=\'matrix\' values=\'-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0\'/></filter></svg>#invert") }';
	    }
	    var head = document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    // This is a hack, so we can revert and cycle through non-inverted and inverted states.
	    if (!window.counter) { window.counter = 1;} else  { window.counter ++;
								if (window.counter % 2 == 0) { var css ='html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); filter: none; } body {background: white};'}
							      };
	    style.type = 'text/css';
	    if (style.styleSheet){
		style.styleSheet.cssText = css;
	    } else {
		style.appendChild(document.createTextNode(css));
	    }

	    // Injecting the css to the head
	    head.appendChild(style);
	}
    });
