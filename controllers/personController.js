const Person = require('../models/Person');

// GET all people
exports.getAllPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create a person
exports.createPerson = async (req, res) => {
  try {
    const person = new Person(req.body);
    await person.save();
    res.status(201).json(person);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update a person
exports.updatePerson = async (req, res) => {
  try {
    const updated = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a person
exports.deletePerson = async (req, res) => {
  try {
    const deleted = await Person.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Person not found' });
    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
