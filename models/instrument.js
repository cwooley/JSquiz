function createInstruments(){
  let id = 0
  return class {
    constructor(name, familyName){
      this.name = name
      if (Family.findByName(familyName)){
        this.familyID = Family.findByName(familyName).id
      } else {
        let family = new Family(familyName)
        this.familyID = family.id
      }
      this.id = ++id
      store.instruments.push(this)
    }

    makeLi(){
      let family = Family.findById(this.familyID)
      return `<li> ${this.name} </li>`
    }
  }
}
let Instrument = createInstruments()
