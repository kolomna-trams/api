/* kolomna-trams API */
/* https://github.com/kolomna-trams/api/ */

class ktAPI {

    static async __kt_api_get(endpoint, params = "") {
        let response;
        try {
            response = await fetch(`https://kolomna-trams.ru/api/${endpoint}?${params}`, {
                method: 'GET'
            });
        } catch (error) {
            throw new TypeError(error.message);
        }
        let r = await response.json();
        return r;
    }


    /**
     * __Тест API__  
     * Проверить, как работает API. Возвращает фразу "Мы любим наш трамвай" на всех языках, либо на указанном вами языке.
     * @param {string} lang - язык. Если параметр опущен, вывод будет содержать все языки
     * @param {string} [key=null] - ваш API-ключ
     */
    static async test(lang = null, key = null) {
        let params = [];
        if (lang) {
            params.push(`lang=${lang}`);
        }
        if (key) {
            params.push(`key=${key}`);
        }

        return await ktAPI.__kt_api_get("test", params.join("&"));
    }

    /**
     * __Получить тарифы__  
     * Получить тарифы (стоимость и способы оплаты) проезда на трамвае.
     * @param {string} [date=null] - дата, на которую необходимо получить тарифы, в формате ДД.ММ.ГГГГ. Если параметр опущен, будут показаны актуальные тарифы
     * @param {string} [payment_type=null] - способ оплаты. Если параметр опущен, возвращаются тарифы для всех способов оплаты
     * @param {string} [passenger_type=null] - тип пассажиров. Если параметр опущен, возвращаются тарифы для всех типов пассажиров
     * @param {boolean} [pricing_type=false] - только тарификация. Если задано true, вывод будет содержать только информацию о тарифах (без внешней "обертки"), что позволит упростить ваш код
     * @param {string} [key=null] - ваш API-ключ
     */
    static async get_fares(date = null, payment_type = null, passenger_type = null, pricing_type = false, key = null) {
        let params = [];
        if (date) {
            params.push(`date=${date}`);
        }
        if (payment_type) {
            params.push(`payment_type=${payment_type}`);
        }
        if (passenger_type) {
            params.push(`passenger_type=${passenger_type}`);
        }
        if (pricing_type) {
            params.push(`pricing_type=${pricing_type}`);
        }
        if (key) {
            params.push(`key=${key}`);
        }

        return await ktAPI.__kt_api_get("get_fares", params.join("&"));
    }

    /**
     * __Ближайшая остановка__  
     * Найти ближайшую трамвайную остановку по заданным координатам и получить информацию о ней.
     * @param {number} lat - Широта. Выражена дробным числом. Для Коломны широта варьируется в диапазоне примерно 55.05...55.10
     * @param {number} lon - Долгота. Выражена дробным числом. Для Коломны долгота варьируется в диапазоне примерно 38.75...38.80
     * @param {boolean} code_only - Только код. Если задано true, вывод будет содержать только код остановки (без информации о ней), что может упростить ваш код
     * @param {string} [key=null] - ваш API-ключ
     */
    static async find_nearby_stop(lat, lon, code_only = false, key = null) {
        let params = [];
        if (lat === undefined) {
            throw new Error("Parameter `lat` is not set.");
        }
        params.push(`lat=${lat}`);
        if (lon === undefined) {
            throw new Error("Parameter `lat` is not set.");
        }
        params.push(`lon=${lon}`);
        if (code_only) {
            params.push(`code_only=${code_only}`);
        }
        if (key) {
            params.push(`key=${key}`);
        }
        return await ktAPI.__kt_api_get("find_nearby_stop", params.join("&"));
    }

    /**
     * __Время__  
     * Получить время в Коломне (время часового пояса, в котором находится Коломна).
     * @param {string} [key=null] - ваш API-ключ
     */
    static async get_time(key = null) {
        let params = [];
        if (key) {
            params.push(`key=${key}`);
        }
        return await ktAPI.__kt_api_get("get_time", params.join("&"));
    }
}