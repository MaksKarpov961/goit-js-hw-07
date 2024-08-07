
const totalCategories = document.querySelectorAll(".item")

console.log("Number of categories:", totalCategories.length)



totalCategories.forEach(category => {
  const header = category.querySelector("h2").textContent
  const items = category.querySelectorAll("ul li").length

  console.log("Category:", header);
  console.log("Elements:", items);
  
  
})