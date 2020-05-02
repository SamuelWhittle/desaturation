// Color Class, idk it does colorful stuff
class Color {
    // Basic constructor
	constructor(r, g, b) {
		this.red = r;
		this.green = g;
		this.blue = b;
	}
    
    // Returns new color that is the compliment to this color
    compliment() {
        return new Color(1-this.red, 1-this.green, 1-this.blue);
    }
}
