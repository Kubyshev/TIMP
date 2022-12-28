var groupmates = [
    {
        "name": "Никита",
        "surname": "Минеев",
        "group": "БИБ2102",
        "marks": [4,4,4]

    },

    {
        "name": "Даниил",
        "surname": "Сарачев",
        "group": "БИБ2102",
        "marks": [5,3,5]

    },

    {
        "name": "Дмитрий",
        "surname": "Вахтин",
        "group": "БИБ2102",
        "marks": [5,4,5]
    },

    {
        "name": "Пётр",
        "surname": "Стрельников",
        "group": "БИБ2102",
        "marks": [3,4,3]
    },

    {
        "name": "Ульяна",
        "surname": "Филиппова",
        "group": "БИБ2102",
        "marks": [5,5,5]
    },

    {
        "name": "Иван",
        "surname": "Морозов",
        "group": "БИБ2102",
        "marks": [3,3,3]
    },

    {
        "name": "Егор",
        "surname": "Маслов",
        "group": "БИБ2102",
        "marks": [4,4,3]
    },
]

var rpad = function(str, length) {
	str = str.toString(); // преобразование в строку
	while (str.length < length)
		str = str + ' '; // добавление пробела в конец строки return str; 
    return str;
};

var printStudents = function(students){ 
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
	);
	// был выведен заголовок таблицы
	for (var i = 0; i<=students.length-1; i++){
	// в цикле выводится каждый  студент 
		console.log(
			rpad(students[i]['name'], 15),
			rpad(students[i]['surname'], 15),
			rpad(students[i]['group'], 8),
			rpad(students[i]['marks'], 20)
		);
	}
	console.log('\n'); // добавляется пустая строка в конце вывода
};

var filtration_group = function(students, input) {
	var lst = [];
	for (var i = 0; i < students.length; i++) {
		if (students[i]["group"] == input) lst.push(students[i]);
	}
	return lst;
}

var filtration_marks = function(students, input) {
	var lst = [];
	for (var i = 0; i < students.length; i++) {
		if (students[i]["marks"][0] + students[i]["marks"][1] + students[i]["marks"][2] / 3 > input) 
			lst.push(students[i])
	}
	return lst;
}
var input_group = prompt('Введите группу'), input_mark = prompt('Введите оценку');
var filter_group = filtration_group(groupmates, input_group);
var filter_marks = filtration_marks(groupmates, input_mark); 
printStudents(filter_group);
printStudents(filter_marks);