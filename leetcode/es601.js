/**
 * es6 super用法
 * @author: 李莹
 * @date: 2020-09-11 09:54:27
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log('instance', this.name);
    }
    static print() {
        console.log('static', this.name)
    }
}

// 子类
class Dog extends Animal {
    constructor(name) {
        // super作为函数使用，表示父类的构造函数
        super(name)
    }
    print() {
        console.log('普通方法中super指向子类:', super.valueOf() === Dog);
        console.log('普通方法中super指向子类实例:', super.valueOf() instanceof Dog);
        // super作为对象，普通方法中，指向父类原型
        // super调用父类函数时，内部的this指向子类实例
        super.print();
    }
    static print() {
        console.log('静态方法中super指向子类:', super.valueOf() === Dog);
        console.log('静态方法中super指向子类实例:', super.valueOf() instanceof Dog);
        // super作为对象，在静态方法中，指向父类
        // super调用父类函数时，内部的this指向子类
        super.print();
    }
}
const dog = new Dog('辛巴');
dog.print();
Dog.print();
dog.name = '斯巴达'
console.log(dog.name);