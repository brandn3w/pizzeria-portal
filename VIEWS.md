# Dashboard
- `/`

- statystyki dzisiejszych zamowień (zdalne i lokalne)
- lista zaplanowanych na dzisiaj rezerwacji i eventów

# Logowanie

- `/login`

- pola na login i hasło
- guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables` 
- wybór daty i godziny
- tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna będzie stolikiem, a wiersz będzie blokiem 30 minut
    - tabela będzie przypominać widok tygodnia w kalendarzu google gdzie w kolumnach zamiast dni sa stoliki
    - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów

- `/tables/booking/:id`
- zawiera informacje dotyczące rezerwacji
- umożliwia edycję i zapisanie zmian

- `/tables/booking/new`
- analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
- analogicznie do powyższej, bez początkowych informacji
- `/tables/events/new`
- analogicznie do powyższej, bez początkowych informacji

# Widok kelnera

- `/waiter`
- tabela, która w ierszach będzie wyświetlała stoliki, w kolumnach różne rodzaje informacji, np. status stolika, czas od ostatniej aktywności
- w ostatniej kolumnie sa dostępne akcje dla stolika
- `/waiter/order/new`
- numer stolika, edytowalny
- menu produktow dostępnych w naszej restauracji
- opcje produktu
- zamównienie (produkty z opcjami i ceną)
- kwota zamówienia
- `/waiter/order/:id`
- jak powyższa

# Widok kuchni

- `/kitchen`
- wyświetlanie listy zamówień w kolejności ich złożenia
- lista musi zawierać numer stolika lub zamowienia zdalnego 
- pełne informacje dot.. zamówionych dań
- możliwość oznaczenia zamowienia jako zrealizowane