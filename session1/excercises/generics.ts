class mobile{
    constructor(public modelName: string,public price: number) {        
    }
}

function samsung<T extends mobile>(c: T) {
    console.log(c.modelName, c.price);
}

let galaxyNote = new mobile("Samasung Galaxy Note 10", 70000);
samsung(galaxyNote);