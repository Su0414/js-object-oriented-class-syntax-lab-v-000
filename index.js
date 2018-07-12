class BoardMember{

constructor(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

}

class Ceo extends BoardMember{
  constructor(name, homeState, training){
    super(name, homeState, training)
  }
}
