// 1. Erstellen Sie eine Klasse Calculator und fügen Sie eine statische Methode subtract() hinzu, die zwei Zahlen annimmt und deren Differenz zurückgibt.

class Calculator {
    static subtract(a, b) {
        return (a - b);
    }
};

console.log(Calculator.subtract(5, 3));

// 2. Erstellen Sie eine Klasse StringUtils und fügen Sie eine statische Methode toUpperCase() hinzu, die einen String annimmt und ihn in Großbuchstaben zurückgibt.

class StringUtils {
    static toUpperCase(input) {
        if (typeof input !== 'string') {
            throw new Error('Input is not a string');
        }
        return input.toUpperCase();
    };
};

console.log(StringUtils.toUpperCase("Nata"));

// 3. Erstellen Sie eine Klasse MathUtils und fügen Sie eine statische Methode getMin() hinzu, die ein Array von Zahlen annimmt und die kleinste Zahl zurückgibt.

class MathUtils {
    static getMin(numbersArray) {
        let min = numbersArray[0];

        for (let i = 1; i < numbersArray.length; i++) {
            if (numbersArray[i] < min) {
                min = numbersArray[i];
            }
        }

        return min;
    }
};

console.log(MathUtils.getMin([1, 2, -3, 4]));

// 4. Erstellen Sie eine Klasse ArrayUtils und fügen Sie eine statische Methode average() hinzu, die ein Array von Zahlen annimmt und den Durchschnitt berechnet.

class ArrayUtils {
    static average(arrayNumber) {
        const sum = arrayNumber.reduce((acc, elem) => {
            return acc + elem;
        });
        return sum / arrayNumber.length;
    };
};

console.log(ArrayUtils.average([7, 3]));

// 5. Erstellen Sie eine Klasse RandomNumberGenerator und fügen Sie statische Eigenschaften defaultMin und defaultMax hinzu, die Standardwerte für das Minimum und Maximum des Bereichs enthalten.

class RandomNumberGenerator {
    static defaultMin = 1;
    static defaultMax = 100;

    static generate(min = RandomNumberGenerator.defaultMin, max = RandomNumberGenerator.defaultMax) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// Beispiel für die Verwendung 
console.log(RandomNumberGenerator.generate());        // Eine Zufallszahl zwischen 1 und 100
console.log(RandomNumberGenerator.generate(10, 50));  // Eine Zufallszahl zwischen 10 und 50




// --------------------------


// Übung 2

// 1. Erstellen Sie ein canvas-Element auf der Seite und zeichnen Sie mit JavaScript ein Rechteck mit den Maßen 100x50 Pixel.

// Erstellen Sie ein Canvas-Element und fügen Sie es zur Seite hinzu
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const context = canvas.getContext('2d');
context.fillStyle = 'blue';
context.fillRect(50, 50, 100, 50);


// 2. Verwenden Sie das canvas-Element und zeichnen Sie eine Linie, die zwei Punkte verbindet: (10, 10) und (100, 100).

// Erstellen Sie ein Canvas-Element und fügen Sie es zur Seite hinzu
const canvas2 = document.createElement('canvas');
document.body.appendChild(canvas2);
const context2 = canvas2.getContext('2d');

context2.beginPath();
context2.moveTo(10, 10);
context2.lineTo(100, 100);
context2.strokeStyle = 'blue';
context2.lineWidth = 3;
context2.stroke();

// 3. Zeichnen Sie auf dem canvas-Element einen Kreis mit einem Radius von 50 Pixeln, indem Sie die Methode arc verwenden.

const canvas3 = document.createElement('canvas');
document.body.appendChild(canvas3);
const context3 = canvas3.getContext('2d');

// Wir definieren die Parameter des Kreises
const centerX = 80; // X-Koordinate des Kreismittelpunkts
const centerY = 80; // Y-Koordinate des Kreismittelpunkts
const radius = 50;  // Radius des Kreises

// Kreis zeichnen
context3.beginPath();
context3.arc(centerX, centerY, radius, 0, Math.PI * 2); // (centerX, centerY, radius, Startwinkel, Endwinkel)
context3.strokeStyle = "red"; // Farbe der Umrandung
context3.lineWidth = 2;       // Linienstärke
context3.stroke();            // Kreis zeichnen


// 4. Erstellen Sie ein canvas-Element und zeichnen Sie ein Rechteck mit abgerundeten Ecken, indem Sie Bögen (Arcs) und Linien verwenden.

const canvas4 = document.createElement('canvas');
document.body.appendChild(canvas4);
const context4 = canvas4.getContext('2d');

// Funktion zum Zeichnen eines Rechtecks mit abgerundeten Ecken
function drawRoundedRect(x, y, width, height, radius) {
    context4.beginPath();
    context4.moveTo(x + radius, y); // Obere linke Ecke (versetzt um den Radius)
    context4.lineTo(x + width - radius, y); // Obere Linie
    context4.arc(x + width - radius, y + radius, radius, Math.PI * 1.5, 0); // Obere rechte Ecke
    context4.lineTo(x + width, y + height - radius); // Rechte Linie
    context4.arc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5); // Untere rechte Ecke
    context4.lineTo(x + radius, y + height); // Untere Linie
    context4.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI); // Untere linke Ecke
    context4.lineTo(x, y + radius); // Linke Linie
    context4.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5); // Obere linke Ecke
    context4.closePath();
    context4.strokeStyle = "green";
    context4.lineWidth = 2;
    context4.stroke(); // Zeichnen der Kontur
}

