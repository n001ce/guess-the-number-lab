const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    play: function() {
      this.secretNum = Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      this.getGuess = prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)

      while(true){
          if(isNaN(this.getGuess)){
              alert(`Incorrect input type`)
              this.getGuess = prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
          }else{
              if(this.getGuess < this.smallestNum || this.getGuess > this.biggestNum){
                alert(`This number is out of your range. Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
                }
              else{
                  this.prevGuesses.push(this.getGuess)
                }
              if(this.getGuess > this.secretNum){
                  if(this.getGuess < this.biggestNum)
                      this.biggestNum = this.getGuess
                      this.render()
                  this.getGuess = prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
                  }
              else if(this.getGuess < this.secretNum){
                  if(this.getGuess > this.smallestNum)
                      this.smallestNum = this.getGuess
                      this.render() 
                  this.getGuess = prompt(`Enter a number between ${this.smallestNum} and ${this.biggestNum}`)
                  }
              else{
                  this.render()
                  break
                  }
          }
      }
    },
    render: function(){
        if(this.getGuess > this.secretNum){
            alert(`That number is too high enter another. Guessed numbers: ${this.prevGuesses.join(',')}`)
        }
        else if(this.getGuess < this.secretNum){
            alert(`That number is too low enter another. Guessed numbers: ${this.prevGuesses.join(',')}`)
        }
        else{
            alert(`Congrats!!! You guessed ${this.getGuess} in ${this.prevGuesses.length} tries.
                  \nguessed numbers: ${this.prevGuesses.join(', ')}`)
        }
    }
}

game.play()