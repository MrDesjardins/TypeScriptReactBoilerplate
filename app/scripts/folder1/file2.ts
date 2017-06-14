import foo = require("./fileToLazyLoad");
export class ClassB {
    public method1(): void {
        console.log("ClassB->method1");
        // setTimeout(() => {
        //     System.import("./fileToLazyLoad").then((c: typeof foo) => {
        //          const co = new c.ClassC();
        //          co.method1();
        //     });
        // }, 2000);
    }
}