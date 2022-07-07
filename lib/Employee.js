class Employee {

    constructor(data) {
        const info = [
            {
                name: '', 
                id: '', 
                email: '', 
                role: ''
            }
        ];

        this.name = info.name
        this.id = info.indexOf(info.name) + 1;
        this.email = info.email;
        this.role = info.role
    }

    getName() {
        if (this.info.length) {
            info.find(this.name);
            return this.name;
        } 
        return false;
    }
    
    getId() {
        if (this.info.length) {
            info.find(this.id);
            return this.id;
        }
        return false;
    }


    getEmail() {
        if (this.info.length) {
            info.find(this.email);
            return this.email;
        }
        return false;
    }

    getRole() {
        if (this.info.length) {
            info.find(this.role);
            return this.role;
        }
        return false;
    }
}

module.exports = Employee;