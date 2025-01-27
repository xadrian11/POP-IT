POP-IT Website
Opis projektu
Ten projekt przedstawia prostą stronę internetową zaprojektowaną w stylu desktop-first, z zaimplementowaną architekturą BEM i responsywnym menu hamburgerowym. Strona została dostosowana do widoku na rozdzielczość 1300 x 1080 px, z możliwością działania na urządzeniach mobilnych do szerokości 800 px w którym widoczne jest menu hamburgerowe 

Technologie
Do stworzenia projektu użyte zostały następujące technologie i koncepcje:

HTML5
CSS3:
Podział na sekcje zgodny z architekturą BEM.
Stylowanie z użyciem jednostek rem i px.
Użycie layoutów takich jak display: block, flexbox, oraz position: relative.
JavaScript:
Obsługa menu hamburgerowego, które wyświetla się na urządzeniach o rozdzielczości do 800 px i rozwija/zwija menu nawigacyjne.
Funkcjonalności
Widok desktopowy:

Główna rozdzielczość to 1300 x 1080 px.
Stałe menu nawigacyjne na górze strony.
Stylowanie z podziałem na sekcje przy użyciu architektury BEM.
Widok mobilny:

Menu nawigacyjne jest zastąpione menu hamburgerowym poniżej 800 px.
Po kliknięciu w przycisk hamburgera wyświetlane jest rozwijane menu.
Struktura projektu
Sekcje w CSS
Projekt został podzielony na logiczne sekcje w plikach CSS, zgodnie z zasadami architektury BEM:

header: Nagłówek strony, zawiera logo oraz menu nawigacyjne.
menu: Menu nawigacyjne oraz jego mobilna wersja (hamburger menu).
content: Główna część strony z treścią.
footer: Stopka strony.
Użyte techniki
Flexbox:
Używany do tworzenia elastycznych układów w sekcjach, takich jak nawigacja czy kontenery treści.
Position: relative:
Używany do pozycjonowania elementów względem ich rodziców, np. przy stylizowaniu elementów nawigacyjnych.
Display: block:
Użyty tam, gdzie wymagane były blokowe elementy (np. linki czy kontenery sekcji).

Jak uruchomić projekt
git clone https://github.com/xadrian11/POP-IT.git
Otwórz plik index.html w przeglądarce.


