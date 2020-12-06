import partOne from './part-one';
import partTwo from './part-two'
import { loadData } from '../util/file-helpers';

export default function run(): void {
	loadData('day01', 'data').then(data => {
		const parsed = data.trim().split('\n').map(line => parseInt(line, 10));
		console.group('Day One');
		console.log('Part One: ', partOne(parsed));
		console.log('Part Two: ', partTwo(parsed));
		console.groupEnd();
	})
}
