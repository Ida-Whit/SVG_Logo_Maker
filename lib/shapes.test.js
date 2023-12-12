const {Circle, Square, Triangle} = require("./shapes")

//Circle test

describe("Circle", () => {
    it.todo("should return circle dimensions and chosen color"), () => {
        const shape = new Circle();
        shape.setShapeColor("blue");
    expect(shape.renderShape()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" /> \n`)
}})


//Square test

describe("Square", () => {
    it.todo("should return square dimensions and chosen color"), () => {
        const shape = new Square;
        shape.setShapeColor("yellow");
    expect(shape.renderShape).toEqual(`<rect x="100" y="60" width="100" height="100" fill= "yellow"/> \n`)
}})

//Triangle test

describe("Triangle", () => {
    it.todo("should return triangle dimensions and chosen color"), () => {
        const shape = new Triangle;
        shape.setShapeColor("purple");
    expect(shape.renderShape).toEqual(`<polygon points = "150, 18 244, 182 56, 182" fill="purple"/> \n`)
}})