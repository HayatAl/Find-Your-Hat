const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(fieldLayout) {
        this.fieldLayout = fieldLayout;
        this.playerPosition = { x: 0, y: 0 }; // Player starts at the upper-left corner
    }



    print() {
        let fieldString = '';
        for (let row of this.fieldLayout) {
            fieldString += row.join('') + '\n';
        }
        console.log(fieldString );
    }

    acceptingUserInput(){
                console.log('enter direction wher up : u \n down :d \n left:l \n rigth:r \n');
        let input= prompt("which way  ");
        switch(input){
            case "r":
            this.playerPosition.y= this.playerPosition.y+1;
            console.log(this.playerPosition.y);
              break;
                
            case "l":
               this.playerPosition.y= this.playerPosition.y-1;
               console.log(this.playerPosition.y);
             break;
            
            case "u":
              this.playerPosition.x= this.playerPosition.x-1;
              console.log(this.playerPosition.x);
              break;

              case "d":
                this.playerPosition.x= this.playerPosition.x+1;
                console.log(this.playerPosition.x);
                break;                         
            
               default:
                   console.log("plaese enter valid litter");
                

        }
        this.test();


    }

        
    test(){
        if ( this.playerPosition.x >= 0 && this.playerPosition.x < this.fieldLayout.length &&  this.playerPosition.y >= 0 && this.playerPosition.y < this.fieldLayout[0].length)
            {
                console.log('enter');
                if (this.fieldLayout[this.playerPosition.x][this.playerPosition.y]===hat){
                    console.log("you win");

                }else if (this.fieldLayout[this.playerPosition.x][this.playerPosition.y]===hole){
                    console.log("you losee");
                }
                 else if (this.fieldLayout[this.playerPosition.x][this.playerPosition.y]===fieldCharacter){
                    this.fieldLayout[this.playerPosition.x][this.playerPosition.y]=pathCharacter;
                    this.print();
                    this.acceptingUserInput();

                }

        }
       
        else
         {   this.print()
            console.log("you out");
        }
    }

    static generateField(numCol, numRow) {
        let cover = [hat, hole, fieldCharacter];
        let arrayL = new Array(numRow); // Create an array with numRow elements

        for (let i = 0; i < numRow; i++) {
            arrayL[i] = new Array(numCol); // Create a new array with numCol elements for each row
        }
        for (let i = 0; i < numRow; i++) {
            arrayL[i] = [];
            for (let j = 0; j < numCol; j++) {
                arrayL[i][j] =cover[Math.floor(Math.random()*2)+1];
            }
          } 
          arrayL[0][0]= pathCharacter;
          arrayL[Math.floor(Math.random()*numRow)][Math.floor(Math.random()*numCol)]=cover[0]
          return arrayL;


}}

// Example usage
const fieldLayout = [
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']
];

const field = new Field(fieldLayout);
// field.print();
// field.acceptingUserInput()
console.log(Field.generateField(5,3));

