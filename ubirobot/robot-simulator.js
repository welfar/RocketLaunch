export class InvalidInputError extends Error {
	constructor(message) {
		super();
		this.message = message;
	}
}

const directions = ["north", "east", "south", "west"];

export class Robot {
	orient(position) {
		if (!directions.includes(position)) {
			throw new InvalidInputError("wrong error");
		} else {
			this.location = position;
		}
	}

	get bearing() {
		return this.location;
	}

	get coordinates() {
		return [this.coordinate_x, this.coordinate_y];
	}
	turnRight() {
		switch (this.location) {
			case "north":
				this.location = "east";
				[this.coordinate_x + 1, this.coordinate_y];
				break;
			case "east":
				this.location = "south";
				[this.coordinate_x, this.coordinate_y - 1];
				break;
			case "south":
				this.location = "west";
				[this.coordinate_x - 1, this.coordinate_y];
				break;
			case "west":
				this.location = "north";
				[this.coordinate_x, this.coordinate_y + 1];
				break;
		}
	}
	turnLeft() {
		switch (this.location) {
			case "north":
				this.location = "west";
				[this.coordinate_x - 1, this.coordinate_y];
				break;
			case "west":
				this.location = "south";
				[this.coordinate_x, this.coordinate_y - 1];
				break;
			case "south":
				this.location = "east";
				[this.coordinate_x + 1, this.coordinate_y];
				break;
			case "east":
				this.location = "north";
				[this.coordinate_x, this.coordinate_y + 1];
				break;
		}
	}

	at(x, y) {
		[(this.coordinate_x = x), (this.coordinate_y = y)];
	}

	advance() {
		switch (this.location) {
			case "north":
				[this.coordinate_x, (this.coordinate_y = this.coordinate_y + 1)];
				break;
			case "east":
				[(this.coordinate_x = this.coordinate_x + 1), this.coordinate_y];
				break;
			case "south":
				[this.coordinate_x, (this.coordinate_y = this.coordinate_y - 1)];
				break;
			case "west":
				[(this.coordinate_x = this.coordinate_x - 1), this.coordinate_y];
				break;
		}
	}

	static instructions(instructions) {
		const array = [];
		Array.from(instructions).forEach((instruction) => {
			switch (instruction) {
				case "R":
					array.push("turnRight");
					break;
				case "A":
					array.push("advance");
					break;
				case "L":
					array.push("turnLeft");
					break;
			}
		});
		return array;
	}
	place({ x, y, direction }) {
		[(this.coordinate_x = x), (this.coordinate_y = y)];
		this.location = direction;
	}
	evaluate(instructions) {
		Array.from(instructions).forEach((instruction) => {
			switch (instruction) {
				case "R":
					this.turnRight();
					break;
				case "A":
					this.advance();
					break;
				case "L":
					this.turnLeft();
					break;
			}
		});
	}
}
