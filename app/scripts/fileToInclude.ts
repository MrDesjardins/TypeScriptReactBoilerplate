import { ClassB } from "./folder1/file2";
import * as $ from "jquery";
export class ClassA {
    public method1(): void {
        const text = "Hello TypeScript from fileToInclude.ts!";
        const div = $("<div>");
        div.html("File to include: " + text);
        $("body").append(div);
        const b = new ClassB();
        b.method1();
    }
}