export let factorial = (x: number): number => {
    let fact=1;               
    for (let i = 2; i <= x; i++) 
        fact = fact * i; 
        return fact;
    };
    
    