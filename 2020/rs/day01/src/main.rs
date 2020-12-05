use std::fs::File;
use std::io::{BufRead, BufReader, Result};

fn main() -> Result<()> {
	let input = read_input("input")?;
	let one_result = part_one(&input);
	let two_result = part_two(&input);
	println!("part one result is {}", one_result);
	println!("part two result is {}", two_result);
	Ok(())
}

fn read_input(filename: &str) -> Result<Vec<i32>> {
	Ok(
		BufReader::new(File::open(filename)?)
			.lines()
			.map(|v| v.unwrap().parse().unwrap())
			.collect(),
	)
}

fn part_one(inputs: &Vec<i32>) -> i32 {
	let mut product = 0;
	for elem in inputs {
		let potential = 2020 - elem;
		if inputs.iter().any(|&i| i == potential) {
			product = elem * potential;
		}
	}
	product
}

fn part_two(inputs: &Vec<i32>) -> i32 {
	let mut product = 0;
	for x in inputs {
		for y in inputs {
			if x + y > 2020 {
				continue;
			}

			let potential = 2020 - x - y;
			if inputs.contains(&potential) {
				product = x * y * potential;
			}
		}
	}
	product
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn check_part_one() {
		let data: Vec<i32> = vec![1721, 979, 366, 299, 675, 1456];
		assert_eq!(part_one(&data), 514579);
	}

	#[test]
	fn check_part_two() {
		let data: Vec<i32> = vec![1721, 979, 366, 299, 675, 1456];
		assert_eq!(part_two(&data), 241861950);
	}
}
