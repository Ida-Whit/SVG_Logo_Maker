const {Circle, Square, Triangle} = require("./shapes")

//Circle test

describe("Circle", () => {
    it("should return circle dimensions and chosen color"), () => {
        const circle = new Circle
        const shape = circle
        shape.setShapeColor() = "blue"
    expect(shape.renderShape).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" /> \n`)
}})

//Square test

describe("Square", () => {
    it("should return square dimensions and chosen color"), () => {
        const square = new Square;
        const shape = square;
        shape.setShapeColor() = "yellow";
    expect(shape.renderShape).toEqual(`<rect x="100" y="60" width="100" height="100" fill= "yellow"/> \n`)
}})

//Triangle test

describe("Triangle", () => {
    it("should return triangle dimensions and chosen color"), () => {
        const triangle = new Triangle
        const shape = triangle
        shape.setShapeColor() = "purple"
    expect(shape.renderShape).toEqual(`<polygon points = "150, 18 244, 182 56, 182" fill="purple"/> \n`)
}})