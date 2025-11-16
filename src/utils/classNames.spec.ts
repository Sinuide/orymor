import { describe, expect, it } from "vitest"

import { classNames } from "./classNames"

describe("classNames", () => {
  it("should return a string", () => {
    expect(classNames("test")).toBe("test")
  })

  it("should return a string with multiple classes", () => {
    expect(classNames("test", "test2")).toBe("test test2")
  })

  it("should return a string with a class object", () => {
    expect(classNames({ test: true, test2: false })).toBe("test")
  })

  it("should return a string with a class array", () => {
    expect(classNames(["test", "test2"])).toBe("test test2")
  })

  it("should return a string with a class object and a class array", () => {
    expect(classNames({ test: true, test2: false }, ["test3", "test4"])).toBe(
      "test test3 test4",
    )
  })

  it("should return a string with a class object and a class array and a string", () => {
    expect(
      classNames({ test: true, test2: false }, ["test3", "test4"], "test5"),
    ).toBe("test test3 test4 test5")
  })
})
