### Technischer Unterricht 13

**Aufgabe 1. Registriersungformular mit Memoisierung der Felder**

**Ziel:** Erstellen Sie eine Formular-Komponente namens „RegistrationForm“ mit drei Feldern:
username, email und password. Verwenden Sie die React-Hooks **useState**, **useCallback**
und **useMemo**, um den Zustand zu verwalten und die Memoisierung zu ermöglichen.

1.  Neue Datei RegistrationForm.js erstellen

    - Importieren Sie React und die benötigten Hooks: useState, useCallback, useMemo.
    - Erstellen Sie eine funktionale Komponente RegistrationForm.

2.  Initialisierung des Formularzustands - Verwenden Sie useState, um ein State-Objekt zu erstellen, z. B.:

    <pre> ``` 
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
    });
    ``` </pre>

    - Jedes Attribut (username, email, password) wird an das entsprechende Eingabefeld gebunden.

3.  Memoisierung des Change-Handlers

    - Schreiben Sie eine Funktion handleChange(e), die das jeweilige Feld im Zustand aktualisiert:

    <pre> ```
    const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);
    ``` </pre>

    - Beachten Sie, dass useCallback (ohne oder mit [setFormData] als Abhängigkeit) dafür sorgt, dass der Handler nicht bei jedem Rendern neu erstellt wird.

4.  Berechnung der gesamten Zeichenanzahl

    - Verwenden Sie useMemo, um die gesamte Zeichenanzahl zu berechnen:

     <pre> ```
     const totalChars = useMemo(() => {
     const { username, email, password } = formData;
     return username.length + email.length + password.length;
     }, [formData]);
     ``` </pre>

    - Dieses Memo wird nur neu berechnet, wenn sich formData ändert.

5.  JSX-Markup

    - Erstellen Sie ein Formular mit drei Eingabefeldern (z. B. <TextField> aus MUI oder einfache <input>).
      Jedes Feld verwendet name, value und onChange={handleChange}.
    - Geben Sie das Ergebnis totalChars (die Gesamtanzahl der Zeichen) unterhalb des Formulars aus.

6.  Export und Test
    - Exportieren Sie RegistrationForm und binden Sie es in App.js ein, damit es in der Benutzeroberfläche angezeigt wird.
    - Testen Sie das Eingeben von Werten in die Felder: Überprüfen Sie, ob die Werte korrekt gespeichert werden und ob totalChars korrekt aktualisiert wird.

**Ergebnis:** Ein Registrierungsformular, das bei jeder Eingabe automatisch die gesamte Zeichenanzahl mithilfe der Memoisierung (Hooks) berechnet.
