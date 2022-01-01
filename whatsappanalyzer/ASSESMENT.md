# Assesment

## Code
- Ik heb mijn best gedaan om vooral in de loops die de chat logs doorlopen veel comments te zetten zodat het duidelijk is welke informatie waar wordt uitgelezen.
- Ik heb alle afzonderlijke delen van mijn code zo veel mogelijk opgedeeld in componenten om de code zo overzichtelijk mogelijk te maken.

## Interactieontwerp
- Ik heb geprobeerd het uploadscherm zo duidelijk mogelijk te maken door hem minimalistisch te houden. Mensen gaan waarschijnlijk niet veel lezen, dus ik heb een korte uitleg geschreven en het uploadgebied groot gemaakt.
- De knoppen om te filteren op aparte personen staan midden op het scherm zodat ze niet te missen zijn. Ook is het makkelijk om weer terug te gaan naar de algemene analyse door weer op "Everyone" te klikken.
- Alle informatie staat op 1 scherm, je kan niet scrollen en kan daardoor dus alle belangrijke info in 1 oogopslag zien.

## Repository en documentatie
- Ik heb geprobeerd zo vaak als nodig te committen om het overzicht van alle veranderingen te behouden.


## Decisions
- Het doorlopen van de chat logs bevatte een aantal moeilijkheden. Zo gebruiken apple en android verschillende formatting conventies waardoor de loop die door de logs gaat twee keer geschreven moest worden. Ook was het niet mogelijk om op witregels te splitten aangezien berichten ook witregels konden bevatten. Al met al kostte het best veel tijd om al deze kleine puntjes uit te werken.
- Bij het analyseren worden de statistieken gefilterd op persoon niet meteen opgeslagen. In plaats daarvan worden de chat logs opnieuw geanalyseerd als er op een naam wordt gedrukt. Dit heb ik gedaan zodat de eerste analyse zo snel mogelijk kan zijn. Een nadeel is dat de analyse voor iedereen nu niet wordt opgeslagen, waardoor het soms even kan duren als je op "Everyone" klikt.