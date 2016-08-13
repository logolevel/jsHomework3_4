//создаём объект
var domCreator = {
	//метод - создаём заголовок
	textCreate: function(textTagName, textClass, textText) {
		//присваиваем переменной DOM элемент-заголовок
		var cTitle = document.createElement(textTagName);
		cTitle.classList = textClass;
		cTitle.innerHTML = textText;
		//вставляем DOM элемент в тег с формой
		testForm.appendChild(cTitle);
	},
	//метод - создаём форму
	formCreate: function(formClass) {
		var cForm = document.createElement('form');
		cForm.classList = formClass;
		cForm.setAttribute('id','testForm');
		cForm.setAttribute('action','#');
		document.body.appendChild(cForm);
	},
	//метод - создаём инпут
	inputCreate: function(idForCheck) {
		//т.к. ul нам нужен один раз, выводим его вне цикла
		var cList = document.createElement('ul');
		testForm.appendChild(cList);
		//выводим несколько раз однотипные инпуты, но с разными id
		for( var i = 0; i < arrInput.length; i++) {
			var cItem = document.createElement('li');
			var cInput = document.createElement('input');
			cInput.setAttribute('id', idForCheck + i);
			cInput.setAttribute('type','checkbox');
			cInput.setAttribute('name','test-check');
			var cLabel = document.createElement('label');
			cLabel.innerHTML = arrInput[i];
			cLabel.setAttribute('for', idForCheck +i);
			//вставляем инпут  на страницу
			cList.appendChild(cItem);
			cItem.appendChild(cInput);
			cItem.appendChild(cLabel);
		}
	},
	buttonCreate: function(btnClass,btnValue) {
		var cButton = document.createElement('input');
		cButton.classList = btnClass;
		cButton.setAttribute('type','submit');
		cButton.setAttribute('value',btnValue);
		testForm.appendChild(cButton);
	}
};

//вызываем метод создания формы
domCreator.formCreate('forma');
//вызываем метод для создания главного заголовка с параметрами
//имя тега, имя классв, текст внутри тега
domCreator.textCreate('h3','main-title','Тест по программированию');
//вызываем метод для создания заголовка для списка
//имя тега, имя классв, текст внутри тега
domCreator.textCreate('p','list-title','1. Вопрос №1');
//массив с текстом для инпутов
var arrInput = ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
//вызываем метод для создания первых input
domCreator.inputCreate('firstListInput',arrInput);
//повторяем вызовы, только с другими параметрами, чтобы поменять id для input
domCreator.textCreate('p','list-title','2. Вопрос №2');
domCreator.inputCreate('secondListInput',arrInput);
//повторяем ещё разок
domCreator.textCreate('p','list-title','2. Вопрос №2');
domCreator.inputCreate('thirdListInput',arrInput);
//вызываем метод создания кнопки
domCreator.buttonCreate('btnInput','Проверить мои результаты');
