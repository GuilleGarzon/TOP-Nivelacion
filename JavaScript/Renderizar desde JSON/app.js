const json = `[
    { "code": "CO", "name": "Colombia", "flag_url": "https://s3.amazonaws.com/makeitreal/co.gif" },
    { "code": "PE", "name": "Perú", "flag_url": "https://s3.amazonaws.com/makeitreal/pe.gif" },
    { "code": "EC", "name": "Ecuador", "flag_url": "https://s3.amazonaws.com/makeitreal/ec.gif" },
    { "code": "BO", "name": "Bolivia", "flag_url": "https://s3.amazonaws.com/makeitreal/bo.gif" }
  ]`;
  
  // Escribe tu solución acá

const $button = document.querySelector('button');
const $table = document.querySelector('.hide');

$button.addEventListener('click', function () {  
    const countries = JSON.parse(json);    
    
    countries.forEach(country => {
      
    const $tr = document.createElement('tr');
    const $tdCode = document.createElement('td');
    const $tdName = document.createElement('td');
    const $tdFlag = document.createElement('td');
   
    $tdCode.textContent = country.code;
    $tdName.textContent = country.name;
    $tdFlag.innerHTML = `<img src="${country.flag_url}" />`;
       
    $tr.appendChild($tdCode);
    $tr.appendChild($tdName);
    $tr.appendChild($tdFlag);

    $table.appendChild($tr);

    
    });

    $table.classList.remove("hide");
    $button.classList.add("hide");
})