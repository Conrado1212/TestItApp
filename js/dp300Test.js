const question = document.getElementById('qestion');
const choice  = document.getElementById('text');

let currQuestion = {};
let acceptAns =true;
let score = 0;
let counterQ = 0;
let availableQ =[];


let questions = [
    {
    question: "1. Jak zorganizowane są dane w tabeli relacyjnej ",
    choice0 : "Wiersze i kolumny",
    choice1 : "Nagłówek i stopka",
    choice2 : "Strony i akapity",
    choice3 : "sdsfsfsfs",
        ans: 1


    },
    {
        question: "2. Który z poniższych jest przykładem typu danych bez struktury?",
        choice0 : "Tabela Pracownik z kolumnami Identyfikator pracownika, Nazwisko pracownika i Stanowisko pracownika",
        choice1 : "Pliki dzwiekowe i wideo",
        choice2 : "Tabela w bazie danych programu SQL Server",
        choice3 : "sfsfsfsfs",
            ans: 2
    },
    {
        question: "3. Który z poniższych jest przykładem strumieniowego zestawu danych?",
        choice0 : "Dane z czujnikow i urządzeń",
        choice1 : "Dane sprzedaży z ostatniego miesiąca",
        choice2 : "Lista pracowników pracujących dla firmy",
        choice3 : "sdsdfdfdfd",
            ans: 1
    },
    {
        question: "4. Które z następujących zadań jest rola administratora bazy danych?",
        choice0 : "Tworzenie kopii zapasowych baz danych i ich przywracanie",
        choice1 : "Twoprzenie pulpitów nawigacyjnych i raportów",
        choice2 : "Identyfikowanie problemów z jakoscia danych",
        choice3 : "asdzfasfsaefasfa",
            ans: 1
    },
    {
        question: "5. Które z ponizszych narzedzi sluza do wizualizacji i raportowania?",
        choice0 : "SQL Server Management Studio",
        choice1 : "Power Bi",
        choice2 : "SQL",
        choice3 : "asdfasfasdfafa",
            ans: 2
    },
    {
        question: "6. Które z ponizszych rol nie jest zwiazana z danymi?",
        choice0 : "Administrator systemow",
        choice1 : "Analityk danych",
        choice2 : "Administrator bazy danych",
        choice3 : "sadsdsds",
            ans: 1
    },
    {
        question: "7. Która z ponizszych odpowiedzi opisuje ceche relacyjnej bazy danych?",
        choice0 : "Wszystkie dane musza być przechowywane jako ciagi znakow",
        choice1 : "Wiersz w tabeli reprezentuje zestaw powizanych danych",
        choice2 : "Rozne wiersze w tej samej tabeli mogą zawierac rozne klolumny",
        choice3 : "asdasdasdas",
            ans: 2
    },
    {
        question: "8. Co to jest indeks?",
        choice0 : "Struktura umozliwajaca szybkie zlokalizowanie wierszy w tabeli przy uzyciu indeksowanej wartości",
        choice1 : "Tabela wirtualna utworzona na podstawie zestawu wynikow zapytania",
        choice2 : "Struktura skladajaca się z wierszy i kolumn uzywajacyhc do przechowywania danych",
        choice3 : "asdasdasdasda",
            ans: 1
    },
    {
        question: "9. Która z ponizszych odpowiedzi opisuje korzyść z uzycia Paas zamiast systemu lokalnego do obsługi systemow zarzadzania bazami danych?",
        choice0 : "Zwiekszenie codziennych kosztów zarzadzania",
        choice1 : "Zwiekszenie sklaowalnosci",
        choice2 : "Zwiekszenie funkcjonalności",
        choice3 : "asdsadasdasda",
            ans: 2
    },
    {
        question: "10.Której z poniższych usług należy użyć do zaimplementowania nierelacyjnej bazy danych?",
        choice0 : "Azure Cosmos DB",
        choice1 : "Usługa Azure SQL Database",
        choice2 : "Interfejs API języka Gremlin",
        choice3 : "sadsdsadssdd",
            ans: 1
    },
    {
        question: "11.Która z poniższych cech charakteryzuje nierelacyjne bazy danych?",
        choice0 : "Nierelacyjne bazy danych zawierają tabele z prostymi rekordami o stałych kolumnach",
        choice1 : "Nierelacyjne bazy danych wymagają użycia technik normalizacji danych w celu ograniczenia ich duplikacji",
        choice2 : "Nierelacyjne bazy danych nie mają schematów lub zawierają swobodne schematy",
        choice3 : "asdsadasdasda",
            ans: 3
    },
    {   
        question: "12.Tworzysz system, który monitoruje temperaturę w budynkach biurowych oraz ustawia klimatyzację w taki sposób, aby zapewnić przyjemną temperaturę  otoczenia we wszystkich pomieszczeniach. System musi zarządzać klimatyzacją w kilku tysiącach budynków w całym kraju lub regionie, z których każdy zawiera zazwyczaj co najmniej 100 klimatyzowanych pomieszczeń. Jaki typ magazynu danych NoSQL jest najbardziej odpowiedni do przechwytywania danych dotyczących temperatury, aby umożliwić ich szybkie przetwarzanie?",
        choice0 : "Magazyn par klucz-wartość",
        choice1 :   "Baza danych rodziny kolumn",
        choice2 :   "Zapisywanie temperatur w obiekcie blob w usłudze Azure Blob Storage ",
        choice3 :   "asdasdadadadasd",
            ans: 1

    },
    {   
        question: "13.Co to jest pozyskiwanie danych?",
        choice0 : "Proces przekształcania danych pierwotnych w modele zawierające istotne informacje",
        choice1 :   "Analizowanie danych pod celu analizy anomalii",
        choice2 :   "Przechwytywanie i przechowywanie strumieni danych pierwotnych z różnych źródeł",
        choice3 :   "asdasdasdasdaad",
            ans: 3

    },
    {   
        question: "14.Która z poniższych wizualizacji przedstawia najważniejsze elementy, które przyczyniły się do wybranego wyniku lub wartości?",
        choice0 : "Kluczowe elementy mające wpływ",
        choice1 :   "Wykres kolumnowy i słupkowy",
        choice2 :   "Wykres macierzy",
        choice3 :   "asdadadadasda",
            ans: 1

    },
    {   
        question: "15.Który typ analizy pomaga odpowiedzieć na pytania dotyczące zdarzeń z przeszłości?",
        choice0 : "Analiza opisowa",
        choice1 :   "Analiza preskryptywna",
        choice2 :   "Analiza predykcyjna",
        choice3 :   "asdasdasdasdas",
            ans: 1

    },
    {   
        question: "16.Które wdrożenie wymaga najmniejszej liczby zmian podczas migrowania istniejącego rozwiązania lokalnego programu SQL Server?",
        choice0 : "Wystąpienie zarządzane usługi Azure SQL Database",
        choice1 :   "Program SQL Server uruchomiony na maszynie wirtualnej",
        choice2 :   "Usługa Azure SQL Database — pojedyncza baza danych",
        choice3 :   "asdasdasdadaads",
            ans: 2

    },
    {   
        question: "17.Które z poniższych stwierdzeń dotyczących programu SQL Server uruchomionego na maszynie wirtualnej jest prawdziwe?",
        choice0 : "Należy samodzielnie zainstalować i obsługiwać oprogramowanie dla systemu zarządzania bazami danych, ale kopie zapasowe są automatyczne",
        choice1 :   "Instalacja i konserwacja oprogramowania są zautomatyzowane, ale kopie zapasowe należy wykonywać samodzielnie",
        choice2 :   "Odpowiadasz za całą instalację i konserwację oprogramowania oraz  wykonywanie kopii zapasowych",
        choice3 :   "asdasdasdadasads",
            ans: 3

    },
    {   
        question: "18.Które z poniższych stwierdzeń dotyczących usługi Azure SQL Database jest prawdziwe?",
        choice0 : "Skalowanie w górę nie zacznie obowiązywać dopóki baza danych nie zostanie  uruchomiona ponownie",
        choice1 :   "Skalowanie w poziomie nie zacznie obowiązywać dopóki baza danych nie zostanie uruchomiona ponownie",
        choice2 :   "Skalowanie w górę lub w dół zostanie zastosowane bez ponownego uruchamiania bazy danych SQL",
        choice3 :   "asdasdasdasda",
            ans: 3

    },
    {   
        question: "19.Jaki jest najprostszy sposób implementacji kopii zapasowych w przypadku  korzystania z wystąpienia zarządzanego usługi Azure SQL Database?",
        choice0 : "Ręczna konfiguracja serwera SQL",
        choice1 :   "Utworzenie zaplanowanego zadania tworzenia kopii zapasowej",
        choice2 :   "Kopie zapasowe są obsługiwane automatycznie ",
        choice3 :   "adasdadadada",
            ans: 3

    },
    {   
        question: "20.Jaki jest najlepszy sposób transferu danych znajdujących się w bazie danych  PostgreSQL działającej lokalnie do bazy danych z uruchomioną usługą Azure Database for PostgreSQL?",
        choice0 : "Wyeksportowanie danych z lokalnej bazy danych i zaimportowanie ich ręcznie do  bazy danych uruchomionej na platformie Azure",
        choice1 :   "Przekazanie pliku kopii zapasowej bazy danych PostgreSQL do bazy danych uruchomionej na platformie Azure",
        choice2 :   "Użycie usługi Azure Database Migration Service",
        choice3 :   "adasdsdsdsd",
            ans: 3

    }

    
    
];

const ansPoint = 10;
const max_Qestion = 20;

startGame = () => {
    counterQ = 0;
    score= 0;
    availableQ = [...questions];
    console.log(availableQ);
    getNewQ();
};

getNewQ = () =>{
    if(availableQ.length == 0 || counterQ >= max_Qestion){
        return window.location.assign("/gameOver.html");
    }
    counterQ++;
   const indexQ =  Math.floor(Math.random() * availableQ.length);
   currQuestion = availableQ[indexQ];
   question.innerHTML = currQuestion.question;

   choice.forEach(choice =>{
       const number = choice.dataset['number'];
       choice.innerText = currQuestion['choice' + number];
   });

   availableQ.splice(indexQ, 1);

   acceptAns = true;
};
    choice.forEach(choice =>{
        choice.addEventListener("click", e=>{
            if(!acceptAns)return;
            acceptAns =false;
            const selectChoice = e.target;

            const selectAns = selectChoice.dataset["number"];
            getNewQ();
        });
    });
startGame();