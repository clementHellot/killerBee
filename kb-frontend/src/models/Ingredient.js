class Ingredient {
    constructor(_id ="", name ="", description="",__v="") {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.__v = __v;

    }

    async get(id) {
        try {
          const response = await fetch('http://localhost:3005/ingredient/' + id);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
      
          this._id = data._id;
          this.name = data.name;
          this.description = data.description;
          this.__v = data.__v;
      
          return this; // Return the instance itself
        } catch (error) {
          throw error;
        }
      }
      

    async remove() {
        await fetch('http://localhost:3005/ingredient/' + this._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

    }

    data(){
        return [this.name, this.description];
    }

    show(){
        return '/crud/ingredient/' + this._id;
    }

    editLink(){
        return '/crud/edit/ingredient/' + this._id ;
    }

    static createLink(){
        return '/crud/ingredient/';
    }


    static from_object(object) {
        return new Ingredient(object._id, object.name, object.description, object.__v);
    }

    

    async insert(){
        let resp = await fetch('http://localhost:3005/ingredient/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        });

        return resp.json();
    }

    update(){
       
        fetch('http://localhost:3005/ingredient/' + this._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this)
        }).then(res => res.json())
        .then(data => console.log(data));
        
        
    }

}

export default Ingredient;