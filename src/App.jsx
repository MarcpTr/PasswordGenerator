import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState("12");

  const includeNumbers = useRef();
  const includeSymbols = useRef();
  const includeUppercase = useRef();

  let generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = lowerCaseChars;
    if (includeUppercase.current.checked) characters += upperCaseChars;
    if (includeNumbers.current.checked) characters += numbers;
    if (includeSymbols.current.checked) characters += symbols;

    let genPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      genPassword += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(genPassword);
    console.log(genPassword);
  };

  let copy = () => {
    navigator.clipboard.writeText(password);
  };
  return (
    <div class="flex flex-col items-center mt-20 px-4 sm:px-0">
      <h1 class="text-4xl sm:text-5xl font-semibold text-gray-100 mb-8">
      Password Generator
      </h1>
      <p class="text-2xl rounded-lg bg-gray-800 mb-6 ps-4 py-8 w-96 h-12 text-center flex items-center justify-between">
        <span class="text-white">{password}</span>
        <button
          onClick={copy}
          class="bg-gray-700 text-white p-2 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          <i class="fas fa-copy"></i>
        </button>
      </p>
      <div class="mb-8 w-full sm:w-96 space-x-2 text-xl flex items-center justify-between">
        <label for="passwordLength" class="text-gray-100">
        Length
        </label>
        <input
          type="range"
          min="6"
          max="20"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          class="w-3/5"
        ></input>
        <span class="text-gray-100">{passwordLength}</span>
      </div>

      <div class="flex flex-wrap justify-between w-full sm:w-96 mb-8 text-xl">
        <div class="space-x-2 flex items-center">
          <input
            type="checkbox"
            ref={includeNumbers}
            defaultChecked={true}
            class="form-checkbox"
          ></input>
        </div>

        <label for="includeNumbers" class="text-gray-100">
          Numbers
        </label>
        <div class="space-x-2">
          <input
            type="checkbox"
            ref={includeSymbols}
            defaultChecked={true}
            class="form-checkbox"
          ></input>
        </div>

        <label for="includeSymbols" class="text-gray-100">
          Symbols
        </label>
        <div class="space-x-2">
          <input
            type="checkbox"
            ref={includeUppercase}
            defaultChecked={true}
            class="form-checkbox"
          ></input>
        </div>

        <label for="includeUppercase" class="text-gray-100">
          Uppercase
        </label>
      </div>

      <button
        onClick={generatePassword}
        class="py-2.5 px-6 text-xl rounded-lg font-medium bg-gray-700 text-white hover:bg-gray-600 transition duration-300 mb-8"
      >
        Generate
      </button>

      <div class="bg-gray-100 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
        <h3 class="text-3xl font-semibold text-gray-800 mb-4">
        Tips for managing your passwords:
        </h3>

        <ul class="space-y-3 text-lg text-gray-700">
          <li class="flex items-start space-x-3">
            <p>Use unique passwords for each account.</p>
          </li>
          <li class="flex items-start space-x-3">
            <p>Change your passwords regularly.</p>
          </li>
          <li class="flex items-start space-x-3">
            <p>
            Use a password manager to store your passwords securely.
            </p>
          </li>
          <li class="flex items-start space-x-3">
            <p>
            Avoid using easily accessible personal information (name, birthdate).
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