// Aufruf der Funktion zum Zeichnen des Rechtecks
drawRoundedRect(10, 10, 200, 100, 20);



// 5. Zeichnen Sie auf dem canvas-Element mehrere sich kreuzende Linien in verschiedenen Farben, indem Sie strokeStyle und die Methode lineTo verwenden.

const canvas5 = document.createElement('canvas');
document.body.appendChild(canvas5);
const context5 = canvas5.getContext('2d');

// Linie 1: Rot
context5.beginPath();
context5.moveTo(10, 10);
context5.lineTo(450, 450);
context5.strokeStyle = 'red';
context5.lineWidth = 2;
context5.stroke();

// Linie 2: Blau
context5.beginPath();
context5.moveTo(200, 10);
context5.lineTo(10, 200);
context5.strokeStyle = 'blue';
context5.lineWidth = 2;
context5.stroke();

// Linie 3: Violett
context5.beginPath();
context5.moveTo(10, 100);
context5.lineTo(250, 20);
context5.strokeStyle = 'purple';
context5.lineWidth = 2;
context5.stroke();


// --------------------------

// Übung 3

// 1. Verwenden Sie das canvas-Element, um ein Rechteck zu zeichnen und es mit der Farbe rot zu füllen, indem Sie die Eigenschaft fillStyle verwenden.

const canvas6 = document.createElement('canvas');
document.body.appendChild(canvas6);
const context6 = canvas6.getContext('2d');
// Farbe der Füllung 
context6.fillStyle = 'red';
// Ein Rechteck zeichnen und füllen
context6.fillRect(50, 50, 150, 100);



// 2. Zeichnen Sie Text auf das canvas-Element, indem Sie die Methode fillText verwenden. Stellen Sie die Schriftgröße auf 20px ein und färben Sie den Text blau.

const canvas7 = document.createElement('canvas');
document.body.appendChild(canvas7);
const context7 = canvas7.getContext('2d');
// Festlegen der Schriftart und Schriftgröße
context7.font = '20px Arial';
// Festlegen der Textfarbe auf Blau 
context7.fillStyle = 'blue';
// Zeichnen des Textes 
context7.fillText('Hallo, Canvas!', 10, 100);


// 3. Laden Sie ein Bild auf die Seite und zeigen Sie es innerhalb des <canvas>-Elements an, indem Sie die Methode drawImage verwenden.

// Erstellen Sie ein Canvas-Element und fügen Sie es zur Seite hinzu
const canvas8 = document.createElement('canvas');
document.body.appendChild(canvas8);
const context8 = canvas8.getContext('2d');

// Setzen Sie die Größe des Canvas 
canvas8.width = 500;
canvas8.height = 300;

// Erstellen Sie ein neues Bildobjekt 
const image = new Image();
image.src = 'https://www.uab.edu/elearning/images/pictures/academic-technologies/logos/canvas.png'; // URL des Bildes

// Zeichnen Sie das Bild auf das Canvas, wenn es geladen ist
image.onload = function () {
    context8.drawImage(image, 10, 50, 300, 300); // (image, x, y, Breite, Höhe)
};

// 4. Zeichnen Sie auf dem canvas-Element ein Rechteck mit einem Farbverlauf. Verwenden Sie die Methode createLinearGradient, um einen sanften Farbübergang zu erstellen.

// Erstellen Sie ein Canvas-Element und fügen Sie es zur Seite hinzu
const canvas9 = document.createElement('canvas');
document.body.appendChild(canvas9);
const context9 = canvas9.getContext('2d');

// Setzen Sie die Größe des Canvas 
canvas9.width = 300;
canvas9.height = 200;

// Erstellen Sie einen linearen Farbverlauf (Linearen Farbverlauf erstellen)
const gradient = context9.createLinearGradient(0, 0, canvas9.width, 0);
gradient.addColorStop(0, 'red');      // Anfangsfarbe - Rot
gradient.addColorStop(0.5, 'blue');   // Mittlere Farbe - Blau 
gradient.addColorStop(1, 'purple');   // Endfarbe - Violett  

// Wenden Sie den Farbverlauf an 
context9.fillStyle = gradient;

// Zeichnen Sie ein Rechteck (Rechteck zeichnen)
context9.fillRect(10, 80, 300, 100); // (x, y, Breite, Höhe)


// 5. Verwenden Sie das canvas-Element, um einen Text zu zeichnen, der eine farbige Umrandung (Outline) hat, indem Sie die Methode strokeText verwenden.

// Erstellen Sie ein Canvas-Element und fügen Sie es zur Seite hinzu
const canvas10 = document.createElement('canvas');
document.body.appendChild(canvas10);
const context10 = canvas10.getContext('2d');

// Setzen Sie die Größe des Canvas
canvas10.width = 400;
canvas10.height = 200;

// Schriftgröße und Schriftart festlegen
context10.font = '40px Arial';
// Farbe für den Umriss setzen 
context10.strokeStyle = 'blue';

// Text mit Umrandung zeichnen
context10.strokeText('Hallo, Canvas!', 50, 100);