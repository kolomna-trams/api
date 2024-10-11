> **API сейчас в разработке.**  

# API Коломенских трамваев
Открытый API для доступа к данным о трамвайной системе города Коломны. Информация о маршрутах и расписании.

## Что это?
API Коломенских трамваев — это интерфейс программирования приложений, предоставляющий доступ к данным о трамвайной сети города Коломна. Этот API позволяет разработчикам и пользователям получать актуальную информацию о расписании, трамваев, маршрутах и других аспектах работы трамвайной системы.

API может пригодиться:

- Разработчикам мобильных и веб-приложений для создания сервисов на основании данных об общественном транспорте;
- Городским службам и исследователям для улучшения планирования транспортной инфраструктуры.

## Как получить доступ

Для начала работы с API Коломенских трамваев выполните следующие шаги:

1. Отправьте запрос на получение API-ключа по электронной почте: [mailbox@kolomna-trams.ru](mailto:mailbox@kolomna-trams.ru?Subject=API). Ключ выдается бессрочно. В письме укажите, для чего вы хотите использовать API.
2. После получения ключа используйте его для аутентификации при отправке запросов к API.
3. Ознакомьтесь [с документацией](https://github.com/kolomna-trams/api/wiki) по доступным функциям и параметрам запросов.

### Можно ли выполнять запросы без API-ключа?

Да, можно! Если наши сервера не нагружены, все запросы без API-ключа все равно будут выполняться без каких-либо ограничений. Однако, в случае повышенной нагрузки приоритет на выполнение API-запросов получат пользователи с API-ключом.

## Условия использования

- Не более 1000 запросов в сутки с одного API-ключа.
- Запрещено использование данных в коммерческих целях без специального разрешения.
- При использовании данных в публичных проектах необходимо указывать источник: [kolomna-trams.ru](https://kolomna-trams.ru/). Место и формат размещения ссылки не регламентируется.
- Запрещено создавать чрезмерную нагрузку на сервер путем отправки множества запросов за короткий промежуток времени.

Для использования API в коммерческих целях или с превышением лимита запросов, пожалуйста, укажите это в вашем электронном письме.