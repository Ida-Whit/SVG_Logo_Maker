// Create Shape class for common attributes among the shapes.

class Shape{
    constructor() {
        this.shapeColor = "";
        this.logo = "";
        this.textColor = "";
    }
    setShapeColor(color){
        this.shapeColor = color
    }
}

// Create a class for each of the three shape choices which inherit the class Shape.

class Circle extends Shape{
        renderShape = function () {
            return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> \n`
        }
}



class Square extends Shape{
        renderShape = function () {
            return `<rect x="100" y="60" width="100" height="100" fill= "${this.shapeColor}"/> \n`
        }
}


class Triangle extends Shape{
        renderShape = function () {
            return `<polygon points = "150, 18 244, 182 56, 182" fill="${this.shapeColor}"/> \n`
        }
}

//Function to generate the SVG layout.

function generateSVG(data) {
    let SVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n`
    
    let shapeChoice;
    
    if(data.shape === 'triangle') {
      shapeChoice = new Triangle();
    } else if (data.shape === 'square') {
      shapeChoice = new Square();
    } else {
      shapeChoice = new Circle();

    }
    
    shapeChoice.setShapeColor(data.shapeColor)
    SVG += shapeChoice.renderShape()
    SVG += (`<text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.logo}</text> </svg>`)
    
    return SVG;
  }
  


module.exports = generateSVG