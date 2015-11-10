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
 */
var _Dispatch = function(dispatch) {
  _ICommand.call(this);
  this.dispatch = dispatch;
};

_Dispatch.prototype = Object.create(_Dispatch.prototype);
_Dispatch.prototype.constructor = _Dispatch;

_Dispatch.prototype.execute = function(command, args = undefined)
{
   if(typeof (this.dispatch) == 'function' &&
      typeof (command.execute) == 'function')
      {
        this.dispatch.call(this, command, args);
      }
};

module.exports = {
  ICommand: _ICommand,
  Dispatch: _Dispatch
};
