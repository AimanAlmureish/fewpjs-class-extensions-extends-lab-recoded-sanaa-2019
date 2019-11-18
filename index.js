// Your code here

class Polygon {
  constructor(array){
    this.array = array 

  }
  
  get countSides(){
    return this.array.length
  }
  
  get perimeter(){
    let sum = 0;
    this.array.forEach(item =>{
      sum+=item;
    })
    return sum
  }
}


class Triangle extends Polygon{
  
  constructor(array){
    super(array)
  }
  
            get isValid() {
                if (this.array[0] + this.array[1] > this.array[2] && this.array[0] + this.array[2] > this.array[1] && this.array[2] + this.array[1] > this.array[0]) {
                    console.log(true);
                    return true
                } else {
                    console.log(false);
                    return false

                }
            }
  
}



class Square extends Polygon{
  constructor(array){
    super(array)
  }
  
  get area(){
    let ar = 0
    
    ar = this.array[0] * this.array[0]

    return ar
  }
  
  get isValid(){

        for (let index = 0; index < this.array.length; index++) {
            const element = this.array[index];
            if (this.array[0] !== element) {
                console.log(false);
            } else {
                console.log(true);
            }

        }
}