CanvasCLI
=========

As I mentioned in my email, this was written really quickly so I only implemented the 'clear' command.

The implementation basically uses a constructor for the canvas, as I made the assumption that you might reuse this for multiple canvas elements. This is then called by a cli module which is specific to this app.

The codebase to this app is based upon the Yeoman easy-webapp generator that I am the developer of, therefore it has a lot of structure there that is a bit overkill for something like this. In addition this means that all dependencies that can be Bower controlled are Bower controlled.

##Compiling

To compile the project - 

###Install SASS and Compass 
'gem install compass'

###Install Grunt
'npm install -g grunt-cli'

###Install dependencies
Navigate to project dir and then:
'npm install'

###Compile
Run the command
'grunt'
