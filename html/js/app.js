/* Добавляем событие движения мыши. */
document.addEventListener('mousemove', e => {
	/* Чтобы передать текущую позицию курсора, можно использовать Object.assign(),
	который позволяет применить нужные параметры элементу. 
	В нашем случае мы применяем к элементу докуменента (::root) инлайновые стили (с помощью style),
	а именно - переменные (c помощью "$") "--move-x" и "--move-y", где вычисляем значения наших переменных.
	e.clientX и e.clientY берут позицию курсора по осям X и Y. */
	Object.assign(document.documentElement, {
		/* (e.clientX - window.innerWidth / 2) получает центр по оси X делением ширины экрана на 2, а
		(e.clientY - window.innerHeight / 2) получает центр по оси Y делением высоты экрана на 2. 
		Потом мы умножаем на определённые значения, чтобы замедлить движение картинки.
		Чем меньше значение, тем медленее происходит движение картинки.
		С помощью отрицательного мы меняем наклон в обратную сторону.
		Также, значения переменных будут храниться в градусах. */
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})
