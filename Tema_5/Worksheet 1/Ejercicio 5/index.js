let addimage = () => {
    let list = document.getElementById('subirimagenes');
    let newEntry = document.createElement('input');
    newEntry.type = 'file';
    newEntry.name = 'imagen[]';
    newEntry.accept = 'image/*';
    list.appendChild(newEntry);
};
document.getElementById("addimage").addEventListener("click", addimage);
