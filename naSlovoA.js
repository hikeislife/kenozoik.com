// na slovo A skriptica
// kenozoik



function naSlovoA() {
	
	// deklarisanje varijabli
  	var text,
		words = document.getElementById("odgovor").value,
		word = words.toLowerCase(),
		aword = word.charAt(0),
  	  	bword = word.length;
	
	if ( word === "" ) {text = "<p>Prvo ukucaj reč.<p>"} //provera da li je reč prisutna
		
  	else if (aword !== "a") { // provera da li reč počinje na slovo a
  	  	text = "<p>reč mora da počne na slovo A.<p>"; }
			
  	else {
 
  	switch(word) {
    	case "a":
      	text = "<p>\"A\" je rečca, treba vam reč.";
      	break;
    	case "ali":
      	text = "<p>\"Ali\" je rečca, treba vam reč.";
      	break;
		case "ako":
      	text = "<p>\"Ako\" je rečca, treba vam reč.";
      	break;
      	case "azbuka":
      	text = "<p>\"Azbuka\" je kovanica Vuka Stefanovića Karadžića, iz 19-og veka. Reč predstavlja prva dva slova (prve dve reči) glagoljice, \"Az\", i \"Buki\".";
      	break;
      	case "ala":
      	text = "<p>\"Ala\" je u svom izvornom obliku bila \"Hala.\"";
      	break;
      	case "aždaja":
      	text = "<p>\"Aždaja\" je u svom izvornom obliku bila \"Haždaja\".";
      	break;
      	case "avetinja":
      	text = "<p>vidi \"Avet\".";
      	break;
      	case "ada":
      	text = "<p>\"Ada\" je turcizam.";
      	break;
      	case "avet":
      	text = "<p>\"Avet\" vuče poreklo iz reči \"videti\", baš kao i njeni sinonimi; prikaza, priviđenje. Avet je mitsko biće nalik duhu, vampiru. <p>Zanimljivost u vezi Aveti je da ih možete oterati belim lukom. U Srpskoj mitologiji beli luk nije direktno povezan sa Vampirima, ali je mit očigledno prešao sa Aveti i takav se preneo širom sveta.<p>Više o <span id=\"vampir\" onclick=\"vampiri()\">Vampirima</span>.";
      	break;
		case "az":
      	text = "<p>\"Az\", prvo slovo (odnosno prva reč) glagoljice, znači \"tvorac\". Glagoljica se čita kao pesma, oda bogu Svarogu, vrhovnom bogu Slovenskog panteona, i tvorcu svemira, života, i svih ostalih bogova.<p>Kako se srpski jezik razvijao paralelno sa Srpskom/Slovenskom religijom, to je slovo \"A\" ostalo rezervisano za Svaroga, i ovo se održalo i do danas, te i danas skoro da uopšte nema reči u srpskom jeziku koje počinju na \"A\".<p>više o <span id=\"vampir\" onclick=\"svarog()\">Svarogu</span>.";
      	break;
      	default:
      	text = "<p>\"<span id=\"cap\">" + word + "</span>\" nije izvorna sprska reč.";
			} 
			
		}
		
	document.getElementById("rotator").innerHTML = text;
}
var vampiri = function() {
		var vampText = "<h3>O Vampirima</h3>\
		<p>Vampir je avetinja iz Srpske mitologije. Treba ih razlikovati od Drakule, koji je Rumunskog porekla.</p>\
		<p>Kada se mit o Vampirima prvi put pojavio, nije poznato, ali se zna vrlo dobro ko je bio vampir-superstar koji je proširio histeriju celom Evropom. Petar Blagojević iz sela Kisiljeva, koji je preminuo 1725, da bi se potom povampirio, i ubio 9 meštana.</p>\
		<p>Kisiljevo je u ovom periodu bilo pod Austrougarskom vlašću, i Austrougari nisu ozbiljno shvatali Srpsko insistiranje da se Blagojević povampirio. Srbi su zahtevali da se Blagojević iskopa, kako bi se videlo da li ispoljava znake vampirizma, a u koje spadaju kosa i nokti izrasli nakon smrti, i odsustvo znakova raspadanja. Seljani su bili toliko prestravljeni da će celo selo pomreti, da su pretili da će se svi do poslednjeg iseliti. U nadi da će ih smiriti, provizior Frombald je konačno pristao da se Blagojević iskopa i proveri za znake vampirizma.</p>\
		<p>Ono što Frombald nikako nije očekivao, se desilo. Kosa i nokti ne samo da su porasli na prividno savršeno očuvanom lešu, već su, sad već ogorčeni seljani, na telu videli i da Blagojević ima krvi u ustima, i kada su mu zarili glogov kolac u srce, potpuno sveža krv je pokuljala iz njega. Tvrdnja se više nije mogla dovoditi u pitanje. Blagojević je zaista bio Vampir.</p>\
		<p>Blagojević je postao instant senzacija o kojoj je cela evropa pisala, i pričala. Srpski seljanin je bio tema razgovora Evropskih visokih društava. Ono što prosečno stanovništvo u to doba nije znalo, je da su svi ovi simptomi uobičajeni kod pokojnika, i da se pomoću njih, svaki pokojnik može oceniti kao vampir.</p>\
		<h3>Kako vampiri nastaju</h3>\
		<p>Prema starom Srpskom (Slovenskom) verovanju, nikada ne treba da pominjete loše stvari, kako se ne bi desile. Iz ovog razloga stari Sloveni nikada nisu medvede nazivali po imenu, iz bojazni da bi tako mogli medveda prizvati, nego su ga nazivali opisnim \"med-jed\" (onaj koji jede med). Na ovome su toloko insistirali, da se danas i ne zna koja je bila originalna reč za medveda u slovenskim jezicima.</p>\
		<p>Slično, pokojnika nipošto ne smete nazvati po imenu, da se isti ne bi povampirio.</p>\
		<h3>Zašto ljudi stvarno umiru od Vampira?</h3>\
		<p>Vampiri nisu jedina mitska bića koja su stvarno harala i odnosila živote. </p>\
		<p>Noću, kada spavamo, nekoliko puta ulazimo i izlazimo iz faze dubokog sna, još poznatog kao REM sna. U REM fazi, spavač je potpuno paralisan. Ovo nije problem, pošto je u pitanju dubok san i niko se ne seća da je bio nepokretan kada se ujutro probudi. Osim što se ponekad dešava da se ljudi probude u sred REM faze, i da shvate da nisu u stanju da se mrdnu. U ovakvim trenucima, ljudi uvek imaju priviđenja. Priviđenja su često opisana kao senke koje spavaču sede na ramenima i pritežu ga, te da se usled ove senke i njezine težine, spavač ne može pomeriti. Iako je osoba u ovom trenutku dovoljno budna da shvati da se pomeriti ne može, mozak i dalje interpretira stimulanse logikom sna i sanja crnu senku na grudima spavača.</p>\
		<p>Ovaj fenomen je opšte poznat širom sveta, a interpretacije crne senke zavise od kulture u kojoj spavač živi. Religiozni ljudi misle da im demon sedi na grudima, amerikanci vide vanzemaljce koji su došli na njima experimetnisati, a srbi pak vide vampire. Egipćani pojavu tumače kao Đina (duh iz čarobne lampe je takođe Đin), dok u Hmong pokrajini Kine, senku nazivaju Tsog Tsuam.</p>\
		<p>Pošto su Tsog Tsuam, Đin i Vampiri smrtonosni, to ljudi od njih umiru češće nego od vanzemaljaca ili demona, ili onih koji fenomen protumače kao san. A kako su u sujevernim kulturama ljudi podložniji ovim pričama, to dolazi do uzleta masovne histerije, i ljude kolektivno počinje da izdaje srce, od straha.</p>\
		<h3>Ostali poznati Vampiri</h3>\
		<p>Dok je Petar Blagojević vampir koji je proslavio fenomen širom evrope, a i sveta, on u srbiji danas i nije najprepoznatljivije ime. Srbi su mnogo bolje upoznati sa nešto mlađim Vampirom, Savom Savanovićem, mlinarom iz Zarožja, koji je kasnijie opevan u \"Posle devedeset godina\" Milovana Glišića, i kojim je inspirisan ozloglašeni Srpski horor \"Leptirica\".</p>\
		<h3>Uzgredni komentar</h3>\
		<p>Postoje samo dve Srpske reči koje su ušle u glabalni rečnik, takve da u kom god delu sveta da se nađete, ako ih izgovorite, svi će znati na šta mislite. Jedna od njih je Vampir. Da li možete da pogodite koja je druga?</p>\
		<p>Druga Srpska \"<span id=\"vampir\" onclick=\"milosObilic()\">Mitska Bića</span>\" koja su ostavila stvarnog traga na istoriju</p>";
		document.getElementById('rotator').innerHTML = vampText;
		
	};
var svarog = function(){
		var svarogText = "<h3>O Svarogu</h3>\
		<p>U izradi</p>";
		document.getElementById('rotator').innerHTML = svarogText;
}
var milosObilic = function(){
		var milosObilicText = "<p>U izradi</p>";
		document.getElementById('rotator').innerHTML = milosObilicText;
}