
// 1. Erstellen Sie eine Klasse "Arithmetik" mit einer statischen Methode und Eigenschaft. Die Klasse sollte die statische Eigenschaft zero enthalten, die den Wert Null speichert, und die statische Methode increment, die eine Zahl annimmt und sie um eins erhöht zurückgibt.

class Arithmetik {
    static zero = 0;
    static getIncrement(number) {
        // return number + 1;
        return ++number;
    }
}

console.log(Arithmetik.getIncrement(4));


// 2. Implementieren Sie die Klasse "IDGenerator" mit der statischen Methode generateID. Diese Methode sollte eine eindeutige Identifikationsnummer generieren und zurückgeben. Der eindeutige Identifikator sollte aus dem Präfix ID und einer zufälligen Zeichenfolge bestehen und bei jedem Aufruf der Methode einzigartig sein.

class IDGenerator {
    static generateID() {
        return 'ID' + Math.random().toString().slice(2, 9);
    }
}
console.log(IDGenerator.generateID());

// 3. Erstellen Sie die Klasse "Mitarbeiter" mit der statischen Methode calculateAverageSalary. Die Methode sollte eine unbegrenzte Anzahl von Mitarbeitergehältern annehmen und das Durchschnittsgehalt zurückgeben. Zusätzlich sollte die Klasse die statische Eigenschaft minimumWage besitzen, die den Mindestlohn definiert.

class Mitarbeiter {
    static minimumWage = 2000;
    static calculateAverageSalary(array) {
        const sum = array.reduce((acc, element) => {
            return acc + element
        }, 0)
        return sum / array.length;
    }
}

console.log(Mitarbeiter.calculateAverageSalary([2000, 15000, 3500, 5000]));

// 4. Implementieren Sie die Klasse "StringUtils" mit den statischen Methoden reverseString und isPalindrome. Die Methode reverseString sollte einen String annehmen und ihn mithilfe von Rekursion in umgekehrter Reihenfolge zurückgeben. Die Methode isPalindrome sollte einen String annehmen und mithilfe von Rekursion bestimmen, ob es sich um ein Palindrom handelt.

class StringUtils {
    static reverseString(string) {
        if (string.length > 0) {
            return string[string.length - 1] + this.reverseString(string.slice(0, -1))
        } else {
            return string;
        }
    }

    static isPalindrome(string) { 
        
    }
}

console.log(StringUtils.reverseString('some text'));

// ****************
class Aritmetik {
    static zero = 0;
    
    static increment(number) {
        return number + 1;
    }
  }
  console.log(Aritmetik.increment(1));
  console.log(Aritmetik.zero);
  class IDGenerator {
    static generateId() {
        const prefix = 'ID_';
      
      const random = Math.random().toString(12).slice(2, 12);
      return `${prefix}${random}`;
    }
  }
  console.log(Math.random());
  console.log(IDGenerator.generateId());
  class Mitarbeiter {
    static minimumWage = 1000;
    
    static calculateAverageSalary(...salaries) {
      if (salaries.length === 0) return 0;
      
      const total = salaries.reduce((sum, salary) => sum + salary, 0);
      return total/salaries.length;
    }
  }
  console.log(Mitarbeiter.calculateAverageSalary(1000, 1500, 2000));
  console.log(Mitarbeiter.minimumWage);
  class StringUtils {
    static reverseString(str) {
        if (str.length <= 1) return str;
      
      return str[str.length - 1] + StringUtils.reverseString(str.slice(0, -1));
    }
    
    static isPalindrome(str) {
      if (str.length <= 1) return true;
      if (str.charAt(0) !== str.charAt(str.length - 1)) return false;
      return StringUtils.isPalindrome(str.slice(1, -1));
    }
  }
  console.log(StringUtils.reverseString('hello'));