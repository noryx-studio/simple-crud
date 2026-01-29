import { Request, Response } from 'express';
import Person from '../models/person';

export const getPersons = async (req: Request, res: Response) => {
  const Persons = await Person.find();
  res.json(Persons);
};

export const createPerson = async (req: Request, res: Response) => {
  const newPerson = new Person(req.body);
  const savedPerson = await newPerson.save();
  res.status(201).json(savedPerson);
};

export const updatePerson = async (req: Request, res: Response) => {
  const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPerson);
};

export const deletePerson = async (req: Request, res: Response) => {
  await Person.findByIdAndDelete(req.params.id);
  res.status(204).send();
};