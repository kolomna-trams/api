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
     * Проверить, как работает API. Возвращает фразу "Мы любим наш трамвай" на всех языках, либо на указанном вами языке
     * @param {string} lang - язык. Если параметр опущен, вывод будет содержать все языки
     * @param {string} key - ваш API-ключ
     */
    static async test(lang = null, key = null) {
        let params = [];
        if (lang) {
            params.push(`lang=${lang}`);
        }
        if (key) {
            params.push(`lang=${key}`);
        }

        return await this.__kt_api_get("test", params.join("&"));
    }
}