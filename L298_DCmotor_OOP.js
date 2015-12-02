//MOJA 2015
//OOP version of DC motor control using L298N H-bridge
function motorDC(enablePin,controlPins1,controlPins2 )
{
  var direction = 0;
  this.enablePin =  enablePin; 
  this.controlPins1 = controlPins1;
  this.controlPins2 = controlPins2;

  this.begins(controlPins1, controlPins2);
  
  this.start = function ()
  { 
    digitalWrite(enablePin,1);
  };
  
  this.stop = function ()
  {
    digitalWrite(enablePin,0);
  };
   
  this.reverse = function ()
  {
    direction = !direction;
    digitalWrite(controlPins1,direction);
    digitalWrite(controlPins2,!direction);
  };
  
}

motorDC.prototype.begins = function(cp1,cp2)
{
  digitalWrite(cp1,0);
  digitalWrite(cp2,1);
};
