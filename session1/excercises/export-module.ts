export var factorial = (x: number): number => {
    var fact=1;               
        for (var i = 2; i <= x; i++) 
            fact = fact * i; 
            return fact;
    };
    
    