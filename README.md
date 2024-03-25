README.md 

 

# Hejsan och välkommen till Gängets projekt!  

 

### Vi är glada över att du har hittat till vår GitHub-sida! Här hos Gänget strävar vi efter att göra en positiv skillnad i människors liv genom att erbjuda anpassade bilar som möter behoven hos personer med olika typer av funktionsnedsättningar. 

 

## Om Projektet 

Systemet består av en frontend- och backend-lager. Kunden fyller i ett formulär (se figur 1) med information om sina fysiska förmågor. Det finns en admin-sida för att visa, redigera och ta bort resultat, skapa administratörer och skicka ut engångslösenord (OTP) till användare. Dessutom finns det en databas för att lagra formulärinformation, administratörer och OTP:er. 

 

## Vad hittar du här? 

I vårt GitHub-repositorium hittar du all kod relaterad till vårt projekt som använder HTML, CSS, JavaScript och PHP. Det inkluderar filer för gränssnittsutformning med HTML och CSS, interaktivitet med JavaScript och serverhantering med PHP. Du hittar också olika mappar och filer som organiserar projektets struktur och funktionalitet, såsom frontend- och backend-kod, bibliotek, resurser och eventuella konfigurationsfiler. Vår GitHub-repo är en central plats där all kod för projektet lagras, uppdateras och delas med teamet och andra intressenter för att underlätta utvecklingsprocessen och samarbetet. 

 

 

## For setup and deployment instructions, refer to the respective sections below. 

## Lägg till följande extensions i Visual studio ifall dem inte lagt till automatiskt; 
PHP av DEVSENSE   

PHP Profiler av DEVSENSE  
 
PHP Server av brapifra  
 
SQLite av alexcvzz 
 
Composer av DEVSENSE  

## Hur man gör för att få igång PHP för Windows: 

1. Gå in i Windowns Powershell för Admin. 

2. Skriv detta commando, utan citattecken: “Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1') "‌"))“ 

3. Nu har du installerat chocolatey. 

4. Kör sedan “choco install php” i powershell. 

5. Starta om datorn. 

6. Navigera till stället där du laddade ner php. 

7. Öppna filen “php.ini” med textredigeraren. 

8. Ta bort semikolon framför alla rader med namnet “pdo_sqlite” och framför “extension=sqlite3”. 

9. Öppna visual studio code för att lägga in länken till PHP 

10. Skriv “settings” i sökfältet och välj den med den lokala sökvägen (ej den med .vscode). 

11. Lägg till länken till php filsökägen (C:/tools/php83/php.exe) efter: php.validate.executablePath. 

12. Du kan nu starta servern med kommandot “php -S localhost:8000”. 

### Klar 

 

 

## Hur man gör för att få igång PHP för MAC: 

1. Öppna terminalen. 

2. /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh" 

3. brew update 

4. brew install php 

5. php -v 

6. Öppna sedan Visual Stuido code för att lägga in länken till PHP 

7. Lägg in denna länk "/opt/homebrew/bin/php", utan “ “. 

8. Du kan nu starta servern med kommandot “php -S localhost:8000”, utan “ “. 

### Klar 

 

 

## Få igång Composer & PHP mailer 

WINDOWS: 

1. Ladda ner Composer från https://getcomposer.org/download/ . 

2. Öppna mappen php83 som bör ligga i tools under C: om du har följt nedladdningsinstruktionerna utan ändringar. 

3. Leta rätt på filen php.ini och öppna den. 

4. Ta bort semikolon för “; extension=openssl”. 

5. Ta bort semikolon för “; openssl.cafile=”. 

6. Ta bort semikolon för “; openssl.capath=”. 

7. Spara med php.ini med de ändringar du har gjort. 

8. Nu ska programmet fungera på din enhet om du startat servern korrekt med kommandot “php -S localhost:8000” 

 

 

 

## MAC: 

1. Om du har homebrew installerat redan så öppna terminalen och gå till steg 3 annars gör steg 2. 

2. Installera homebrew från terminalen med detta: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh) "‌")" 

3. Skriv detta i terminalen: brew install composer 

4. Nu ska programmet fungera på din enhet om du startat servern korrekt med kommandot “php -S localhost:8000” 

 

 
## För att PHP mailer ska fungera 

1. Ändra mailadress i otp.php-filen i PHP-mappen. 

2. Följande kodrader behöver ändras: 

3. $mail->Username = 'skriv in din mailadress här'  

4. $mail->Password = 'skriv in ditt lösen här' 

5. $mail->setFrom('skriv in din mailadress här','namn på avsändare') 

 

## Om ovan instruktioner av någon anledning inte skulle fungera så hänvisar vi till följande; 

Guide PHP MacOS: https://www.php.net/manual/en/install.macosx.php 

Guide Composer MacOS: https://getcomposer.org/doc/00-intro.md 

Guide PHP Windows: https://www.php.net/manual/en/install.windows.php 

Guide Composer Windows: https://getcomposer.org/doc/00-intro.md 

 

 

### Tack för att du är intresserad av vårt arbete och för ditt engagemang för att göra världen mer tillgänglig för personer med funktionsnedsättningar. 

 
