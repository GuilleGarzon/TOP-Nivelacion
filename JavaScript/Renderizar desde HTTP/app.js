$button = document.querySelector('button');
$table = document.querySelector('.hide');

$button.addEventListener('click', function () {
    fetch('https://s3.amazonaws.com/makeitreal/countries.json')
        .then (response => response.json() )
        .then (data => {
            data.forEach(element => {
                $tr = document.createElement('tr');
                $tdCode = document.createElement('td');
                $tdName = document.createElement('td');
                $tdFlag = document.createElement('td');

                $tdCode.textContent = element.code;
                $tdName.textContent = element.name;
                $tdFlag.innerHTML = `<img src="${element.flag_url}" />`;

                $tr.appendChild($tdCode);
                $tr.appendChild($tdName);
                $tr.appendChild($tdFlag);

                $table.appendChild($tr);

            });
        })

        $button.classList.add('hide');
        $table.classList.remove('hide');

    }); 