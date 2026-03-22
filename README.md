#  Budget Tracker

Aplikacija Budget Tracker predstavlja web sistem namenjen upravljanju ličnim finansijama i organizaciji budžeta. Njena osnovna svrha je da korisnicima omogući bolju kontrolu nad prihodima i rashodima, kao i jasniji pregled sopstvene potrošnje. U svakodnevnoj praksi mnogi ljudi ne vode sistematsku evidenciju o troškovima ili koriste jednostavne metode poput beleženja u Excel tabelama ili oslanjanja na pamćenje. Takav pristup često dovodi do nedostatka kontrole nad novcem, prekomerne potrošnje i otežanog planiranja štednje. Budget Tracker omogućava centralizovano vođenje svih finansijskih podataka, čime korisnik dobija pregledan i uvek ažuriran uvid u svoje finansijsko stanje.

![Logo](./assets/images/logo.png)


Logotip aplikacije Budget Tracker izrađen je u alatu draw.io korišćenjem kombinacije osnovnih geometrijskih oblika i funkcija za poravnanje i stilizaciju elemenata. Proces izrade započet je kreiranjem centralnog grafičkog simbola koji ima oblik kvadrata sa zaobljenim ivicama, čime je postavljena osnovna struktura logotipa. Unutar ovog kvadratnog okvira raspoređeni su različiti oblici koji zajedno formiraju apstraktni simbol. U gornjem levom delu postavljen je tamno plavi trougaoni oblik, dok se u gornjem desnom delu nalazi svetlo plavi pravougaoni oblik sa zaobljenom ivicom, koji je kreiran korišćenjem opcije za zaobljene uglove u draw.io alatu. Donji desni deo kvadrata sadrži još jedan tamno plavi trougaoni element koji je simetrično pozicioniran u odnosu na gornji levi deo, čime se postiže vizuelna ravnoteža i dinamičan izgled logotipa. U donjem levom delu nalazi se crveni kružni element kreiran pomoću ellipse oblika, koji predstavlja centralni vizuelni akcenat i doprinosi kontrastu u odnosu na plave tonove. 
Nakon definisanja grafičkog simbola, sa njegove desne strane dodat je tekstualni deo logotipa koji sadrži naziv aplikacije „Budget Tracker“, napisan modernim sans-serif fontom. Reč „Budget“ prikazana je u tamnijoj plavoj nijansi, dok je reč „Tracker“ u svetlijoj plavoj boji, čime se postiže jasna vizuelna hijerarhija i usklađenost sa bojama grafičkog simbola. Na kraju su svi elementi precizno poravnati pomoću opcija za poravnanje i raspored objekata u draw.io alatu, zatim grupisani u jednu celinu i eksportovani kao slika sa transparentnom pozadinom kako bi logotip mogao da se koristi u različitim delovima web aplikacije, poput zaglavlja stranice, početnog ekrana i drugih vizuelnih elemenata sistema.
Glavni cilj sistema je da korisnicima pruži jednostavan i intuitivan alat za organizaciju ličnih finansija. Aplikacija omogućava evidentiranje različitih finansijskih računa, kao što su tekući račun, kartica ili gotovina. Pored toga, korisnici mogu planirati mesečne budžete po određenim kategorijama, na primer za hranu, stanovanje ili zabavu, kao i beležiti sve finansijske transakcije koje obuhvataju prihode i rashode. Na osnovu unetih podataka moguće je pratiti koliko se stvarna potrošnja uklapa u planirani budžet, što olakšava donošenje finansijskih odluka i dugoročno planiranje troškova.
Sistem dodatno pruža i pomoćne funkcionalnosti koje doprinose boljem planiranju finansija. Jedna od njih je prikaz kalendara sa obeleženim državnim praznicima, što korisnicima može pomoći u organizaciji troškova tokom meseca. Takođe, aplikacija podržava prikaz finansijskih iznosa u više valuta. Iako se podaci u bazi čuvaju u originalnoj valuti računa, korisnik može da odabere željenu valutu prikaza, pri čemu se konverzija vrši putem integracije sa javnim API-jem za kursne liste. Na taj način korisnik može da pregleda sve finansijske podatke u jedinstvenoj valuti bez izmene stvarnih vrednosti u sistemu.
Sa funkcionalne strane, sistem omogućava registraciju i prijavu korisnika, nakon čega korisnik dobija pristup sopstvenom finansijskom okruženju. U okviru aplikacije moguće je kreirati, menjati ili brisati finansijske naloge, definisati budžete za određene kategorije i vremenske periode, kao i upravljati transakcijama. Pregled podataka je organizovan kroz liste koje podržavaju filtriranje i sortiranje, što omogućava lakšu analizu potrošnje i brže pronalaženje relevantnih informacija.
Ciljna grupa korisnika aplikacije su pre svega fizička lica koja žele da prate i organizuju sopstveni ili porodični budžet. Posebno je korisna studentima i mladim ljudima koji tek počinju samostalno da upravljaju svojim finansijama, kao i korisnicima koji imaju više finansijskih računa i žele da objedine sve informacije na jednom mestu.
 
Pored standardnih korisnika, sistem predviđa i posebnu administrativnu ulogu. Administrator nije tipičan krajnji korisnik aplikacije, već osoba zadužena za održavanje osnovnih sistemskih podataka. Njegova glavna odgovornost je upravljanje kategorijama koje se koriste u sistemu, što uključuje njihovo kreiranje, izmenu i brisanje. Sve definisane kategorije dostupne su registrovanim korisnicima i koriste se prilikom unosa transakcija i planiranja budžeta. 

---

## Funkcionalnosti:

