<?php
    /* kolomna-trams API */
    /* https://github.com/kolomna-trams/api/ */

    final class ktAPI
    {
        private $Key;

        /**
         * API Коломенского трамвая.  
         * Документация: https://github.com/kolomna-trams/api/wiki
         * @param string|null $key Ваш API-ключ 
         */
        public function __construct(?string $key = null)
        {
            $this->Key = $key;
        }

        private function __kt_api_get(string $method, string $params = "")
        {
            $url = "https://kolomna-trams.ru/api/$method?$params";
            $response = file_get_contents($url);
            return json_decode($response, true);
        }

        /**
         * __Тест API__  
         * Проверить, как работает API. Возвращает фразу "Мы любим наш трамвай" на всех языках, либо на указанном вами языке.  
         * Документация: https://github.com/kolomna-trams/api/wiki/test
         * @param string|null $lang Язык. Если параметр опущен, вывод будет содержать все языки
         */
        public function test(?string $lang = null)
        {
            $params = [];
            if (isset($lang)) {
                $params[] = "lang={$lang}";
            }
            if (isset($this->Key)) {
                $params[] = "key={$this->Key}";
            }
            return $this->__kt_api_get("test", implode("&", $params));
        }
    }
    

?>