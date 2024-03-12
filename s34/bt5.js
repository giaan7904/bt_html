var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

        var ul = document.createElement('ul');

        for (var i = 0; i < names.length; i++) {
            var li = document.createElement('li');
            li.textContent = names[i];
            ul.appendChild(li);
        }

        document.body.appendChild(ul);
