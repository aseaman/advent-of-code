use std::fs::File;
use std::io::{BufRead, BufReader, Result};

fn main() {
 let input = read_input("simple_input");
 println!("input {:?}", input);
}

fn part_one(data: &Vec<&str>) -> i32 {
	let mut valid = 0;

	0
}

fn read_input(filename: &str) -> Result<Vec<String>> {
	Ok(
		BufReader::new(File::open(filename)?)
			.lines()
			.map(|v| v.unwrap().parse().unwrap())
			.collect(),
	)
}

#[cfg(test)]
mod tests {
	use super::*;

	#[test]
	fn check_part_one() {
		let data = vec![
			"1-3 a: abcde",
			"1-3 b: cdefg,",
			"2-9 c: ccccccccc"
		];
		assert_eq!(part_one(&data), 2);
	}
}
