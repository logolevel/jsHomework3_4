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
	formCreate: function() {
		var cForm = document.createElement('form');
		cForm.setAttribute('id','testForm');
		cForm.setAttribute('action','#');
		document.body.appendChild(cForm);
	},
	//метод - создаём инпут
	inputCreate: function() {

		for( var i = 0; i < arrInput.length; i++) {
			var cLabel = document.createElement('label');
			cLabel.innerHTML = '<span>' + arrInput[i] + '</span>';
			cLabel.setAttribute('id','checkLabel');
			var cInput = document.createElement('input');
			cInput.setAttribute('type','checkbox');
			cInput.setAttribute('name','test-check');
			//вставляем инпут  на страницу
			testForm.appendChild(cLabel);
			cLabel.insertBefore(cInput, cLabel.firstChild);
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
domCreator.formCreate();
//вызываем метод для создания главного заголовка с параметрами
//имя тега, имя классв, текст внутри тега
domCreator.textCreate('h3','main-title','Тест по программированию');
//вызываем метод для создания заголовка для списка
//имя тега, имя классв, текст внутри тега
domCreator.textCreate('p','list-title','1. Вопрос №1');
//массив с текстом для инпутов
var arrInput = ['Вариант ответа №1','Вариант ответа №2','Вариант ответа №3'];
//вызываем метод для создания input
domCreator.inputCreate(arrInput);
//повторяем вызовы, только с другими параметрами
domCreator.textCreate('p','list-title','2. Вопрос №2');
domCreator.inputCreate(arrInput);
//повторяем ещё разок
domCreator.textCreate('p','list-title','2. Вопрос №2');
domCreator.inputCreate(arrInput);
//вызываем метод создания кнопки
domCreator.buttonCreate('btnInput','Hello');
