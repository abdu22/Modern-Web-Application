class Person
{
    private _firstName:string;
    get firstName()
    {
        return this._firstName;
    }
    set firstName(name:string)
    {
        this._firstName=name.toUpperCase();
    }
}
let person=new Person();
person.firstName='Asaad';
console.log(person.firstName);