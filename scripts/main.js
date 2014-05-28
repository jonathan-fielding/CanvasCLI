(function(){

	//Created a generic constructor for a canvas so it can be reused
	function canvasController(elementSelector){
		this.canvas = $(elementSelector).get(0);
		this.context = this.canvas.getContext('2d');
	}

	//Adding the methods to the constructor
	canvasController.prototype = {
		setColour: function(color){
			var outputColor = null;

			if(color.match(/^#[0-9a-f]{6}$/g)){
				outputColor = color;
			}
			else{
				switch (color) {
					case 'blue':
						outputColor = '#0000ff';
						break;
					case 'green':
						outputColor = '#00ff00';
						break;
					case 'red':
						outputColor = '#ff0000';
						break;
				}
			}

			if(outputColor !== null){
				this.context.fillStyle = outputColor;
	        	this.context.fillRect( 0, 0, this.context.canvas.width, this.context.canvas.height);
			}
		}
	};

	//Main code module
	var cli = (function(){
		var $inputControl = $('.control');
		var canvas = new canvasController('#output'); //We only need one instance in this example

		//User input method
		var userInput = function(e){
			var $this = $(this),
				value = null;

			if(e.keyCode == 13){
				//We know user pressed enter so we can now get the value
				value = $this.val();
				showOutput(value);

				//Clear'output' old value, using timeout to overcome issue with autocomplete filling in to late
		        setTimeout(function(){
		        	$this.val('');
		        }, 100);
		    }
		};

		//Show the output
		var showOutput = function(command){
			$inputControl.next('.error').remove();

			if (command.match(/^clear '[#0-9a-z]*'$/g)){
				value = command.match(/'[#0-9a-z]*'/g)[0].replace(/\'/g, '');
				canvas.setColour(value);
			}
			else{
				$('<p class="error">Your command "{{command}}" is not valid</p>'.replace('{{command}}',command)).insertAfter($inputControl);
			}
		};

		return {
			init: function(){
				$inputControl.on('keydown', userInput).autocomplete({
					lookup: [
						{
							value: "clear 'red'"
						},
						{
							value: "clear 'blue'"
						},
						{
							value: "clear 'green'"
						}
					]
				});
			}
		};
	}());

	cli.init();
})();