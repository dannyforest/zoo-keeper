// TODO: Split this file into multiple class files

export class Animal {

}

export class Habitat {

}

export class ZooKeeper {

}

export class Zoo {
    animals: Animal[] = [];
    habitats: Habitat[] = [];
    zooKeepers: ZooKeeper[] = [];


    //
    // Animal Methods

    addNewAnimal(animal: Animal): boolean {
        return true; // TODO
    }
    removeAnimal(animal: Animal): boolean {
        return true; // TODO
    }
    viewAnimals(): Animal[] {
        return []; // TODO
    }
    getAnimalFromId(id: string): Animal {
        return new Animal(); // TODO: Retrieve from list
    }


    //
    // Habitat Methods

    addNewHabitat(habitat: Habitat): boolean {
        return true; // TODO
    }
    removeHabitat(habitat: Habitat): boolean {
        return true; // TODO
    }
    viewHabitats(): Habitat[] {
        return []; // TODO
    }
    getHabitatFromId(id: string): Animal {
        return new Habitat(); // TODO: Retrieve from list
    }
    addAnimalToHabitat(animal: Animal, habitat: Habitat): boolean {
        return true; // TODO
    }


    //
    // Zookeeper Methods

    hireZookeeper(zookeeper: ZooKeeper): boolean {
        return true; // TODO
    }
    fireZookeeper(zookeeper: ZooKeeper): boolean {
        return true; // TODO
    }
    viewAllZookeepers(): ZooKeeper[] {
        return []; // TODO
    }
    assignZookeeperToHabitat(zookeeper: ZooKeeper, habitat: Habitat): boolean {
        return true; // TODO
    }


    //
    // Zoo Methods

    showReport(): void {
        // TODO: log anything that would be helpful for a Zoo manager to know
    }
}