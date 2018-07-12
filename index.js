class BoardMember{

constructor(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
  veto = function () {
      return 'No, I must disagree'
    };
}



}

class Ceo extends BoardMember{
  constructor(name, homeState, training){
    super(name, homeState, training)
  }
}
