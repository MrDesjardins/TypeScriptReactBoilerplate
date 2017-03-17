import { ClassB } from "folder1/file2";
export class ClassA {
    public method1(): void {
        const text = "Hello TypeScript!";
        const div = $("<div>");
        div.html("JQuery: " + text);
        $("body").append(div);
        const b = new ClassB();
        b.method1();
    }
}