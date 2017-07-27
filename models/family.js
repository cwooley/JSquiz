function createFamilys(){
  let id = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++id
      store.families.push(this)
    }
    static findByName(name){
      let found = store.families.filter((family)=>{
        return family.name === name
      })[0]
      if (found){
        return found
      } else {
        return false
      }
    }

    static findById(id){
      let found = store.families.filter((family)=>{
        return family.id === id
      })[0]
      if (found){
        return found
      } else {
        return false
      }
    }
    
    getInstruments(){
       let instruments = store.instruments.filter((i)=>{
        return i.familyID === this.id
      })
      return instruments
    }

    makeDiv(){
      let instrumentsHTML = this.getInstruments().map((i)=>{
        return i.makeLi()
      }).join(' ')
      return `<div id="${this.name}">
                <h4>${this.name}</h4>
                  <ul id="${this.name}-instruments">
                      ${instrumentsHTML}
                  </ul>
              </div>`
    }
  }
}
let Family = createFamilys()
