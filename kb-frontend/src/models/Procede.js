import FreezBe from "./FreezBe";

class Procede {
    constructor(_id = "", name = "", description = "", freezBeId = "", etapes = [], __v) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.freezBeId = freezBeId;
        this.etapes = etapes;
        this.__v = __v;
        
    }

    type() {
        return "procede";
    }

    async data()  {
        let freezbe = new FreezBe();
        freezbe = await freezbe.get(this.freezBeId);

        return [this.name, this.description, freezbe.name, this.etapes.length];
    }


    show() {
        return '/crud/procede/' + this._id;
    }

    editLink() {
        return '/crud/edit/procede/' + this._id;
    }

    async get(id) {
        try {
            const response = await fetch('http://localhost:3010/procede/' + id);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return Procede.from_object(data);
        } catch (error) {
            throw error;
        }
    }

    async insert() {
        console.log(JSON.stringify(this));
        let response = await fetch('http://localhost:3010/procede', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });
        return response.json();
    }

    async update() {
        let resp = await fetch('http://localhost:3010/procede/' + this._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });
        return resp.json();
    }

    async remove(){
        await fetch('http://localhost:3010/procede/' + this._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }


    async formDescriptor() {
        let freezbes = await FreezBe.list();

        return {
            _id:{
                type: "hidden",
                value: this._id,
            },
            name: {
                type: "input",
                value: this.name,
            },
            description: {
                type: "input",
                value: this.description,
            },
            freezBeId: {
                type: "select",
                options : freezbes,
            },
            etapes: {
                type: "array",
                value: this.etapes,
            },
        };
    }
    async getSubObject(){
        
        return { name : {
            type : "input",
            value : "",
        }, description : {
            type : "input",
            value : "",
        } };
    }

    static createLink() {
        return '/crud/procede/';
    }

    static from_object(object) {
        return new Procede(object._id, object.name, object.description, object.freezBeId, object.etapes, object.__v);
    }


}

export default Procede;