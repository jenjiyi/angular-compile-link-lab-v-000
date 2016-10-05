function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		link: function (scope, elem, attrs) {

		},
		compile: function ($element) {
			return {
				pre: function (scope, element, attrs) {
					element[0].textContent = "I love angular";
				},
				post: function (scope, element, attrs) {
	        document.addEventListener("click", function(){
						 alert("Hello!");
					 });
	      }
			}
    }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);
