ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [47.244729, 39.723196],
            zoom: 17,
			coordinates: [47.244729, 39.723196],
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
				coordinates: [47.244729, 39.723196],
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'SHOPPING CENTER DECORUM',
                hintContent: 'Россия, Ростов-на-Дону, улица Нансена, 239',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        })

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
      }
