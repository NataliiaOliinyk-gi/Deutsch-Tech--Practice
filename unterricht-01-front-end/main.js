// Übung 1.1

// Schreiben Sie eine asynchrone Funktion processNumbers, die ein Array von Zahlen entgegennimmt und jede Zahl nacheinander (z.B. quadriert) mit async/await verarbeitet. Geben Sie ein neues Array mit den Verarbeitungsergebnissen zurück und geben Sie es in der Konsole aus.

async function processNumbers(array) {

    const results = await Promise.all(array.map(async (item) => {
        return item * item;
    }));
    return results;
};

processNumbers([1, 2, 3, 4]).then(console.log);

// Übung 1.2

// Erstellen Sie eine asynchrone Funktion getNumberlfEven, die eine Zahl entgegennimmt und diese nur dann zurückgibt, wenn sie gerade ist. Andernfalls gibt die Funktion die Nachricht "The number is odd" zurück.

async function getNumberIfEven(number) {
    if (number % 2 === 0) {
        return await number;
    } else {
        return await "The number is odd";
    };
};
getNumberIfEven(5).then(console.log);

// Übung 1.3

// Schreiben Sie eine Funktion processMultipleArrays, die zwei Arrays von Zahlen entgegennimmt und diese parallel mit Promise.all verarbeitet. Kombinieren Sie die Verarbeitungsergebnisse in einem Array und geben Sie es in der Konsole aus.

async function processMultipleArrays(array1, array2) {
    const [result1, result2] = await Promise.all([processNumbers(array1), processNumbers(array2)]);
    return [...result1, ...result2];
};

processMultipleArrays([1, 2, 3], [3, 2, 1]).then(console.log);

// Übung 1.4

// Erstellen Sie eine asynchrone Funktion retryProcess, die versucht, die Verarbeitung einer Zahl bis zu dreimal durchzuführen, wenn während der Verarbeitung ein Fehler auftritt (z.B. wenn die Zahl negativ ist). Verwenden Sie eine Pause von 1 Sekunde zwischen den Versuchen. Wenn die Verarbeitung nach drei Versuchen fehlschlägt, geben Sie einen Fehler zurück.

function processNumber(num) {
    return new Promise((resolve, reject) => {
        if (num >= 0) {
            resolve(`Ergebnis: ${num}`);
        } else {
            reject(new Error(`Negative Zahl: ${num}`));
        }
    });
};
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function retryProcess(number) {
    for (let i = 0; i < 3; i++) {
        try {
            return await processNumber(number);
        } catch (error) {
            if (i < 2) {
                await delay(1000);
            } else {
                throw new Error(`Nach drei Versuchen fehlschlägt: ${error.message}`);
            }
        }
    }
};

retryProcess(-1)
    .then(console.log)
    .catch(console.error);

// Übung 1.5

// Schreiben Sie eine Funktion batchProcessNumbers, die ein Array von Zahlen entgegennimmt und diese asynchron in Teilen (z.B. jeweils 3 Zahlen) mit einer Verzögerung zwischen den Verarbeitungen verarbeitet. Geben Sie ein Array mit den Verarbeitungsergebnissen zurück.

async function batchProcessNumbers(array, batchSize = 3, delayMs = 1000) {
    let results = [];

    for (let i = 0; i < array.length; i += batchSize) {
        const batch = array.slice(i, i + batchSize);
        const batchResults = await processNumbers(batch);
        results.push(...batchResults);
        console.log(`Processing batch: ${batch}`);

        if (i + batchSize < array.length) {
            await delay(delayMs);
        }
    }

    return results;
};

batchProcessNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).then(console.log);

// Übung 2.1

// Schreiben Sie eine Funktion checkUserObject, die prüft, ob ein Objekt die Pflichtfelder (z.B. Name und Alter) enthält. Wenn ein Feld fehlt, lösen Sie einen ValidationError aus. Behandeln Sie den Fehler mit try/catch und geben Sie eine Nachricht in der Konsole aus.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function checkUserObject(user) {
    if (!user.name) {
        throw new ValidationError("Das Feld 'name' fehlt.");
    }
    if (!user.age) {
        throw new ValidationError("Das Feld 'age' fehlt.");
    }
    console.log(`Das Objekt ist gültig. Name: ${user.name}, Alter: ${user.age}`);
};

try {
    checkUserObject({ name: "Nataliia" });
} catch (error) {
    console.error("Validierungsfehler: ", error.message);
};

// Übung 2.2

