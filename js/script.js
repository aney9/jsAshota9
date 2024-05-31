let massiv = [];

function add(){
    const surname = document.getElementById("Surname");
    const name = document.getElementById("Name");
    const middlename = document.getElementById("Middlename");
    const fanid = document.getElementById("Fanid");
    const phone = document.getElementById("Phone");
    const sektor = document.getElementById("Sektor");
    const ryad = document.getElementById("Ryad");
    const mesto = document.getElementById("Mesto");

    const Surname = surname.value.trim();
    const Name = name.value.trim();
    const Middlename = middlename.value.trim();
    const Fanid = parseInt(fanid.value);
    const Phone = phone.value.trim();
    const Sektor = parseInt(sektor.value);
    const Ryad = parseInt(ryad.value);
    const Mesto = parseInt(mesto.value);

    if(!Surname || !Name || !Middlename || fanid <= 0 || !Phone || Sektor <= 0 || Ryad <= 0 || Mesto <= 0){
        alert('Ошибка ввода');
        return;
    }

    const tickets{
        Surname: Surname,
        Name: Name,
        Middlename: Middlename,
        Fanid: Fanid,
        Phone: Phone,
        Sektor: Sektor,
        Ryad: Ryad,
        Mesto: Mesto,
        displayInfo: function (){
            return 'Имя: $(this.Name) фамилия: $(this.Surname) отчество: $(this.Middlename) FanId: $(this.Fanid) Телефон: $(this.Phone) Сектор: $(this.Sektor) Ряд: $(this.Ryad) Место: $(this.Mesto)'
        }
    };

    massiv.push(tickets);


function update(){
    const list = document.getElementById('list');
    list.innerHTML = '';
    massiv.forEach(tickets, index) => {
        const li = document.createElement('li');
        li.classList.add('')


    }

}

}

