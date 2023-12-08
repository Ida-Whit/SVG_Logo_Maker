// Create Shape class for common attributes among the shapes.

class Shape{
    constructor(shapeColor, logo, textColor) {
        this.shapeColor = shapeColor;
        this.logo = logo;
        this.textColor = textColor;
    }
}

// Create a class for each of the three shape choices which inherit the class Shape.

class Circle extends Shape{
    constructor(shapeColor, logo, textColor, shape) {
        super(shapeColor, logo, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<circle cx="150" cy="100" r="80" fill="green" /> \n`
        }
    }
}


class Square extends Shape{
    constructor(shapeColor, logo, textColor, shape) {
        super(shapeColor, logo, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<rect width="100" height="100" fill= ${shapeColor}/> \n`
        }
        
    }
}


class Triangle extends Shape{
    constructor(shapeColor, logo, textColor, shape) {
        super(shapeColor, logo, textColor)
        this.shape = shape;
        this.renderShape = function () {
            return `<polygon points="250,60 100,400 400,400" fill= ${shapeColor}/> \n`
        }
        
    }
}

//Function to generate the SVG layout.

function generateSVG(data) {
    let SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n`
    
    let shapeChoice;
    
    if(data.shape === 'triangle') {
      shapeChoice = new Triangle();
      SVG += shapeChoice.renderShape()
    } else if (data.shape === 'square') {
      shapeChoice = new Square();
      SVG+= shapeChoice.renderShape();
    } else {
      shapeChoice = new Circle();
      SVG += shapeChoice.renderShape();
    }
    
    SVG =+ `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${data.textColor}>${data.logo}</text>
  
        </svg>`
  
    return SVG;
  }
  


module.exports = generateSVG