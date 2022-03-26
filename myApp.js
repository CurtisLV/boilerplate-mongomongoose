require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: { type: String, required: true },
    age: Number,
    favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
    const Karlis = new Person({
        name: 'Karlis',
        age: 32,
        favoriteFoods: ['Pizza', 'Nuggets', 'Sweets'],
    });
    Karlis.save((err, data) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });
};

let arrayOfPeople = [
    { name: 'Zane', age: 22, favoriteFoods: ['Paprika', 'Šmiga', 'Weeds'] },
    { name: 'Karlis', age: 32, favoriteFoods: ['Veselīgs', 'Bio', 'Vegan'] },
    { name: 'Dace', age: 12, favoriteFoods: ['Čipsi', 'Kola', 'Veips'] },
];

const createManyPeople = (arrayOfPeople, done) => {
    Person.create(arrayOfPeople, (err, done) => {
        if (err) {
            return done(err);
        }
        return done(null, data);
    });
};

const findPeopleByName = (personName, done) => {
    Person.find({ name: personName }, (err, personFound) => {
        if (err) {
            return done(err);
        }
        done(null, personFound);
    });
};

const findOneByFood = (food, done) => {
    done(null /*, data*/);
};

const findPersonById = (personId, done) => {
    done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';

    done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;

    done(null /*, data*/);
};

const removeById = (personId, done) => {
    done(null /*, data*/);
};

const removeManyPeople = (done) => {
    const nameToRemove = 'Mary';

    done(null /*, data*/);
};

const queryChain = (done) => {
    const foodToSearch = 'burrito';

    done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
