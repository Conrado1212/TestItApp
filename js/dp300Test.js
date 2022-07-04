const question = document.getElementById('question');
const choices  = document.getElementById('text');

let currQuestion = {};
let acceptAns =true;
let score = 0;
let counterQ = 0;
let availableQ =[];


let questions = [
    {
    question: "1. Jak zorganizowane są dane w tabeli relacyjnej ",
    choice1 : "Wiersze i kolumny",
    choice2 : "Nagłówek i stopka",
    choice3 : "Strony i akapity",
    choice4 : "sdsfsfsfs",
        ans: 1


    },
    {
        question: "2. Który z poniższych jest przykładem typu danych bez struktury?",
        choice1 : "Tabela Pracownik z kolumnami Identyfikator pracownika, Nazwisko pracownika i Stanowisko pracownika",
        choice2 : "Pliki dzwiekowe i wideo",
        choice3 : "Tabela w bazie danych programu SQL Server",
        choice4 : "sfsfsfsfs",
            ans: 2
    },
    {
        question: "3. Który z poniższych jest przykładem strumieniowego zestawu danych?",
        choice1 : "Dane z czujnikow i urządzeń",
        choice2 : "Dane sprzedaży z ostatniego miesiąca",
        choice3 : "Lista pracowników pracujących dla firmy",
        choice4 : "sdsdfdfdfd",
            ans: 1
    },
    {
        question: "4. Które z następujących zadań jest rola administratora bazy danych?",
        choice1 : "Tworzenie kopii zapasowych baz danych i ich przywracanie",
        choice2 : "Twoprzenie pulpitów nawigacyjnych i raportów",
        choice3 : "Identyfikowanie problemów z jakoscia danych",
        choice4 : "asdzfasfsaefasfa",
            ans: 1
    },
    {
        question: "5. Które z ponizszych narzedzi sluza do wizualizacji i raportowania?",
        choice1 : "SQL Server Management Studio",
        choice2 : "Power Bi",
        choice3 : "SQL",
        choice4 : "asdfasfasdfafa",
            ans: 2
    },
    {
        question: "6. Które z ponizszych rol nie jest zwiazana z danymi?",
        choice1 : "Administrator systemow",
        choice2 : "Analityk danych",
        choice3 : "Administrator bazy danych",
        choice4 : "sadsdsds",
            ans: 1
    },
    {
        question: "7. Która z ponizszych odpowiedzi opisuje ceche relacyjnej bazy danych?",
        choice1 : "Wszystkie dane musza być przechowywane jako ciagi znakow",
        choice2 : "Wiersz w tabeli reprezentuje zestaw powizanych danych",
        choice3 : "Rozne wiersze w tej samej tabeli mogą zawierac rozne klolumny",
        choice4 : "asdasdasdas",
            ans: 2
    },
    {
        question: "8. Co to jest indeks?",
        choice1 : "Struktura umozliwajaca szybkie zlokalizowanie wierszy w tabeli przy uzyciu indeksowanej wartości",
        choice2 : "Tabela wirtualna utworzona na podstawie zestawu wynikow zapytania",
        choice3 : "Struktura skladajaca się z wierszy i kolumn uzywajacyhc do przechowywania danych",
        choice4 : "asdasdasdasda",
            ans: 1
    },
    {
        question: "9. Która z ponizszych odpowiedzi opisuje korzyść z uzycia Paas zamiast systemu lokalnego do obsługi systemow zarzadzania bazami danych?",
        choice1 : "Zwiekszenie codziennych kosztów zarzadzania",
        choice2 : "Zwiekszenie sklaowalnosci",
        choice3 : "Zwiekszenie funkcjonalności",
        choice4 : "asdsadasdasda",
            ans: 2
    },
    {
        question: "10.Której z poniższych usług należy użyć do zaimplementowania nierelacyjnej bazy danych?",
        choice1 : "Azure Cosmos DB",
        choice2 : "Usługa Azure SQL Database",
        choice3 : "Interfejs API języka Gremlin",
        choice4 : "sadsdsadssdd",
            ans: 1
    },
    {
        question: "11.Która z poniższych cech charakteryzuje nierelacyjne bazy danych?",
        choice1 : "Nierelacyjne bazy danych zawierają tabele z prostymi rekordami o stałych kolumnach",
        choice2 : "Nierelacyjne bazy danych wymagają użycia technik normalizacji danych w celu ograniczenia ich duplikacji",
        choice3 : "Nierelacyjne bazy danych nie mają schematów lub zawierają swobodne schematy",
        choice4 : "asdsadasdasda",
            ans: 3
    },
    {   
        question: "12.Tworzysz system, który monitoruje temperaturę w budynkach biurowych oraz ustawia klimatyzację w taki sposób, aby zapewnić przyjemną temperaturę  otoczenia we wszystkich pomieszczeniach. System musi zarządzać klimatyzacją w kilku tysiącach budynków w całym kraju lub regionie, z których każdy zawiera zazwyczaj co najmniej 100 klimatyzowanych pomieszczeń. Jaki typ magazynu danych NoSQL jest najbardziej odpowiedni do przechwytywania danych dotyczących temperatury, aby umożliwić ich szybkie przetwarzanie?",
        choice1 : "Magazyn par klucz-wartość",
        choice2 :   "Baza danych rodziny kolumn",
        choice3 :   "Zapisywanie temperatur w obiekcie blob w usłudze Azure Blob Storage ",
        choice4 :   "asdasdadadadasd",
            ans: 1

    },
    {   
        question: "13.Co to jest pozyskiwanie danych?",
        choice1 : "Proces przekształcania danych pierwotnych w modele zawierające istotne informacje",
        choice2 :   "Analizowanie danych pod celu analizy anomalii",
        choice3 :   "Przechwytywanie i przechowywanie strumieni danych pierwotnych z różnych źródeł",
        choice4 :   "asdasdasdasdaad",
            ans: 3

    },
    {   
        question: "14.Która z poniższych wizualizacji przedstawia najważniejsze elementy, które przyczyniły się do wybranego wyniku lub wartości?",
        choice1 : "Kluczowe elementy mające wpływ",
        choice2 :   "Wykres kolumnowy i słupkowy",
        choice3 :   "Wykres macierzy",
        choice4 :   "asdadadadasda",
            ans: 1

    },
    {   
        question: "15.Który typ analizy pomaga odpowiedzieć na pytania dotyczące zdarzeń z przeszłości?",
        choice1 : "Analiza opisowa",
        choice2 :   "Analiza preskryptywna",
        choice3 :   "Analiza predykcyjna",
        choice4 :   "asdasdasdasdas",
            ans: 1

    },
    {   
        question: "16.Które wdrożenie wymaga najmniejszej liczby zmian podczas migrowania istniejącego rozwiązania lokalnego programu SQL Server?",
        choice1 : "Wystąpienie zarządzane usługi Azure SQL Database",
        choice2 :   "Program SQL Server uruchomiony na maszynie wirtualnej",
        choice3 :   "Usługa Azure SQL Database — pojedyncza baza danych",
        choice4 :   "asdasdasdadaads",
            ans: 2

    },
    {   
        question: "17.Które z poniższych stwierdzeń dotyczących programu SQL Server uruchomionego na maszynie wirtualnej jest prawdziwe?",
        choice1 : "Należy samodzielnie zainstalować i obsługiwać oprogramowanie dla systemu zarządzania bazami danych, ale kopie zapasowe są automatyczne",
        choice2 :   "Instalacja i konserwacja oprogramowania są zautomatyzowane, ale kopie zapasowe należy wykonywać samodzielnie",
        choice3 :   "Odpowiadasz za całą instalację i konserwację oprogramowania oraz  wykonywanie kopii zapasowych",
        choice4 :   "asdasdasdadasads",
            ans: 3

    },
    {   
        question: "18.Które z poniższych stwierdzeń dotyczących usługi Azure SQL Database jest prawdziwe?",
        choice1 : "Skalowanie w górę nie zacznie obowiązywać dopóki baza danych nie zostanie  uruchomiona ponownie",
        choice2 :   "Skalowanie w poziomie nie zacznie obowiązywać dopóki baza danych nie zostanie uruchomiona ponownie",
        choice3 :   "Skalowanie w górę lub w dół zostanie zastosowane bez ponownego uruchamiania bazy danych SQL",
        choice4 :   "asdasdasdasda",
            ans: 3

    },
    {   
        question: "19.Jaki jest najprostszy sposób implementacji kopii zapasowych w przypadku  korzystania z wystąpienia zarządzanego usługi Azure SQL Database?",
        choice1 : "Ręczna konfiguracja serwera SQL",
        choice2 :   "Utworzenie zaplanowanego zadania tworzenia kopii zapasowej",
        choice3 :   "Kopie zapasowe są obsługiwane automatycznie ",
        choice4 :   "adasdadadada",
            ans: 3

    },
    {   
        question: "20.Jaki jest najlepszy sposób transferu danych znajdujących się w bazie danych  PostgreSQL działającej lokalnie do bazy danych z uruchomioną usługą Azure Database for PostgreSQL?",
        choice1 : "Wyeksportowanie danych z lokalnej bazy danych i zaimportowanie ich ręcznie do  bazy danych uruchomionej na platformie Azure",
        choice2 :   "Przekazanie pliku kopii zapasowej bazy danych PostgreSQL do bazy danych uruchomionej na platformie Azure",
        choice3 :   "Użycie usługi Azure Database Migration Service",
        choice4 :   "adasdsdsdsd",
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

   choices.forEach(choice =>{
       const number = choice.dataset['number'];
       choices.innerText = currQuestion['choice' + number];
   });

   availableQ.splice(indexQ, 1);

   acceptAns = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptAns)return;


        acceptAns = false;
        const selectChoice = e.target;
        const selectAns = selectChoice.datasetp["number"];

        const apply = 'incorrect';
        if(selectAns == counterQ.ans){
            apply = 'correct';
        }

        selectChoice.parentElement.classList.add(apply);
        setTimeout( () =>{
            selectChoice.parentElement.classList.remove(apply);
            getNewQ();
        },1000);
      
        
    });
});
startGame();