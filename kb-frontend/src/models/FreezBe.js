import Ingredient from "./Ingredient";

class FreezBe {
    constructor(_id = "", name = "", description = "", puHT = "", range = "", composition = [], __v) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.puHT = puHT;
        this.range = range;
        this.composition = composition;
        this.__v = __v;
    }

    type(){
        return "freezbe";
    }

    formDescriptor(){
        return {
            _id : {
                type : "hidden",
                value : this._id,
            },
            name : {
                type : "input",
                value : this.name,
            },
            description : {
                type : "input",
                value : this.description,
            },
            puHT : {
                type : "input",
                value : this.puHT,
            },
            range : {
                type : "input",
                value : this.range,
            },
            composition : {
                type : "array",
                value : this.composition,
            },
        };
    }

    addComposition(ingredientId, quantity) {
        this.composition.push({ ingredientId, quantity });
    }

    async getSubObject(){
        let list = await Ingredient.list();
        return { ingredientId : {
            type : "select",
            options : list,
        }, quantity : {
            type : "input",
            value : 0,
        } };
    }

    getName() {
        return this.name;
    }

    data() {
        return [this.name, this.description, this.puHT, this.range];
    }

    show() {
        return '/crud/freezbe/' + this._id;
    }

    editLink() {
        return '/crud/edit/freezbe/' + this._id;
    }

    static async list() {
        try {
            const response = await fetch('http://localhost:3002/freezbe');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.map((freezbe) => new FreezBe(freezbe._id, freezbe.name, freezbe.description, freezbe.puHT, freezbe.range, freezbe.composition, freezbe.__v));
        } catch (error) {
            throw error;
        }
    }


    async get(id) {
        try {
            const response = await fetch('http://localhost:3002/freezbe/' + id);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return FreezBe.from_object(data);
            return this; // Return the instance itself
        } catch (error) {
            throw error;
        }
    }

    async insert() {
        console.log(JSON.stringify(this));
        const response = await fetch('http://localhost:3002/freezbe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });
        
        return response.json();
    }

    async update() {
        let resp = await fetch('http://localhost:3002/freezbe/' + this._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        })
        
        return resp;
    }


    async remove() {
        await fetch('http://localhost:3002/freezbe/' + this._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

    }

    static from_object(object) {
        return new FreezBe(object._id, object.name, object.description, object.puHT, object.range, object.composition, object.__v);
    }

    static createLink() {
        return '/crud/freezbe/';
    }
}

export default FreezBe;