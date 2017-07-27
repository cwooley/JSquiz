store = {instruments:[], families:[]}

$( document ).ready(function(){
  renderFamilies()
  $('.makeInstrument').on('submit', function(event){
    event.preventDefault()
    instrumentName = $('#instrumentName').val()
    familyName = $('#familyName').val()
    instrument = new Instrument(instrumentName, familyName)
    renderFamilies()
  })
})

function renderFamilies(){
  let familyHTML = store.families.map((f)=>{
    return f.makeDiv()
  }).join(' ')
  $('#families-go-here').empty()
  $('#families-go-here').append(familyHTML)
}
