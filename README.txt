# AppLauncher Project – Setup & Usage Guide (Windows 11 & Linux)

## Overview

This project is a simple application launcher built using Python (Flask) for the frontend and Java (Spring Boot) for the backend.

The application is designed so that:

* The Python app (`app.py`) runs the frontend.
* The Java backend provides data (such as portfolio information).
* The frontend will still run even if the backend is not available, but some data will be missing.

This guide is written for users on **Windows 11** and **Linux (such as Arch, Ubuntu, etc.)**.

---

## Requirements

Before running this project, you need to install the following:

### 1. Python (Required)

#### Windows 11:

* Download Python from the official website: https://www.python.org/downloads/
* During installation, **make sure to check**:

  ```
  ✔ Add Python to PATH
  ```

#### Linux:

Install Python using your package manager.

* Arch Linux:

  ```
  sudo pacman -S python
  ```
* Ubuntu/Debian:

  ```
  sudo apt install python3
  ```

Verify installation:

```
python --version
```

(or `python3 --version` on some systems)

---

### 2. Java (Required for Backend)

#### Windows 11:

* Download and install Java JDK 21 (or newer)
* After installing, verify:

  ```
  java -version
  ```

#### Linux:

* Arch Linux:

  ```
  sudo pacman -S jdk-openjdk
  ```
* Ubuntu/Debian:

  ```
  sudo apt install openjdk-21-jdk
  ```

Verify:

```
java -version
```

---

### 3. (Optional) Git

Used to download or manage the project.

* Windows: https://git-scm.com/download/win
* Linux:

  ```
  sudo pacman -S git        # Arch
  sudo apt install git      # Ubuntu/Debian
  ```

---

## Project Structure (Simplified)

```id="a82kq1"
appHub/
│
├── pythonFlaskJavaHub/   → Frontend (Flask app)
│   └── app.py
│
├── javaBackendV2/        → Backend (Spring Boot app)
│   └── app/build/libs/app.jar
```

---

## How to Run the Project

### Step 1 — Open Terminal / Command Prompt

#### Windows 11:

* Open **Command Prompt** or **PowerShell**
* Navigate to the project folder:

  ```
  cd path\to\appHub
  ```

#### Linux:

* Open terminal
* Navigate:

  ```
  cd ~/path/to/appHub
  ```

---

### Step 2 — Run the Python App

#### Windows:

```
cd pythonFlaskJavaHub
python app.py
```

#### Linux:

```
cd pythonFlaskJavaHub
python app.py
```

(or `python3 app.py` if needed)

---

## What Happens When You Run It

The application will:

1. Check if the backend exists:

   * If `app.jar` exists → runs using Java
   * Otherwise → attempts to run using Gradle
   * If neither works → backend is skipped

2. Start the Flask frontend server

3. Automatically open your browser at:

```
http://localhost:5001/
```

---

## How to Use the App

Once the application opens in your browser:

* On the **right side**:

  * You will see two applications you can click and use

* On the **left side**:

  * You will see information about the developer (portfolio data)

### Backend Behavior

* If the backend is running:

  * Full data will be displayed (name, education, links, etc.)

* If the backend is NOT running:

  * The app will still function
  * Some information may be missing
  * The text where the info would be will display a message explaining why(might be why)

---

## Troubleshooting

### Backend Not Working

If data is missing:

1. Ensure Java is installed:

   ```
   java -version
   ```

2. Check if this file exists:

   ```
   javaBackendV2/app/build/libs/app.jar
   ```

3. If not, build it:

#### Linux:

```
cd javaBackendV2
./gradlew :app:bootJar
```

#### Windows:

```
cd javaBackendV2
gradlew.bat :app:bootJar
```

---

### Port Already in Use (Port 5001)

If you see an error about port `5001`:

#### Linux:

```
pkill -f python
```

#### Windows (Command Prompt):

```
taskkill /F /IM python.exe
```

---

### Browser Does Not Open

Manually open:

```
http://localhost:5001/
```

---

## Notes

* This project is intended for learning and demonstration purposes.
* The frontend (Python/Flask) and backend (Java) are loosely connected:

  * The frontend can run without the backend
  * The backend enhances the application with additional data

---

## Summary

To run the project:

1. Install Python and Java
2. Open terminal / command prompt
3. Navigate to:

   ```
   pythonFlaskJavaHub
   ```
4. Run:

   ```
   python app.py
   ```
5. Open:

   ```
   http://localhost:5001/
   ```

---

End of Guide