// Erstellen Sie eine asynchrone Funktion processData, die ein Array von Daten verarbeitet. Wenn bei der Verarbeitung ein Fehler auftritt (z.B. ungültige Daten), lösen Sie einen Fehler mit der Nachricht "Failed to process data" aus. Behandeln Sie den Fehler mit try/catch und wiederholen Sie den Verarbeitungsversuch.

async function processData(data) {
    let attempts = 3; // Anzahl der Wiederholungen

    for (let i = 0; i < attempts; i++) {
        try {
            const result = await processItem(data);
            return result;
        } catch (error) {
            console.error("Fehler:", error.message);
            if (i === attempts - 1) {
                console.error("Maximale Anzahl an Versuchen erreicht. Verarbeitung fehlgeschlagen.");
            }
        }
    }

    throw new Error("Failed to process data");
}

// Hilfsfunktion zur Simulation der Verarbeitung 
function processItem(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(data.map(item => item * 2));
            } else {
                reject(new Error("Ungültige Daten"));
            }
        }, 1000);
    });
}

processData([1, 2, 3, 4, 5])
    .then(result => console.log("Daten erfolgreich verarbeitet:", result))
    .catch(error => console.error("Endgültiger Fehler:", error.message));


// Übung 2.3

// Schreiben Sie eine Funktion performOperations, die zwei andere Funktionen aufruft: transformData und validateData. Wenn eine der Funktionen einen Fehler auslöst, leiten Sie diesen weiter. Behandeln Sie den Fehler in performOperations und geben Sie eine Nachricht in der Konsole aus.

function performOperations() {

    let result1, result2;

    try {
        result1 = transformData();
        console.log(result1);
    } catch (error) {
        console.error("Fehler:", error.message);
        result1 = "Fehlgeschlagen: Transform";
    }

    try {
        result2 = validateData();
        console.log(result2);
    } catch (error) {
        console.error("Fehler:", error.message);
        result2 = "Fehlgeschlagen: Validierung";
    }

    return { result1, result2 };
};

function transformData() {
    if (Math.random() > 0.5) {
        return "Data erfolgreich transformiert";
    } else {
        throw new Error("Fehler beim Transformieren der Daten");
    }
};

function validateData() {
    if (Math.random() > 0.5) {
        return "Daten erfolgreich validiert";
    } else {
        throw new Error("Fehler bei der Validierung der Daten");
    }
};

performOperations();


// Übung 2.4

// Erstellen Sie zwei Funktionen: loadData und saveData. Die erste Funktion lädt Daten aus einem Array, die zweite speichert sie in einem anderen Array. Behandeln Sie Fehler in jeder Funktion separat mit try/catch und geben Sie eine Fehlermeldung in der Konsole aus.

const dataStorage = ["Eintrag 1", "Eintrag 2", "Eintrag 3"];
const savedData = [];

function loadData(array) {
    try {
        if (!Array.isArray(array)) {
            throw new Error("Eingabewert ist kein Array.");
        }
        return [...array];
    } catch (error) {
        console.error("Fehler beim Laden der Daten:", error.message);
        return [];
    }
};

function saveData(data) {
    try {
        if (!data || (Array.isArray(data) && data.length === 0)) {
            throw new Error("Ungültige Daten. Speicherung nicht möglich.");
        }
        if (!Array.isArray(data)) {
            data = [data];
        }
        savedData.push(...data);
        return [...savedData];
    } catch (error) {
        console.error("Fehler beim Speichern der Daten:", error.message);
        return "Fehler beim Speichern der Daten";
    }
};

console.log(loadData(dataStorage));
console.log(saveData([]));
console.log(saveData(["Neuer Eintrag 1", "Neuer Eintrag 2"]));


// Übung 2.5

// Erstellen Sie eine asynchrone Funktion processMultipleTasks, die mehrere asynchrone Operationen parallel ausführt (z.B. die Verarbeitung mehrerer Datenarrays). Wenn eine der Operationen fehlschlägt, geben Sie die Fehlermeldung für jede fehlgeschlagene Operation zurück. Verwenden Sie Promise.allSettled.

async function processMultipleTasks(tasks) {
    const results = await Promise.allSettled(tasks.map(task => task()));

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Task ${index + 1} erfolgreich:`, result.value);
        } else {
            console.error(`Task ${index + 1} fehlgeschlagen:`, result.reason);
        }
    });

    return results;
}

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, 'Ergebnis von Task 1');
    });
};

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'Ergebnis von Task 2');
    });
};

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'Ergebnis von Task 3');
    });
};

processMultipleTasks([task1, task2, task3])
    .then(console.log)
    .catch(console.error);