### Korisnik
Registrovani korisnik je osnovni tip korisnika aplikacije koji ima kreiran nalog i može da se prijavi na sistem. Nakon uspešne autentifikacije, korisniku postaju dostupne sve glavne funkcionalnosti aplikacije koje se odnose na upravljanje ličnim finansijama.
Ovaj korisnik može da kreira i upravlja svojim finansijskim nalozima, definiše budžete po kategorijama i vremenskim periodima, kao i da evidentira transakcije (prihode i rashode). Pored toga, omogućeno mu je da menja i briše postojeće podatke, kao i da analizira svoje finansije putem pregleda, filtriranja i sortiranja transakcija. Takođe, može da koristi dodatne funkcionalnosti kao što su promena valute prikaza i pregled kalendara sa državnim praznicima.
Ipak, njegova prava su ograničena isključivo na sopstvene podatke. Ne može da pristupi podacima drugih korisnika niti da vrši izmene nad njima. Takođe, nema mogućnost upravljanja sistemskim kategorijama niti pristup administrativnim opcijama. Podaci koje vidi (uključujući i informacije sa eksternih API servisa) dostupni su mu samo u okviru njegovog korisničkog interfejsa.

![Ekran1](./assets/images/screen1.png)
![Ekran2](./assets/images/screen2.png)

| Oblast | Mogućnosti |
|--------|-----------|
| Autentifikacija | Registracija, prijava i odjava sa sistema |
| Finansijski nalozi | Kreiranje, pregled i upravljanje sopstvenim nalozima |
| Budžeti | Kreiranje, izmena, brisanje i pregled budžeta |
| Transakcije | Unos, izmena, brisanje i analiza transakcija |
| Analiza podataka | Filtriranje, sortiranje i pregled finansijskih podataka |
| Dodatne funkcije | Promena valute prikaza, pregled praznika i kalendara |

| Ograničenja | Opis |
|-------------|------|
| Pristup drugim korisnicima | Nije dozvoljen |
| Administrativne funkcije | Nisu dostupne |
| Upravljanje kategorijama | Nije dozvoljeno |

| Podaci | Opis |
|--------|------|
| Sopstveni podaci | Potpun pristup |
| Sistemske kategorije | Samo pregled |
| Eksterni API podaci | Dostupni kroz UI |

### Administrator
Administrator predstavlja posebnu korisničku ulogu sa proširenim privilegijama u sistemu. Njegova osnovna odgovornost odnosi se na upravljanje kategorijama koje se koriste u aplikaciji. Administrator može da kreira nove kategorije, menja postojeće i uklanja one koje više nisu potrebne, čime utiče na strukturu podataka koju koriste svi korisnici.
Iako ima viši nivo pristupa u odnosu na standardnog korisnika, administrator je i dalje ograničen u radu sa osetljivim podacima. Nije mu dozvoljeno da direktno menja lozinke korisnika niti da proizvoljno manipuliše njihovim finansijskim podacima. Takođe, mora poštovati pravila privatnosti i bezbednosti sistema.
Kada je u pitanju pristup podacima, administrator ima uvid u sistemske informacije i konfiguraciju aplikacije, kao i mogućnost upravljanja kategorijama. Finansijski podaci korisnika mogu mu biti dostupni samo u agregiranom obliku ili kroz posebno definisane administrativne prikaze, u skladu sa pravilima zaštite podataka.

![Ekran3](./assets/images/screen3.png)

| Oblast | Opis |
|--------|------|
| Primarna uloga | Upravljanje sistemskim kategorijama |
| Dozvoljene akcije | Kreiranje, izmena, brisanje i pregled kategorija |
| Sistemski uticaj | Definiše strukturu kategorija za sve korisnike |

| Ograničenja | Opis |
|-------------|------|
| Lozinke korisnika | Ne može ih menjati |
| Finansijski podaci | Ne može ih direktno menjati |
| Privatnost | Obavezno poštovanje pravila zaštite podataka |

| Pristup podacima | Opis |
|-----------------|------|
| Kategorije | Potpun pristup (CRUD operacije) |
| Sistemski podaci | Pristup konfiguraciji i integracijama |
| Finansijski podaci | Samo agregirani ili kroz poseban modul |



---

## Tehnologije

- Frontend: React (CRA) + JavaScript.
- Backend: Laravel (REST API, JSON) + PHP.
- Baza: MySQL.
- Lokalni razvoj: Node.js 18+, PHP 8.2+, Composer, XAMPP.
- Docker: docker-compose (frontend, backend, baza).
- Integracije: javni API za kursnu listu i javni servis za državne praznike.

---

## Pokretanje projekta (lokalno bez Docker-a)

1. Klonirajte repozitorijum:
```bash
    git clone https://github.com/elab-development/internet-tehnologije-2025-budgettracker_2020_0081.git
```
2. Pokrenite backend:
```bash
   cd budgettracker-be
   composer install
   php artisan migrate:fresh --seed
   php artisan serve
```
    
3. Pokrenite frontend:
```bash
   cd budgettracker-fe
   npm install
   npm start
```
    
4.  Frontend pokrenut na: [http://localhost:3000](http://localhost:3000) Backend API pokrenut na: [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)

## Pokretanje projekta uz Docker

1. Klonirajte repozitorijum:
```bash
    git clone https://github.com/elab-development/internet-tehnologije-2025-appzakreiranjeplanera_2022_0560.git
```

2. Pokrenite Docker kompoziciju:
```bash
    docker compose down -v
    docker compose up --build
```

3.  Frontend pokrenut na: [http://localhost:3000](http://localhost:3000) Backend API pokrenut na: [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)