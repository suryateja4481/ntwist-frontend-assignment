// Add click event listener to the sort button
document.getElementById('sortBtn').addEventListener('click', function() {
  // Get the unordered list element containing the names
  const list = document.getElementById('nameList');
  
  // Convert the list items to an array for sorting
  const items = Array.from(list.querySelectorAll('li'));
  
  // Sort the items alphabetically using localeCompare for proper string comparison
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  
  // Clear the current list content
  list.innerHTML = '';
  
  // Append each sorted item back to the list
  items.forEach(item => list.appendChild(item));
});



