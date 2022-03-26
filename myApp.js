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
    Person.findOne({ favoriteFoods: food }, (err, foodFound) => {
        if (err) {
            return done(err);
        }
        console.log(foodFound);
        return done(null, foodFound);
    });
};

const findPersonById = (personId, done) => {
    Person.findById({ _id: personId }, (err, idFound) => {
        if (err) {
            return done(err);
        }
        console.log(idFound);
        return done(null, idFound);
    });
};

const findEditThenSave = (personId, done) => {
    const foodToAdd = 'hamburger';
    Person.findById({ _id: personId }, (err, personFound) => {
        if (err) {
            return done(err);
        }
        personFound.favoriteFoods.push(foodToAdd);

        personFound.save((err, data) => {
            if (err) {
                return done(err);
            }
            return done(null, data);
        });
    });
};

const findAndUpdate = (personName, done) => {
    const ageToSet = 20;
    Person.findOneAndUpdate(
        { name: personName },
        { age: ageToSet },
        { new: true },
        (err, foundPerson) => {
            if (err) {
                return done(err);
            }
            done(null, foundPerson);
        }
    );
};

const removeById = (personId, done) => {
    Person.findByIdAndRemove({ _id: personId }, (err, docs) => {
        if (err) {
            return done(err);
        }
        console.log(docs);
        return done(null, docs);
    });
};

const removeManyPeople = (done) => {
    const nameToRemove = 'Mary';
    Person.remove({ name: nameToRemove }, (err, data) => {
        if (err) {
            return done(err);
        }
        console.log(data);
        return done(null, data);
    });
};

const queryChain = (done) => {
    const foodToSearch = 'burrito';
    Person.find({ favoriteFoods: foodToSearch })
        .sort({ name: 1 })
        .limit(2)
        .select({ age: 0 })
        .exec((err, data) => {
            if (err) {
                return done(err);
            }
            console.log(data);
            return done(null, data);
        });
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
