"use strict";
// TODO: Split this file into multiple class files
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = exports.ZooKeeper = exports.Habitat = exports.Animal = void 0;
class Animal {
}
exports.Animal = Animal;
class Habitat {
}
exports.Habitat = Habitat;
class ZooKeeper {
}
exports.ZooKeeper = ZooKeeper;
class Zoo {
    constructor() {
        this.animals = [];
        this.habitats = [];
        this.zooKeepers = [];
    }
    //
    // Animal Methods
    addNewAnimal(animal) {
        return true; // TODO
    }
    removeAnimal(animal) {
        return true; // TODO
    }
    viewAnimals() {
        return []; // TODO
    }
    getAnimalFromId(id) {
        return new Animal(); // TODO: Retrieve from list
    }
    //
    // Habitat Methods
    addNewHabitat(habitat) {
        return true; // TODO
    }
    removeHabitat(habitat) {
        return true; // TODO
    }
    viewHabitats() {
        return []; // TODO
    }
    getHabitatFromId(id) {
        return new Habitat(); // TODO: Retrieve from list
    }
    addAnimalToHabitat(animal, habitat) {
        return true; // TODO
    }
    //
    // Zookeeper Methods
    hireZookeeper(zookeeper) {
        return true; // TODO
    }
    fireZookeeper(zookeeper) {
        return true; // TODO
    }
    viewAllZookeepers() {
        return []; // TODO
    }
    assignZookeeperToHabitat(zookeeper, habitat) {
        return true; // TODO
    }
    //
    // Zoo Methods
    showReport() {
        // TODO: log anything that would be helpful for a Zoo manager to know
    }
}
exports.Zoo = Zoo;
