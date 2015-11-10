(function() {
  "use strict";

  /**
  * Command interface definition
  */
  var _ICommand = function () {
    this.execute = undefined;
  };

  /**
   * The Dispatcher command that is a wrapper over the execute
   * method of the command which allows clients to provide a
   * custom way to execute any command
   NOTE: The dispatch itself is an implementation of ICommand
   */
  var _Dispatch = function(dispatch) {
    _ICommand.call(this);
    this.dispatch = dispatch;
  };

  _Dispatch.prototype = Object.create(_Dispatch.prototype);
  _Dispatch.prototype.constructor = _Dispatch;

  _Dispatch.prototype.execute = function(command, args)
  {
     if(typeof (this.dispatch) == 'function' &&
        typeof (command.execute) == 'function')
        {
          this.dispatch.call(this, command, args || undefined);
        }
  };

  /*
  NOTE: For an asynchronous execution model, the Dispatch command
  defined above can still be reused for the continuations in all
  the asynchronous calls
  */

  module.exports = {
    ICommand: _ICommand,
    Dispatch: _Dispatch
  };

}());
