README.md 

 

# Hejsan och välkommen till Gängets projekt!  

 

### Vi är glada över att du har hittat till vår GitHub-sida! Här hos Gänget strävar vi efter att göra en positiv skillnad i människors liv genom att erbjuda anpassade bilar som möter behoven hos personer med olika typer av funktionsnedsättningar. 

 

## Om Projektet 

Systemet består av en frontend- och backend-lager. Kunden fyller i ett formulär (se figur 1) med information om sina fysiska förmågor. Det finns en admin-sida för att visa, redigera och ta bort resultat, skapa administratörer och skicka ut engångslösenord (OTP) till användare. Dessutom finns det en databas för att lagra formulärinformation, administratörer och OTP:er. 

 

## Vad hittar du här? 

I vårt GitHub-repositorium hittar du all kod relaterad till vårt projekt som använder HTML, CSS, JavaScript och PHP. Det inkluderar filer för gränssnittsutformning med HTML och CSS, interaktivitet med JavaScript och serverhantering med PHP. Du hittar också olika mappar och filer som organiserar projektets struktur och funktionalitet, såsom frontend- och backend-kod, bibliotek, resurser och eventuella konfigurationsfiler. Vår GitHub-repo är en central plats där all kod för projektet lagras, uppdateras och delas med teamet och andra intressenter för att underlätta utvecklingsprocessen och samarbetet. 

 

 

## For setup and deployment instructions, refer to the respective sections below. 

# Lägg till följande extensions i Visual studio ifall dem inte lagt till automatiskt; 
PHP av DEVSENSE
PHP Profiler av DEVSENSE
PHP Server av brapifra
SQLite av alexcvzz
 

Hämta ovan extensions 

Sedan Composer av DEVSENSE 

Hur man gör för att få igång PHP för Windows: 

Gå in i Windowns Powershell för Admin. 

Skriv detta commando, utan citattecken: “Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1') "‌"))“ 

Nu har du installerat chocolatey. 

Kör sedan “choco install php” i powershell. 

Starta om datorn. 

Navigera till stället där du laddade ner php. 

Öppna filen “php.ini” med textredigeraren. 

Ta bort semikolon framför alla rader med namnet “pdo_sqlite” och framför “extension=sqlite3”. 

Öppna visual studio code för att lägga in länken till PHP 

 Skriv “settings” i sökfältet och välj den med den lokala sökvägen (ej den med .vscode). 

 Lägg till länken till php filsökägen (C:/tools/php83/php.exe) efter: php.validate.executablePath. 

 Du kan nu starta servern med kommandot “php -S localhost:8000”. 

# Klar 

 

 

# Hur man gör för att få igång PHP för MAC: 

Öppna terminalen. 

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh" 

brew update 

brew install php 

php -v 

öppna sedan Visual Stuido code för att lägga in länken till PHP 

Lägg in denna länk "/opt/homebrew/bin/php", utan “ “. 

Du kan nu starta servern med kommandot “php -S localhost:8000”, utan “ “. 

# klar 

 

 

# Få igång Composer & PHP mailer 

WINDOWS: 

Ladda ner Composer från https://getcomposer.org/download/ . 

Öppna mappen php83 som bör ligga i tools under C: om du har följt nedladdningsinstruktionerna utan ändringar. 

Leta rätt på filen php.ini och öppna den. 

Ta bort semikolon för “; extension=openssl”. 

Ta bort semikolon för “; openssl.cafile=”. 

Ta bort semikolon för “; openssl.capath=”. 

Spara med php.ini med de ändringar du har gjort. 

# Nu ska programmet fungera på din enhet om du startat servern korrekt med kommandot “php -S localhost:8000” 

 

 

 

# MAC: 

Om du har homebrew installerat redan så öppna terminalen och gå till steg 3 annars gör steg 2. 

Installera homebrew från terminalen med detta: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh) "‌")" 

skriv detta i terminalen: brew install composer 

Nu ska programmet fungera på din enhet om du startat servern korrekt med kommandot “php -S localhost:8000” 

 

 
# För att PHP mailer ska fungera 

Ändra mailadress i otp.php-filen i PHP-mappen. 

Följande kodrader behöver ändras: 

$mail->Username = 'skriv in din mailadress här'  

$mail->Password = 'skriv in ditt lösen här' 

$mail->setFrom('skriv in din mailadress här','namn på avsändare') 

 

# Om ovan instruktioner av någon anledning inte skulle fungera så hänvisar vi till följande; 

Guide PHP MacOS: https://www.php.net/manual/en/install.macosx.php 

Guide Composer MacOS: https://getcomposer.org/doc/00-intro.md 

Guide PHP Windows: https://www.php.net/manual/en/install.windows.php 

Guide Composer Windows: https://getcomposer.org/doc/00-intro.md 

 

 

### Tack för att du är intresserad av vårt arbete och för ditt engagemang för att göra världen mer tillgänglig för personer med funktionsnedsättningar. 

 
