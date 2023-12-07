//Need to assign text, text color, shape, and shape color to each shape.

// Create Shape class for common attributes among the shapes.

class Shape{
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
}

// Create a class for each of the three shape choices which inherit the class Shape.

class Square extends Shape{
    constructor(shapeColor, text, textColor, shape) {
        super(shapeColor, text, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<circle cx="150" cy="100" r="80" fill= ${shapeColor}/>`
        }
    }
}


class Circle extends Shape{
    constructor(shapeColor, text, textColor, shape) {
        super(shapeColor, text, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<rect width="100" height="100" fill= ${shapeColor}/>`
        }
        
    }
}


class Triangle extends Shape{
    constructor(shapeColor, text, textColor, shape) {
        super(shapeColor, text, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<polygon points="250,60 100,400 400,400" fill= ${shapeColor}/>`
        }
        
    }
}

function generateSVG() {
    let SVG =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            <circle cx="150" cy="100" r="80" fill="green" />
  
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
        </svg>`
}


//Export my classes
module.export = {Square, Circle, Triangle}