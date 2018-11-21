class Thing implements Comparable {
  private name: string;
  private completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }


  compareTo(other: Thing) {
    
  }
}

interface Comparable {
  compareTo(other: Comparable): number;
  
}

export { Thing };