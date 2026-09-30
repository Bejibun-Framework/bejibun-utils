import {describe, it, expect} from "bun:test";
import Str from "../src/facades/Str";

describe("Str.toUpperCase", () => {
    it("uppercases string", () => expect(Str.toUpperCase("hello")).toBe("HELLO"));
});

describe("Str.toLowerCase", () => {
    it("lowercases string", () => expect(Str.toLowerCase("HELLO")).toBe("hello"));
});

describe("Str.toPascalCase", () => {
    it("converts to PascalCase", () => expect(Str.toPascalCase("hello world")).toBe("HelloWorld"));
    it("handles already PascalCase", () => expect(Str.toPascalCase("HelloWorld")).toBe("HelloWorld"));
    it("handles snake_case", () => expect(Str.toPascalCase("hello_world")).toBe("HelloWorld"));
});

describe("Str.toSnakeCase", () => {
    it("converts to snake_case", () => expect(Str.toSnakeCase("helloWorld")).toBe("hello_world"));
    it("handles PascalCase", () => expect(Str.toSnakeCase("HelloWorld")).toBe("hello_world"));
    it("handles acronyms", () => expect(Str.toSnakeCase("HTTPRequest")).toBe("http_request"));
    it("chains when combine is set", () =>
        expect(Str.toSnakeCase("PostComment", "_", true).pluralize()).toBe("post_comments"));
});

describe("Str.toCamelCase", () => {
    it("converts to camelCase", () => expect(Str.toCamelCase("hello_world")).toBe("helloWorld"));
    it("handles hyphenated", () => expect(Str.toCamelCase("hello-world")).toBe("helloWorld"));
    it("handles single word", () => expect(Str.toCamelCase("hello")).toBe("hello"));
});

describe("Str.pluralize", () => {
    it("appends s to plain words", () => expect(Str.pluralize("Post")).toBe("Posts"));
    it("appends es to s/x/z/ch/sh endings", () => expect(Str.pluralize("box")).toBe("boxes"));
    it("turns consonant+y into ies", () => expect(Str.pluralize("city")).toBe("cities"));
    it("turns fe into ves", () => expect(Str.pluralize("life")).toBe("lives"));
});

describe("Str.startsWith", () => {
    it("returns true when starts with needle", () => expect(Str.startsWith("hello", "hel")).toBe(true));
    it("returns false when not", () => expect(Str.startsWith("hello", "xyz")).toBe(false));
    it("handles empty needle", () => expect(Str.startsWith("hello", "")).toBe(true));
});

describe("Str.endsWith", () => {
    it("returns true when ends with needle", () => expect(Str.endsWith("hello", "llo")).toBe(true));
    it("returns false when not", () => expect(Str.endsWith("hello", "xyz")).toBe(false));
});

describe("Str.contains", () => {
    it("returns true when contains", () => expect(Str.contains("hello", "ell")).toBe(true));
    it("returns false when not", () => expect(Str.contains("hello", "xyz")).toBe(false));
});

describe("Str.ipToFileName", () => {
    it("converts IP:port", () => expect(Str.ipToFileName("192.168.1.1:8080")).toBe("192_168_1_1_8080"));
    it("converts IP:port/path", () => expect(Str.ipToFileName("10.0.0.1:3000/api")).toBe("10_0_0_1_3000_api"));
});
