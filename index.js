

let myLeads = []
const inputEl = document.getElementById("input-el") 
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn=document.getElementById("save-tab")



if(LeadsFromLocalStorage){
  myLeads = LeadsFromLocalStorage
  renderLeads()
}
 tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
 })

  })
  

  




function render(Leads){
  let listItems = ""

  for (let i=0;i<Leads.length;i++){
      //listItems += "<li><a  target = '_blank' href= '" + myLeads[i] +"'>" +  myLeads[i] + "</a></li> "
      listItems += `
      <li>
      <a  target = '_blank' href= '  ${Leads[i]} '>  ${Leads[i]} </a>
      </li> `
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener('dblclick',function(){
  console.log("doube clicked")
  localStorage.clear()
  myLeads=[]
  render(myLeads)
})

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    render(myLeads)
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    
})


