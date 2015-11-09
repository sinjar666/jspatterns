/**
* Command interface definition
*/
var ICommand = function (execute, args) {
  this.execute = execute;
  this.args = args;
}

var BaseCommand = function(execute, args)
{
  ICommand.call(this, function() {}, args);
  var baseExecute = execute;
  this.doWork = null;
};

BaseCommand.prototype = Object.create(ICommand.prototype);
BaseCommand.prototype.constructor = BaseCommand;

BaseCommand.prototype.execute = function () {
  this.baseExecute (this.doWork, this.args);
};
