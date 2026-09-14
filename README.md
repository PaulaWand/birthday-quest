# Birthday Quest — Paula & Hania

Jednorazowa, darmowa strona do tworzenia postaci na wspólne urodziny.

## Wydarzenie
- 24 października 2026
- przed zachodem słońca
- Targowisko

## Co jest już zrobione
- formularz cosplayu i uniwersum,
- 6 pikselowych obrysów postaci,
- ręczne kolorowanie piksel po pikselu (mysz / dotyk),
- własny kolor, wypełnienie, gumka, undo/redo, ochrona konturu,
- imię bohatera, tytuł, klasa z opcją własnej i lore,
- podgląd postaci bez spoilerowania mechaniki gry,
- spersonalizowane zaproszenie PNG,
- generator karty postaci,
- tryb testowy przez `?test=1` — pokazuje dodatkowo możliwość pobrania karty testowej.

## Karta postaci
- Bez nazw etapów quizu — uczestnicy widzą wyłącznie rundy 1–6.
- Rundy 1–5: po 5 pól XP.
- Runda 6: 12 pól XP.
- Maksymalny wynik: 37 XP.
- Mana: 3 niebieskie punkty startowe + 1 pusty punkt Secret Quest.
- Przyniesienie wydrukowanego zaproszenia odblokowuje dodatkowy punkt Many, nie XP.
- Statystyki są uzupełniane dopiero podczas imprezy.

Tracker XP na karcie:

1. □ □ □ □ □
2. □ □ □ □ □
3. □ □ □ □ □
4. □ □ □ □ □
5. □ □ □ □ □
6. □ □ □ □ □  □ □ □ □ □  □ □

TOTAL: 37 XP

## Tryby
- normalny: `/birthday-quest/`
- testowy: `/birthday-quest/?test=1`

## Mail
Kod ma przygotowane miejsce na endpoint do wysyłki. Automatyczny mail do organizatorki zostanie podłączony w kolejnym kroku przez Google Apps Script. Adres e-mail nie będzie zapisany w publicznym repozytorium.
