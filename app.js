const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
  render: function(){
      if(this.getGuess > this.secretNum){
          alert(`That number is too high enter another. Guessed numbers: ${this.prevGuesses.join(',')}`)
      }
      else{
          alert(`That number is too low enter another. Guessed numbers: ${this.prevGuesses.join(',')}`)
      }
  }
}

game.play()
  
game.getGuess = prompt(`Enter a number between ${game.smallestNum} and ${game.biggestNum}`)

  while(true){
      if(isNaN(game.getGuess) || game.getGuess > 100 || game.getGuess < 1){
          alert(`Incorrect input type`)
          game.getGuess = prompt(`Enter a number between ${game.smallestNum} and ${game.biggestNum}`)
      }else{
          game.prevGuesses.push(game.getGuess)
          if(game.getGuess > game.secretNum){
              if(game.getGuess < game.biggestNum)
                  game.biggestNum = game.getGuess
                  game.render()
              game.getGuess = prompt(`Enter a number between ${game.smallestNum} and ${game.biggestNum}`)
              }
          else if(game.getGuess < game.secretNum){
              if(game.getGuess > game.smallestNum)
                  game.smallestNum = game.getGuess
                  game.render() 
              game.getGuess = prompt(`Enter a number between ${game.smallestNum} and ${game.biggestNum}`)
              }
          else{
              alert(`Congrats!!! You guessed ${game.getGuess} in ${game.prevGuesses.length} tries.
              \nguessed numbers: ${game.prevGuesses.join(', ')}`)
              break
              }
      }
  }