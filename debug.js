document.addEventListener('appReady', () => {
    // Проверка наличия основного состояния приложения
    if (!window.APP_STATE) {
        console.error('DEBUG: Main app state (window.APP_STATE) не найдено. Ошибка в app.js.');
        return;
    }

    let activeMode = null; // Режим: 'stabilizationPoint' или 'flashPoint'
    const { wrapperBg, phoneImage } = window.APP_STATE;

    /**
     * Обработчик клика по изображению
     */
    function handleImageClick(event) {
        if (!activeMode) return;

        event.stopPropagation();

        // Получаем размеры и позицию изображения на экране
        const rect = phoneImage.getBoundingClientRect();

        // Проверяем, попал ли клик именно в границы картинки
        if (
            event.clientX < rect.left || 
            event.clientX > rect.right || 
            event.clientY < rect.top || 
            event.clientY > rect.bottom
        ) {
            return;
        }

        // Вычисляем координаты в процентах
        const xPos = event.clientX - rect.left;
        const yPos = event.clientY - rect.top;
        const xPercent = ((xPos / rect.width) * 100).toFixed(2);
        const yPercent = ((yPos / rect.height) * 100).toFixed(2);

        // Получаем данные из основного приложения
        const { phones, phoneSelect, updatePhone } = window.APP_STATE;
        const currentPhoneKey = phoneSelect.value;

        // Обновляем временные данные в памяти
        phones[currentPhoneKey][activeMode] = {
            x: xPercent + '%',
            y: yPercent + '%'
        };

        // Визуально обновляем телефон (чтобы точка применилась сразу)
        updatePhone();

        // Формируем строку кода для копирования
        const generatedCode = 
            `'${currentPhoneKey}': {\n` +
            `    image: '${phones[currentPhoneKey].image}',\n` +
            `    stabilizationPoint: { x: '${phones[currentPhoneKey].stabilizationPoint.x}', y: '${phones[currentPhoneKey].stabilizationPoint.y}' },\n` +
            `    flashPoint: { x: '${phones[currentPhoneKey].flashPoint.x}', y: '${phones[currentPhoneKey].flashPoint.y}' }\n` +
            `},`;

        console.log('Скопируйте этот код и обновите объект \'phones\' в app.js:\n\n', generatedCode);

        alert(
            `Точка для "${currentPhoneKey}" (${activeMode}) установлена!\n` +
            `Код для вставки выведен в консоль разработчика (F12).`
        );

        // Выключаем режим после установки точки
        off();
    }

    /**
     * Активация режима выбора точки
     */
    function setMode(mode) {
        activeMode = mode;
        wrapperBg.style.cursor = 'crosshair';
        console.log(
            `%c[DEBUG] Режим "${mode}" активирован. Кликните на нужную точку на телефоне.`, 
            'color: lime; font-weight: bold;'
        );
    }

    // Глобальные функции для вызова из консоли браузера
    window.camera = () => setMode('stabilizationPoint');
    window.flash = () => setMode('flashPoint');
    
    window.off = function() {
        if (activeMode) {
            activeMode = null;
            wrapperBg.style.cursor = 'default';
            console.log('%c[DEBUG] Режим отладки выключен.', 'color: red; font-weight: bold;');
        }
    };

    // Слушаем клики на фоне (через захват)
    wrapperBg.addEventListener('click', handleImageClick, true);

    console.log(
        '%c[DEBUG] Утилиты отладки загружены. Введите camera() или flash() для начала, off() для выключения.', 
        'color: cyan;'
    );
});