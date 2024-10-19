let getInfo = Symbol('getInfo');
let object = {
    name: 'Panda',
    kindom: 'Animals',
    size: 'up to 1.8m',
    weight: 'up to 160kg',
    [getInfo]() {
        console.log('Our object:');
        for (let key in this) {
            console.log(key + ': ' + this[key]);
        }
        console.log();
    }
}
object[getInfo]();

object.areaOfHabitat = 'China';
object.nutrition = 'omnivores';

object[getInfo]();

