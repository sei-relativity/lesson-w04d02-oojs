

const celica ={
model: 'Honda civic',
color :'hotpink',
fuel:100,
drive: function(){ this.fuel-- ; 
    },
refuel: function(){ this.fuel=100;
    }

}


const celica ={
   model: 'Toy-Yoda',
   color :'red',
   fuel:100,
   drive: function(){
   this.fuel--;
   },
   refuel: function(){
       this.fuel=100;
       }
    }

   

// This should return a car object just like the previous example
const celica = makeCar("Toy-Yoda Celica", "limegreen");

const makeCar = function(model, color, fuel = 50) {
    return {
        model: model,
        color: color,
        fuel: fuel
    };
};
